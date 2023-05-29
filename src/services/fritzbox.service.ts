import axios from 'axios';
import { xmlPartser } from 'src/utils/xmlParser/xmlParser';

export class FritBox {
  private baseUrl = 'http://fritz.box:49000';
  private userName: string;
  private passWord: string;
  constructor({ userName, passWord }) {
    this.userName = userName;
    this.passWord = passWord;
  }
  public async setupDeviceInfomation() {
    const { data } = await axios.get(`${this.baseUrl}/tr64desc.xml`);
    const desc = await xmlPartser(data);
    return desc;
  }
}
