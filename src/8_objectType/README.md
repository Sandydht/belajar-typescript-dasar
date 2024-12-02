# Object Type
* Pada kasus yang sederhana, kadang membuat alias terlalu bertele - tele, kita juga bisa membuat tipe data JavaScript object secara langsung dengan mendeklarasikan detail type nya ketika membuat variabelnya.
* Hal ini lebih sederhana dibandingkan membuat type terlebih dahulu.
* Kode: Object Type
  ```TSX
  const dataPerson: { id: string, name: string } = {
    id: "1",
    name: "Sandy"
  };

  console.info(dataPerson);

  dataPerson.id = "2";
  dataPerson.name = "Dwi";

  console.info(dataPerson);
  ```
