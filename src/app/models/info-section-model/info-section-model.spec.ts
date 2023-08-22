import { InfoSectionModel } from './info-section-model';

  const headline: string = "";
  const subTitles: Array<string> = [""];
  const details: string = "";


describe('InfoSectionModel', () => {
  it('should create an instance', () => {
    expect(new InfoSectionModel(headline, subTitles, details)).toBeTruthy();
  });
});
