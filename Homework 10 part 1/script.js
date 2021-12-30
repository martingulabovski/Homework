function test(a) {
  return typeof a;
}
console.log(test(401));
console.log(test("Random text"));
console.log(test(true));
console.log(test(undefined));
console.log(test(new Object()));
