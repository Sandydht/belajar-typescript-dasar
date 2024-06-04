describe('Array', function() {
  it('should same with Javascript', function() {
    const names: string[] = ['Sandy', 'Dwi', 'Handoko', 'Trapsilo'];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);

    const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis'];
    
    console.info(hobbies);
  });

  it('should support tupple', function() {
    const person: readonly [string, string, number] = ['Sandy', 'Dwi', 27];
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = 'Budi'; // error
  });
});
