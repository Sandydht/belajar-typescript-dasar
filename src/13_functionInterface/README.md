# Function Interface
* Di TypeScript, kita juga bisa membuat deklarasi function dalam bentuk interface.
* Dengan demikian ketika kita ingin membuat variabel yang berisi function, kita bisa dengan mudah menggunakan interface tersebut.
* Kode: Function Interface
  ```TSX
  interface AddFunction {
    (value1: number, value2: number): number
  }

  const add: AddFunction = (value1: number, value2: number): number => {
    return value1 + value2;
  }

  console.info(add(1, 2));
  ```