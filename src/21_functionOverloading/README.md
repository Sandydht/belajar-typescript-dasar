# Function Overloading
* Function overloading adalah kemampuan untuk membuat function dengan nama yang sama namun dengan parameter input yang berbeda.
* Di JavaScript, membuat satu Function dengan input data yang berbeda dan output yang bisa menghasil data yang berbeda sudah biasa dilakukan.
* Namun hal ini kadang bisa membuat sebuah Function tidak aman, karena bisa menghasilkan berbeda-beda tipe data.
* TypeScript memberikan kemampuan Function Overloading, agar pembuatan Function seperti ini lebih aman dilakukan.
* Kode: Function Overloading
  ```TSX
  function callMe(value: number): number;
  function callMe(value: string): string;
  function callMe(value: any) {
    if (typeof value === 'string') {
      return value;
    } else if (typeof === 'number') {
      return value;
    }
  }

  expect(callMe(100)).toBe(100);
  expect(callMe('Sandy')).toBe('Sandy');
  ```
