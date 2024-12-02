# Function Parameter
* Sama seperti di JavaScript, function di TypeScript bisa memiliki banyak parameter, rest parameter (variabel argument) sampai default value.
* Fitur yang berbeda dengan JavaScript adalah di TypeScript setiap parameter wajib diisi, kecuali kita tentukan sebagai optional menggunakan ``` ? ``` (tanda tanya).
* Kode: sayHello Function
  ```TSX
  function sayHello(name: string = 'Guest'): string {
    return `Hello ${name}`;
  }

  expect(sayHello('Sandy')).toBe('Hello Sandy');
  expect(sayHello()).toBe('Hello Guest');
  ```
* Kode: sum Function
  ```TSX
  function sum(...values: number[]): number {
    let total = 0;
    for (const value of values) {
      total += value;
    }

    return total;
  }

  expect(sum(1, 2, 3, 4, 5)).toBe(15);
  ```