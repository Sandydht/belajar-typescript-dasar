describe('Data Type', function() {
  it('should must declare', function() {
    let name:string = 'Sandy Dwi Handoko Trapsilo';
    let balance:number = 100;
    let isVip:boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);

    // name = 1; // error
    // balance = 'Sandy'; // error
    // isVip = 1; // error
  });
});
