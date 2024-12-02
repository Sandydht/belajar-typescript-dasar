# Null dan Undefined
* Saat kita menggunakan ``` ? ``` pada variabel atau parameter, secara otomatis kita bisa mengirim data ``` undefined ```.
* Tapi kadang ada kasus kita juga ingin mengirim data ``` null ```, pada kasus ini kita juga bisa menggunakan tipe data ``` null ```.
* Kode: Undefined
  ```TSX
  function sayHello(name?: string) {
    if (name) {
      console.info(`Hello ${name}`);
    } else {
      console.info('Hello');
    }
  }

  sayHello('Sandy');
  const name: string | undefined = undefined;
  sayHello(name);
  ```
* Kode: Null
  ```TSX
  function sayHello(name?: string | null) {
    if (name) {
      console.info(`Hello ${name}`);
    } else {
      console.info('Hello');
    }
  }

  sayHello('Sandy');
  const name: string | undefined = undefined;
  sayHello(null);
  ```