# Function sebagai Parameter
* Sama seperti di JavaScript, di TypeScript kita juga bisa gunakan function sebagai parameter.
* Hal ini sudah sering kita lakukan, biasanya ketika memanggil function yang membutuhkan callback function lainnya.
* Pada TypeScript parameter yang berupa function, perlu kita beri tahu bahwa parameter tersebut adalah function.
* Kita bisa gunakan function interface, atau bisa langsung sebutkan pada parameter nya, jumlah parameter dan return value function yang dibutuhkan.
* Kode: Function sebagai Parameter
  ```TSX
  function sayHello(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`;
  }

  function toUpper(name: string): string {
    return name.toUpperCase();
  }

  expect(sayHello('Sandy', toUpper)).toBe('Hello SANDY');
  ```
* Kode: Anonymous Function
  ```TSX
  function sayHello(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`;
  }

  expect(sayHello('Sandy', function(name: string): string {
    return name.toUpperCase();
  }));
  ```
* Kode: Arrow Function
  ```TSX
  function sayHello(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`;
  }

  expect(sayHello('Sandy', (name: string): string => name.toUpperCase()));
  ```