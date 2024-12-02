# Intersection Types
* Intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain.
* Hal ini sangat cocok ketika kita tidak bisa melakukan extends pada interface.
* Kita bisa membuat type dengan menggunakan kata kunci ``` & ``` (dan).
* Kode: Intersection Types
  ```TSX
  export interface HasName {
    name: string;
  }

  export interface hasId {
    id: string;
  }

  export type Domain = HasId & HasName;
  ```
* Kode: Menggunakan Intersection Types
  ```TSX
  const domain: Domain = {
    id: '1',
    name: 'Sandy'
  };

  console.info(domain);
  ```