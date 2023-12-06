import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcModule } from './grpc/grpc.module';
import { TestController } from './casbin/casbin.controller';

@Module({
  imports: [GrpcModule],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
