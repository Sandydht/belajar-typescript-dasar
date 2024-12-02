# Tipe Data Array
* Tipe data array di TypeScript juga sama seperti di JavaScript.
* Di TypeScript, tipe data array bisa menggunakan tanda ``` TipeData[] ``` atau ``` Array<TipeData> ```.
* Kode: Tipe Data Array
  ```TSX
  const names: string[] = ["Sandy", "Dwi", "Handoko", "Trapsilo"];
  const values: number[] = [1, 2, 3];

  console.info(names);
  console.info(values);
  ```

# Read Only Array
* Di TypeScript, kita bisa membuat array dengan tipe ``` readonly ``` (tidak bisa diubah lagi) dengan menggunakan tipe data ``` ReadonlyArray<TipeData> ```.
* Kode: Read Only Array
  ```TSX
  const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
  console.info(hobbies);
  ```

# Tuple
* Tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah ditentukan.
* Pada kasus tuple bersifat read only (tidak bisa diubah), kita bisa tambahkan kata kunci ``` readonly ```.
* Kode: Tuple
  ```TSX
  const person: readonly [string, string, number] = ["Sandy", "Dwi", 30];

  console.info(person[0]);
  console.info(person[1]);
  console.info(person[2]);
  ```