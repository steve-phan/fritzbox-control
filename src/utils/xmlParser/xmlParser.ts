import { XMLParser } from 'fast-xml-parser';

export const xmlPartser = async (data) => {
  const parser = new XMLParser({ ignoreAttributes: false });
  return await parser.parse(data);
};
