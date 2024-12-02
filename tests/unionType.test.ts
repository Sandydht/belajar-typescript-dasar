import { process } from "../src/6_unionType/unionType";

describe('process', () => {
  it('should return value correctly', () => {
    expect(process(100)).toBe(102);
    expect(process("Sandy")).toBe("SANDY");
    expect(process(true)).toBe(false);
  });
});
