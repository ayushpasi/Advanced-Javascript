console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket ");
    }, 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("popCorn"));
  const getButter = new Promise((resolve, reject) => resolve("butter"));
  const getColdDrinks = new Promise((resolve, reject) => resolve("coldDrink"));
  let ticket = await promiseWifeBringingTickets;

  let [popcorn, butter, coldDrink] = await Promise.all([
    getPopcorn,
    getButter,
    getColdDrinks,
  ]);
  console.log(popcorn + "," + butter + "," + coldDrink);
  return ticket;
};

preMovie().then((m) => {
  console.log("person 3 : shows " + m);
});

console.log("person4: shows ticket");
console.log("person5: shows ticket");
