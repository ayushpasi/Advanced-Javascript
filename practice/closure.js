function x() {
  let a = 9;
  function y() {
    console.log(a);
  }
  return y;
}
let z = x();
z();
