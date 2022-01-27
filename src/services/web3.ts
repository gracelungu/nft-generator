import Web3 from "web3";

class Web3Service {
  web3: Web3;
  BNBrpcUrl: string;
  BNBAddress: string;
  ETHAddress: string;

  constructor() {
    this.BNBrpcUrl = "https://bsc-dataseed1.binance.org:443";
    this.BNBAddress = "0x3Be1C2D843CC57ca5dcb663393e06f7058F3901a";
    this.ETHAddress = "0x370178CE5A445931FB903e888f17369696a753cF";
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.BNBrpcUrl));
  }

  async setMetaMaskAccount(bnb: boolean) {
    try {
      if (window.ethereum) {
        await window.ethereum.enable();
        if (bnb) {
          this.web3 = new Web3(new Web3.providers.HttpProvider(this.BNBrpcUrl));
        } else {
          this.web3 = new Web3(window.ethereum);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getAccounts(): Promise<Array<string>> {
    return this.web3.eth.getAccounts();
  }

  async sendTransaction(amount: number, bnb?: boolean) {
    const [account] = await this.getAccounts();
    try {
      const transaction = await this.web3.eth.sendTransaction({
        from: account,
        to: bnb ? this.BNBAddress : this.ETHAddress,
        value: amount,
      });
      console.log(transaction);
    } catch (e) {
      console.log(e);
    }
  }

  async collectPayment(amount: number, bnb?: boolean) {
    try {
      // eth to wei
      const wei = this.web3.utils.toWei(amount.toString(), "ether");
      await this.setMetaMaskAccount(bnb || false);
      await this.sendTransaction(Number(wei), bnb || false);
    } catch (e) {
      console.log(e);
    }
  }
}

const web3 = new Web3Service();
export default web3;
