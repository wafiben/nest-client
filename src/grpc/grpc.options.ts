import { ClientOptions, Transport } from '@nestjs/microservices';

export const casbinProtoAbsolutePath =
  'C:/Users/wafib/OneDrive/Bureau/casbin-server/proto/casbin.proto';
export const grpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'proto',
    protoPath: casbinProtoAbsolutePath,
  },
};
