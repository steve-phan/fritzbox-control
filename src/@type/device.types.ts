// http://fritz.box:49000/tr64desc.xml
export interface Root {
  specVersion: SpecVersion;
  systemVersion: SystemVersion;
  device: RootDevice;
  '@_xmlns': string;
}

export interface RootDevice {
  deviceType: string;
  friendlyName: string;
  manufacturer: string;
  manufacturerURL: string;
  modelDescription: string;
  modelName: string;
  modelNumber: string;
  modelURL: string;
  UDN: string;
  serialNumber: string;
  originUDN: string;
  iconList: IconList;
  serviceList: ServiceList;
  deviceList: PurpleDeviceList;
  presentationURL: string;
}

export interface PurpleDeviceList {
  device: DeviceElement[];
}

export interface FluffyDeviceList {
  device: DeviceElement;
}

export interface DeviceElement {
  deviceType: string;
  friendlyName: string;
  manufacturer: string;
  manufacturerURL: string;
  modelDescription: string;
  modelName: string;
  modelNumber: string;
  modelURL: string;
  UDN: string;
  UPC: string;
  serviceList: ServiceList;
  deviceList?: FluffyDeviceList;
}

export interface ServiceList {
  service: Service[];
}

export interface Service {
  serviceType: string;
  serviceId: string;
  controlURL: string;
  eventSubURL: string;
  SCPDURL: string;
}

export interface IconList {
  icon: Icon;
}

export interface Icon {
  mimetype: string;
  width: number;
  height: number;
  depth: number;
  url: string;
}

export interface SpecVersion {
  major: number;
  minor: number;
}

export interface SystemVersion {
  HW: number;
  Major: number;
  Minor: number;
  Patch: number;
  Buildnumber: number;
  Display: string;
}
