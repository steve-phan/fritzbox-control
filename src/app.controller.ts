import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //TODO: remove later, add deviceInfo to device Instance
  @Get('setupDeviceInfomation')
  async setupDeviceInfomation(): Promise<string> {
    const deviceInfo = await this.appService.setupDeviceInfomation();
    return deviceInfo;
  }
}
