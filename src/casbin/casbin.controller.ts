import { Controller, Get } from '@nestjs/common';
import { CasbinGrpcClient } from 'src/casbin/casbin-client.service';

@Controller('casbin')
export class TestController {
  constructor(private readonly casbinClientService: CasbinGrpcClient) {}

  @Get('test')
  async test(): Promise<void> {
    console.log('yep');
    /* return await this.casbinClientService.test(); */
  }
}
