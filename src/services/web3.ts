import Web3 from "web3";
import lockSaveAbi from "../constants/lockSave.abi.json";

class Web3Service {
  web3: Web3;
  rpcUrl: string;
  address: string;
  contract: any;

  constructor() {
    this.rpcUrl = "http://127.0.0.1:7545";
    this.web3 = new Web3(Web3.givenProvider || this.rpcUrl);
    this.address = "0x082E119be6cEC2dF5d6fAB031Ab342c2E05bC19c";
    this.contract = this.generateContract();
  }

  async setMetaMaskAccount() {
    try {
      if (window.ethereum) {
        await window.ethereum.enable();
        this.web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        this.web3 = new Web3(window.web3.currentProvider);
      }

      this.contract = this.generateContract();
    } catch (e) {
      console.log(e);
    }
  }

  async getAccounts() {
    return this.web3.eth.getAccounts();
  }

  generateContract() {
    return new this.web3.eth.Contract(lockSaveAbi, this.address);
  }

  async receiveSavings(
    sender: string,
    amount: number,
    withdrawTimestamp: number
  ) {
    await this.web3.eth.sendTransaction({
      from: sender,
      to: this.address,
      data:
        this.web3.eth.abi.encodeFunctionSignature("receiveSavings(uint256)") +
        this.web3.eth.abi
          .encodeParameters(["uint256"], [withdrawTimestamp])
          .substr(2),
      value: this.web3.utils.toWei(amount.toString(), "ether"),
    });
  }

  async withdrawSavings(sender: string, savingTimestamp: number) {
    await this.contract.methods.withdrawSavings(savingTimestamp).send({
      from: sender,
    });
  }

  earlySavingsWithdrawal(sender: string, savingTimestamp: number) {
    return this.contract.methods.earlySavingsWithdrawal(savingTimestamp).send({
      from: sender,
    });
  }

  getUserTotalSavingAmount(sender: string) {
    return this.contract.methods.getUserTotalSavingAmount(sender).call();
  }

  getUserSavings(sender: string) {
    return this.contract.methods.getUserSavings(sender).call();
  }

}

const web3 = new Web3Service();
export default web3;