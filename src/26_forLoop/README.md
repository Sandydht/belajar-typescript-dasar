# For Loop
* Perulangan For di TypeScript sama saja seperti perulangan For di JavaScript.
* TypeScript mendukung semua for loop seperti for loop biasa, for in, dan for of.
* Kode: For Loop
  ```TSX
  const names = ['Sandy', 'Dwi', 'Handoko', 'Trapsilo'];

  // for i
  for (let i = 0; i < names.length; i++) {
    console.info(names[i]);
  }

  // for of
  for (const name of names) {
    console.info(name);
  }

  // for in 
  for (const index in names) {
    console.info(names[index]);
  }
  ```