let sample: number | string | boolean = "Sandy";
sample = 100;
sample = true;

console.info(sample);

export function process(value: number | string | boolean) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value + 2;
  } else {
    return !value;
  }
}