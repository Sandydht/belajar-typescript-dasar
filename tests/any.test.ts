describe('Any', function() {
  it('should support in Typescript', function() {
    const person: any = {
      id: 1,
      name: 'Sandy Dwi Handoko Trapsilo',
      age: 27
    };

    person.age = 30;
    person.address = 'Kendal, Jawa Tengah';

    console.info(person);
  });
});
