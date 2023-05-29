import { Injectable } from '@nestjs/common';
import { FritBox } from './services/fritzbox.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async setupDeviceInfomation(): Promise<string> {
    try {
      const myFritzBox = new FritBox({
        userName: process.env.FRITZBOX_USERNAME,
        passWord: process.env.FRITZBOX_PASSWORD,
      });
      const descInfo = await myFritzBox.setupDeviceInfomation();
      return descInfo;
    } catch (error) {
      console.error('Can not get device Infomation:', error);
    }
  }
}
