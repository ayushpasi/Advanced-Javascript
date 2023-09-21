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
  console.log("wife:i have the ticket" + ticket);
  console.log("husband: we should go in ");
  console.log("wife :no i am hungry");
  let popcorn = await getPopcorn;
  console.log("husband I got some popCorn" + popcorn);
  console.log("husband : we should go in ");
  console.log("wife : In need butter on my popcorn");
  let butter = await getButter;
  console.log("husband I got some popCorn" + butter);
  console.log("husnband : anything else darling?");
  console.log("wife : lers go we are getting late");
  console.log("husband : thank you for the reminder ");
  let coldDrink = await getColdDrinks;
  console.log("wife :drink some colderink");
  console.log("husband:i got some " + coldDrink);
  console.log("wife:lets go");
  return ticket;
};

preMovie().then((m) => {
  console.log("person 3 : shows " + m);
});

console.log("person4: shows ticket");
console.log("person5: shows ticket");
