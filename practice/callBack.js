// function diplay(sum) {
//   console.log(sum);
// }

// function myCal(p1, p2, myCallBack) {
//   let sum = p1 + p2;
//   myCallBack(sum);
// }

// myCal(5, 5, diplay);
function attachEventListner() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", () => {
    document.getElementById("count").textContent = "button clicked=" + count++;
  });
  //   let btn = document.getElementById("clickMe");
  //   console.log(btn);
}
attachEventListner();
