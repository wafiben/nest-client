import { Injectable } from '@nestjs/common';
import { Client, ClientUnaryCall } from '@grpc/grpc-js';

/* import {
  CasbinClient,
  NewEnforcerRequest,
  NewAdapterRequest,
  BoolReply,
  EmptyRequest,
  EmptyReply,
  PolicyRequest,
  SimpleGetRequest,
  ArrayReply,
  FilteredPolicyRequest,
  UserRoleRequest,
  PermissionRequest,
  Array2DReply,
  // Import other generated types as needed
} from './path/to/generated/casbin_grpc_pb'; */

/* private readonly casbinClient: casbin.CasbinClient; */
import * as grpc from '@grpc/grpc-js';
import { casbin } from './casbin_grpc_pb';

@Injectable()
export class CasbinGrpcClient {
  private readonly casbinClient: casbin.CasbinClient;
  constructor(private readonly client: Client) {
    this.casbinClient = new casbin.CasbinClient('localhost:50051', this.client);
  }

  newEnforcer(request: casbin.NewEnforcerRequest): Promise<casbin.EmptyReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.newEnforcer(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /*   newEnforcer(request: NewEnforcerRequest): Promise<EmptyReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.newEnforcer(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  newAdapter(request: NewAdapterRequest): Promise<EmptyReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.newAdapter(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  enforce(enforceRequest: any): Promise<BoolReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.enforce(enforceRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  loadPolicy(emptyRequest: EmptyRequest): Promise<EmptyReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.loadPolicy(emptyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  savePolicy(emptyRequest: EmptyRequest): Promise<EmptyReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.savePolicy(emptyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  addPolicy(policyRequest: PolicyRequest): Promise<BoolReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.addPolicy(policyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  addNamedPolicy(policyRequest: PolicyRequest): Promise<BoolReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.addNamedPolicy(policyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  removePolicy(policyRequest: PolicyRequest): Promise<BoolReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.removePolicy(policyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  removeNamedPolicy(policyRequest: PolicyRequest): Promise<BoolReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.removeNamedPolicy(policyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  removeFilteredPolicy(filteredPolicyRequest: FilteredPolicyRequest): Promise<BoolReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.removeFilteredPolicy(filteredPolicyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  removeFilteredNamedPolicy(filteredPolicyRequest: FilteredPolicyRequest): Promise<BoolReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.removeFilteredNamedPolicy(filteredPolicyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getPolicy(emptyRequest: EmptyRequest): Promise<Array2DReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.getPolicy(emptyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getNamedPolicy(policyRequest: PolicyRequest): Promise<Array2DReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.getNamedPolicy(policyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getFilteredPolicy(filteredPolicyRequest: FilteredPolicyRequest): Promise<Array2DReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.getFilteredPolicy(filteredPolicyRequest, (error, response) => {
        if error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getFilteredNamedPolicy(filteredPolicyRequest: FilteredPolicyRequest): Promise<Array2DReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.getFilteredNamedPolicy(filteredPolicyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  

  getAllSubjects(emptyRequest: EmptyRequest): Promise<ArrayReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.getAllSubjects(emptyRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getAllNamedSubjects(simpleGetRequest: SimpleGetRequest): Promise<ArrayReply> {
    return new Promise((resolve, reject) => {
      this.casbinClient.getAllNamedSubjects(simpleGetRequest, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  } */
}
