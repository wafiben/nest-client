export namespace casbin {
  class CasbinClient {
    constructor(address: string, credentials: any);
    newEnforcer(
      request: NewEnforcerRequest,
      callback: (error: any, response: EmptyReply) => void,
    ): void;
  }

  interface NewEnforcerRequest {
    modelText: string;
    adapterHandle: number;
  }

  interface EmptyReply {}
}
