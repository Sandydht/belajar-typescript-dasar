import { sayHello } from "../src/say-hello/index";

describe('sayHello', () => {
  it('should return hello sandy', () => {
    expect(sayHello('sandy')).toBe('Hello sandy');
  });
});
