# Extending Interface
* Interface bisa melanjutkan (extends) ke interface lain.
* Secara otomatis attribute interface yang dilanjutkan dimiliki juga oleh interface tersebut.
* Ini membuat kita lebih mudah ketika membuat tipe data yang kompleks.
* Kode: Employee
  ```TSX
  export interface Employee {
    id: string;
    name: string;
    division: string;
  }

  export interface Manager extends Employee {
    numberOfEmployees: number;
  }
  ```
* Kode: Extending Interface
  ```TSX
  const employee: Employee = {
    id: '1',
    name: 'Sandy',
    division: 'IT'
  };

  const manager: Manager = {
    id: '2',
    name: 'Dwi',
    division: 'IT',
    numberOfEmployees: 10
  }
  ```