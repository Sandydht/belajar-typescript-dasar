const names: string[] = ["Sandy", "Dwi", "Handoko", "Trapsilo"];
const values: number[] = [1, 2, 3];

console.info(names);
console.info(values);

const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
console.info(hobbies);

const person: readonly [string, string, number] = ["Sandy", "Dwi", 30];

console.info(person[0]);
console.info(person[1]);
console.info(person[2]);
