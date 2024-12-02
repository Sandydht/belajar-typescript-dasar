# Function di Interface
* Implementasi dari interface di JavaScript sebenarnya adalah sebuah object.
* Seperti yang kita tahu, di JavaScript kita bisa menambahkan function sebagai attribute di object.
* Hal ini juga bisa kita lakukan di interface.
* Kode: Interface Person
  ```TSX
  interface Person {
    name: string;
    sayHello(name: string): string;
  }
  ```
* Kode: Function di Interface
  ```TSX
  const person: Person = {
    name: 'Sandy',
    sayHello: function (name: string): string {
      return `Hello ${name}, my name is ${this.name}`;
    }
  }

  console.info(person.sayHello('Dwi'));
  ```