# Belajar TypeScript Dasar

## Pengenalan TypeScript
* TypeScript adalah bahasa pemrograman berorientasi objek yang dibuat oleh Microsoft
* TypeScript adalah bahasa pemrograman yang di kompilasi menjadi kode JavaScript
* Menggunakan TypeScript akan membuat kode kita lebih mudah di baca dan di debug dibandingkan menggunakan JavaScript
* TypeScript adalah bahasa pemrograman yang Strongly Type (Seperti Java, C#, dan C/C++)
* [https://www.typescript.org/](https://www.typescript.org/)

## Proses Development TypeScript
```mermaid
graph TD;
  TypeScript Code-->tsc (TypeScript Compiler);
  tsc (TypeScript Compiler)-->JavaScript Code;
```

## Keuntungan Belajar TypeScript
* Saat ini banyak sekali perusahaan yang mulai mengadopsi TypeScript, hal ini karena banyak fitur yang dimiliki oleh TypeScript yang sangat memudahkan saat proses pemrograman aplikasi
* Karena TypeScript melakukan kompilasi kode menjadi JavaScript, hal ini secara otomatis kita tidak perlu lagi pusing dengan fitur - fitur di JavaScript yang belum di support, karena TypeScript secara otomatis akan mengurusnya
* Selain itu, banyak juga framework - framework yang populer sekarang mulai beralih menggunakan TypeScript, seperti ReactJS, VueJS, NestJS, dan lain - lain

## Membuat Project

### Membuat Project 
* Buat folder belajar-typescript-dasar
* ``` npm init ```
* Buka package.json dan tambah ``` "type": "module" ```

### Menambah Library Jest untuk Unit Test
* ``` npm install --save-dev jest @types/jest ```
* [https://www.npmjs.com/package/jest](https://www.npmjs.com/package/jest)

### Menambah Library Babel
* ``` npm install --save-dev babel-jest @babel/preset-env ```
* [https://babeljs.io/setup#installation](https://babeljs.io/setup#installation)

## Setup TypeScript Project

### Menambah TypeScript
* ``` npm install --save-dev typescript ```
* [https://www.npmjs.com/package/typescript](https://www.npmjs.com/package/typescript)

### Setup TypeScript Project
* ``` npx tsc --init ```
* Semua konfigurasi akan dibuat di file tsconfig.json
* Ubah ``` "module" ``` dari ``` "commonjs" ``` menjadi ``` "ES6" ```

### Setup TypeScript untuk Jest
* [https://jest.io/docs/getting-started#using-typescript](https://jest.io/docs/getting-started#using-typescript)

## Kompilasi TypeScript

### Kompilasi TypeScript
* Seperti yang dijelaskan di awal, bahwa kode TypeScript tidak bisa langsung dijalankan, kita harus melakukan kompilasi terlebih dahulu menjadi JavaScript
* Kita bisa menggunakan perintah: ``` npx tsc ```
* Secara default, semua file hasil kompilasi akan disimpan di lokasi yang sama dengan file TypeScript
* Dalam prakteknya, programmer TypeScript biasanya memisahkan lokasi hasil kompilasi ke sebuah folder misal dist (distribution)
* Untuk mengubah lokasi file hasil kompilasi, kita perlu ubah di tsconfig.json
* Kode: Mengubah Lokasi Hasil Kompilasi
  ```JSON
    {
      "outDir": "dist/"
    }
  ```

### Include dan Exclude
* Secara default, semua file ts akan coba dikompilasi oleh TypeScript, kadang - kadang kita tidak membutuhkan hal tersebut
* Misal kita hanya ingin melakukan kompilasi untuk kode program dan tidak butuh melakukan kompilasi kode unit test
* Kita bisa tambahkan include dan exclude pada tsconfig.json nya
* [https://www.typescriptlang.org/tsconfig#include](https://www.typescriptlang.org/tsconfig#include)
* [https://www.typescriptlang.org/tsconfig#exclude](https://www.typescriptlang.org/tsconfig#exclude)
* Kode: Include dan Exclude
  ```JSON
  {
    "include": ["src/**/*", "tests/**/*"],
    "exclude": ["src/**/*.test.ts", "tests/**/*.test.ts"]
  }
  ```
