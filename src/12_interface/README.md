# Interface
* Interface adalah cara lain melakukan deklarasi data selain menggunakan ``` Type ```.
* Lantas kalo begitu, apa bedanya ``` Interface ``` dengan ``` Type ``` ?.
* ``` Interface ``` bisa dikembangkan dengan mudah dibanding dengan ``` Type ```.
* Oleh karena itu, untuk tipe data yang kompleks, kebanyakan programmer TypeScript akan menggunakan ``` Interface ``` dibandingkan menggunakan ``` Type ```. 
* Kode: Interface
  ```TSX
  export interface Seller {
    id: number;
    name: string;
    address?: string;
  }
  ```
* Kode: Menggunakan Interface
  ```TSX
  const seller: Seller = {
    id: 1,
    name: 'Toko Handphone'
  };

  console.info(seller);
  ```

# Readonly Properties
* Properties dapat kita jadikan ``` readonly ``` yang artinya tidak bisa diubah lagi.
* Kita bisa menggunakan kata kunci ``` readonly ``` pada attribute tersebut.
* Kode: Readonly Properties
  ```TSX
  export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nib: string;
    readonly npwp: string;
  }
  ```