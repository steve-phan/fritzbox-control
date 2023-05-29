import { xmlPartser } from './xmlParser';

describe('xmlPartser', () => {
  it('should parse XML data', async () => {
    // Create sample XML data
    const xmlData = `
      <SessionInfo>
        <SID>123456789</SID>
        <Challenge>ABCDEF</Challenge>
      </SessionInfo>
    `;
    const result = await xmlPartser(xmlData);
    expect(result).toEqual({
      SessionInfo: {
        SID: 123456789,
        Challenge: 'ABCDEF',
      },
    });
  });
});
