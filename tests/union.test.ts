describe('Union Type', function() {
  it('should support in Typescript', function() {
    let sample: number | string | boolean = 'Sandy';
    sample = 100;
    sample = true;

    console.info(sample);
  });
});
