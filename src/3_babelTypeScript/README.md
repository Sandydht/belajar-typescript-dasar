# Babel TypeScript
* Untuk menjalankan unit test, kita menggunakan Jest dan Babel.
* Banyak programmer TypeScript yang mengeluh ketika proses development yang lambat karena harus melakukan kompilasi terlebih dahulu.
* Oleh karena itu, @babel/typescript melakukan kompilasi dengan cara menghapus seluruh kode TypeScript dan menjadikannya kode JavaScript.
* Oleh karena itu, error TypeScript yang terjadi tidak akan muncul pada unit test karena kode TypeScript dihapus oleh Babel.
* Oleh karena itu, kita harus secara reguler melakukan pengecekan menggunakan perintah: ``` npx tsc ``` untuk memastikan tidak ada kode TypeScript kita yang bermasalah.
* Kode: Error TypeScript
  ```TSX
  let fullName: string = "Sandy Dwi Handoko Trapsilo";
  let balance: number = 1000000;
  let isVip: boolean = false;

  console.info(fullName);
  console.info(balance);
  console.info(isVip);

  fullName = 1; // error
  balance = "1000000"; // error
  isVip = 1; // error
  ```

# TypeScript Compiler
* Untuk menjalankan perintah TypeScript compiler secara terus menerus, kita juga bisa menggunakan perintah: ``` npx tsc --watch ```.