# Enum
* TypeScript memiliki tipe data ``` enum ```, yaitu tipe data yang nilainya sudah pasti.
* Tipe data ini tidak dimiliki JavaScript.
* Secara default tipe data ``` enum ``` ini akan dikonversi menjadi string di JavaScript, namun bisa juga dikonversi menjadi number.
* Kode: Enum
  ```TSX
  export enum CustomerType = {
    REGULAR,
    GOLD,
    PLATINUM
  }

  export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
  }
  ```
* Kode: Menggunakan Enum
  ```TSX
  const customer: Customer = {
    id: 1,
    name: 'Sandy',
    type: CustomerType.GOLD
  };

  console.info(customer);
  ```

# Enum di JavaScript
* Secara default, ``` enum ``` di JavaScript akan dikonversi menjadi tipe data number.
* Kadang kita ingin ubah dari number menjadi string, kita bisa lakukan hal itu ketika membuat ``` enum ``` nya.
* Kode: Enum sebagai String
  ```TSX
  export enum CustomerType = {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
  }

  export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
  }
  ```