# Tipe Data Primitif
* TypeScript menggunakan tipe data di JavaScript, sehingga semua tipe data seperti string, number, boolean otomatis didukung oleh TypeScript

# Daftar Tipe Data Primitif
| Tipe Data Primitif | Keterangan            |
| ------------------ | --------------------- |
| number             | Number di JavaScript  |
| boolean            | Boolean di JavaScript |
| string             | String di JavaScript  |

# Deklarasi Variabel
* Karena TypeScript adalah Strongly Type Language, oleh karena itu saat kita membuat variabel, kita harus menentukan tipe data variabelnya.
* Dan jika kita sudah menentukan tipe datanya, kita tidak boleh mengubah variabel tersebut menjadi tipe data yang berbeda.
* TypeScript bisa secara otomatis mendeteksi tipe data yang sedang digunakan, tapi kita juga bisa menentukan secara eksplisit menggunakan:
  ```TSX
  const namaVariable: tipeData = value;
  ```
* Kode: Tipe Data Primitif
  ```TSX
  const fullName: string = "Sandy Dwi Handoko Trapsilo";
  const balance: number = 1000000;
  const isVip: boolean = true;

  console.info(fullName);
  console.info(balance);
  console.info(isVip);
  ```
