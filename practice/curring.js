function addConstant(constant) {
  return (value) => {
    return value + constant;
  };
}

console.log(addConstant(15)(2));
// let val = addConstant(15);
// console.log(val(2));
