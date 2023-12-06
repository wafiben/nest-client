import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GrpcServiceControle } from './grpc.service';
import { join } from 'path';
import { CasbinGrpcClient } from 'src/casbin/casbin-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CASBIN_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'proto',
          protoPath: join(
            __dirname,
            '../../../casbin-server/proto/casbin.proto',
          ),
        },
      },
    ]),
  ],

  providers: [GrpcServiceControle, CasbinGrpcClient],
  exports: [CasbinGrpcClient],
})
export class GrpcModule {}
