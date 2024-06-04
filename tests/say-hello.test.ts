import { sayHello } from '../src/say-hello';

describe('sayHello', function() {
  it('should return Hello Sandy', function() {
    const name:string = 'Sandy';
    expect(sayHello(name)).toBe(`Hello ${name}`);
  });
});
