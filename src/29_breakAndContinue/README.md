# Break and Continue
* Seperti di JavaScript pada perulangan While atau Do While, kita sering menggunakan kata kunci ``` break ``` and ``` continue ```.
* Hal ini juga bisa dilakukan di TypeScript.
* Kode: Break and Continue
  ```TSX
  let counter = 0;
  do {
    counter++;

    if (counter == 10) {
      break;
    }

    if (counter % 2 == 0) {
      continue;
    }

    console.info(counter);
  } while (true);
  ```