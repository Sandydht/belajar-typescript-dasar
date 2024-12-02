# Type Assertions
* Kadang kita berada pada situasi dimana kita tahu tipe data yang kita gunakan, namun TypeScript tidak tahu tipe data tersebut.
* Biasanya pada kasus kita menggunakan kode dari JavaScript sehingga membuat return value nya berupa tipe data any.
* Pada kasus ini, kita bisa melakukan konversi ke tipe data yang kita mau menggunakan kata kunci ``` as ```.
* Ini disebut dengan type assertions.
* Kode: Type Assertions
  ```TSX
  const person: any = {
    name: 'Sandy',
    age: 28
  };

  const person2: Person = person as Person;

  console.info(person2);
  ```