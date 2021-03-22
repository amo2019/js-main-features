//Array reduce

let cheeses = [
  "Broccio Passu",
  "Bucheron",
  "Cabécou",
  "Abbaye de Belloc",
  "Abbaye de Tamié",
  "Abbaye de Timadeuc Cheese",
  "Affidélice",
  "Autun",
  "Avalin",
  "Baguette laonnaise",
  "Bilou",
  "Bleu de Bresse",
  "Bleu de Termignon",
  "Bon Grivois",
  "Boulette d'Avesnes",
  "Boursin cheese",
  "Brie Noir Brillat-Savarin",
  "Cabrinu",
  "Cabriou",
];
//find the first cheese alphabetically

let first = cheeses.reduce(function (current, item) {
  return current < item ? current : item;
}, "\u0432");

console.log("First cheese is", first, "\n");

//find the sum of the numbers
let numbers = [10, 42, 78, 93, 77];

let total = numbers.reduce(function (passedIn, item) {
  return passedIn + item;
}, 0);
console.log("The total is", total, "\n");
