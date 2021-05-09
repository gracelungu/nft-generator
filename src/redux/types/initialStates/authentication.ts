type TBaseStoreType = {
  data: Record<string, any>;
  loading: boolean;
  error: Record<string, any>;
};

interface IAuthentication {
  login: TBaseStoreType;
}

export default IAuthentication;
