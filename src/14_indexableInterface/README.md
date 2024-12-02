# Indexable Function 
* Interface juga bisa digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti Array atau Output.
* Kode: Array
  ```TSX
  interface StringArray {
    [index: number]: string
  }

  const names: StringArray = ["Sandy", "Dwi", "Handoko", "Trapsilo"];

  console.info(names[0]);
  console.info(names[1]);
  console.info(names[2]);
  console.info(names[3]);
  ```
* Kode: Object
  ```TSX
  interface StringDictionary {
    [key: string]: string;
  }

  const dictionary: StringDictionary = {
    name: 'Sandy',
    address: 'Kendal'
  }

  console.info(dictionary['name']);
  console.info(dictionary['address']);
  ```