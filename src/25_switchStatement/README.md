# Switch Statement
* Switch statement di TypeScript juga sama seperti di JavaScript.
* Kode: Switch Statement
  ```TSX
  function sayHello(name: string): string {
    switch(name) {
      case 'Sandy':
        return 'Hi Sandy';
      case 'Budi':
        return 'Hi Budi';
      default:
        return 'Hello';
    }
  }

  console.info(sayHello('Sandy'));
  console.info(sayHello('Budi'));
  console.info(sayHello('Joko'));
  ```