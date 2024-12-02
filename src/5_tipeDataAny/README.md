# Tipe Data any
* Saat kita menggunakan TypeScript, setiap jenis data idealnya ada deklarasi datanya.
* Contoh saat kita ingin menggunakan tipe data JavaScript Object, idealnya harus ada ketentuan attribute yang dimilikinya, sedangkan di JavaScript hal itu tidak wajib.
* Pada kasus kita memang ingin membuat tipe data yang bebas seperti di JavaScript, kita bisa gunakan tipe data ``` any ```.
* Tipe data ``` any ``` tersebut menjadikan TypeScript tidak melakukan pengecekan apapun terhadap data tersebut.
* Kode: Tipe Data any
  ```TSX
  const personData: any = {
    id: 1,
    name: "Sandy Dwi Handoko Trapsilo",
    age: 27
  };

  personData.age = 28;

  console.info(personData);
  ```