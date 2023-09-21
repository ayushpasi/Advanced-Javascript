let obj = {
  num: 10,
};

function addToThis(a, b, c) {
  return this.num + a + b + c;
}

//console.log(addToThis.call(obj,3));// 13

// let arr = [1, 2, 3];
// console.log(addToThis.apply(obj, arr)); // Outputs: 11

let bind = addToThis.bind(obj);
console.log(bind(1, 2, 3));
