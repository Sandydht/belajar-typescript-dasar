import { sayHello } from "../src/1_sayHello/sayHello";

describe('sayHello', () => {
  it('should return hello sandy', () => {
    expect(sayHello('sandy')).toBe('Hello sandy');
  });
});
