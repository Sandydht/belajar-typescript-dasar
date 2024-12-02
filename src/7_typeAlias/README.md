# Type Alias
* Menggunakan tipe data any sebenarnya tidak direkomendasikan.
* Biasanya kita akan menggunakan tipe data any jika memang datanya kita gunakan dari library orang lain yang sudah tidak bisa diubah, atau memang ketika attribute nya tidak pasti datanya.
* Pada kasus jika kita membuat tipe data JavaScript object sendiri, kita bisa membuat alias untuk struktur tipe data objectnya.
* Kode: Alias
  ```TSX
  export type Category = {
    id: string;
    name: string;
  }

  export type Product = {
    id: string;
    name: string;
    price: number;
    category: Category
  }
  ```
* Kode: Test Alias
  ```TSX
  const category: Category = {
    id: "1",
    name: "Handphone"
  };

  const product: Product = {
    id: "1",
    name: "Samsung S20",
    price: 20000000,
    category: Category
  };

  console.info(category);
  console.info(product);
  ```

# Type Alias untuk Union Type
* Type alias juga bisa digunakan untuk membuat union type.
* Kode: Type Alias untuk Union Type
  ```TSX
  export type ID = string | number;

  export type Category = {
    id: ID;
    name: string;
  }

  export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
  }
  ```