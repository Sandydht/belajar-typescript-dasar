# Optional Properties
* Secara default, saat kita membuat attribute di Object atau Type, maka attribute tersebut wajib diisi nilainya.
* Namun, kadang - kadang tidak semua attribute itu wajib diisi nilainya.
* Pada kasus attribute nya tidak wajib diisi, kita bisa tambahkan tanda ``` ? ``` untuk menandakan bahwa itu adalah optional.
* Kode: Optional Properties
  ```TSX
  export type ID = string | number;

  export type Category = {
    id: ID;
    name: string;
    description?: string;
  }

  export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
    description?: string;
  }

  const person: { id: string, name: string, hobbies?: string[] } = {
    id: '1',
    name: 'Sandy'
  };

  console.info(person);

  person.id = '2';
  person.name = 'Dwi';

  console.info(person);
  ```