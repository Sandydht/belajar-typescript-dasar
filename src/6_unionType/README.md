# Union Type
* Seperti yang sudah kita tahu, JavaScript sebenarnya bisa menyimpan berbagai jenis tipe data di variabel yang sama.
* Namun di TypeScript hal itu dilarang karena praktek yang buruk.
* Pada kasus jika kita ingin membuat variabel yang bisa berubah bentuk tipe data, kita bisa memberitahunnya menggunakan union type.
* Secara otomatis TypeScript akan membolehkan kita mengubah tipe data, namun sesuai yang sudah ditentukan di union typenya.
* Kode: Union Type
  ```TSX
  let sample: number | string | boolean = "Sandy";
  sample = 100;
  sample = true;

  console.info(sample);
  ```

# Menggunakan Union Type 
* Saat kita membuat union type, kita perlu berhati - hati ketika memanggil method terhadap variabel tersebut.
* Hal ini karena tipe datanya bisa berubah, oleh karena itu ada baiknya kita melakukan pengecekan tipe data terlebih dahulu menggunakan ``` typeof ```.
* Kode: Menggunakan Union Type
  ```TSX
  function process(value: number | string | boolean) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else if (typeof value === 'number') {
      return value + 2;
    } else {
      return !value;
    }
  }

  expect(process(100)).toBe(102);
  expect(process("Sandy")).toBe("SANDY");
  expect(process(true)).toBe(false);
  ```