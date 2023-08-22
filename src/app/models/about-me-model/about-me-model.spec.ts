import { AboutMeModel } from './about-me-model';

const testString = "";
const testArray: Array<string> = ["someString", "", ""];

describe('AboutMeModel', () => {
  it('should create an instance', () => {
    expect(
      new AboutMeModel(
        testString,
        testString,
        testString,
        testString,
        testArray,
        testString
      )
    ).toBeTruthy();
  });
});
