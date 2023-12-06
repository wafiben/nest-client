// your-grpc.service.ts

import { Injectable } from '@nestjs/common';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcOptions } from './grpc.options';

@Injectable()
@GrpcService('casbin.proto')
export class GrpcServiceControle {
  @Client(grpcOptions)
  private readonly client: ClientGrpc;

  // Define gRPC methods as needed
  @GrpcMethod('GrpcMethod')
  yourGrpcMethod(data: any): any {
    // Implement your gRPC method logic here
    return { yourResponse: 'Hello from gRPC' };
  }
}
