function test(a, b, c, d, e) {
  return typeof a;
  return typeof b;
  return typeof c;
  return typeof d;
  return typeof e;
}
console.log(test(401));
console.log(test("Random text"));
console.log(test(true));
console.log(test(undefined));
console.log(test(new Object()));
