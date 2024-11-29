# Belajar TypeScript Dasar

## Pengenalan TypeScript
* TypeScript adalah bahasa pemrograman berorientasi objek yang dibuat oleh Microsoft
* TypeScript adalah bahasa pemrograman yang di kompilasi menjadi kode JavaScript
* Menggunakan TypeScript akan membuat kode kita lebih mudah di baca dan di debug dibandingkan menggunakan JavaScript
* TypeScript adalah bahasa pemrograman yang Strongly Type (Seperti Java, C#, dan C/C++)
* [https://www.typescript.org/](https://www.typescript.org/)

## Proses Development TypeScript
graph TD;
  TypeScript Code-->tsc (TypeScript Compiler);
  tsc (TypeScript Compiler)-->JavaScript Code;

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
* ``` nom install --save-dev jest @types/jest ```
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
