// 변수 문제
/* 문제1. a와 b의 값을 바꾸시오 */
let a = 1;
let b = 2;

console.log(a, b); // 1 2

let temp;

temp = a;
a = b;
b = temp;

console.log(a, b); // 2 1

/* 문제2. 다음 연산자들의 결괏값을 예측한 후 console.log()를 통해 확인해 보시오 */
// 20 + 30 // 50
// “20” + “30” // "2030"
// “Hello” + " " + 2021 // "Hello 2021"
// 1 + 2 * 3 // 7
// (1 + 3) ** 2 // 16
// 1 / 0 // NaN // Infinity
// 6 % 2 // 0
// 7.5 % 2 // 1.5
// 5 == 5 // true
// 5 === 5 // true
// 5 == “5” // true
// 5 === “5” // false
// 5 != 5.0 // true // false
// 5 !== 5.0 // true // false
// “true” === true // false
// 5 <= 5.0 // true
// 5 >= 5 // true
// true || true // true
// true || false // true
// true && true // true
// true && false // false
// !true // false
// !false // true

console.log(
  "문제2. 다음 연산자들의 결괏값을 예측한 후 console.log()를 통해 확인해 보시오"
);

console.log(20 + 30);
console.log("20" + "30");
console.log("Hello" + " " + 2021);
console.log(1 + 2 * 3);
console.log((1 + 3) ** 2);
console.log(1 / 0);
console.log(6 % 2);
console.log(7.5 % 2);
console.log(5 == 5);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 5.0);
console.log(5 !== 5.0);
console.log("true" === true);
console.log(5 <= 5.0);
console.log(5 >= 5);
console.log(true || true);
console.log(true || false);
console.log(true && true);
console.log(true && false);
console.log(!true);
console.log(!false);

// 배열 문제
let animals = [
  "Aardvark",

  "Albatross",

  "Alligator",

  "Alpaca",

  "Ant",

  "Ape",

  "Armadillo",

  "Donkey",

  "Baboon",

  "Badger",

  "Barracuda",

  "Bat",

  "Bear",

  "Beaver",

  "Bee",

  "Bison",

  "Cat",

  "Caterpillar",

  "Cattle",

  "Chamois",

  "Cheetah",

  "Chicken",

  "Chimpanzee",

  "Chinchilla",

  "Chough",

  "Clam",

  "Cobra",

  "Cockroach",

  "Cod",

  "Cormorant",

  "Dugong",

  "Dunlin",

  "Eagle",

  "Echidna",

  "Eel",

  "Eland",

  "Elephant",

  "Elk",

  "Emu",

  "Falcon",

  "Ferret",

  "Finch",

  "Fish",

  "Flamingo",

  "Fly",

  "Fox",

  "Frog",

  "Gaur",

  "Gazelle",

  "Gerbil",

  "Giraffe",

  "Grasshopper",

  "Heron",

  "Herring",

  "Hippopotamus",

  "Hornet",

  "Horse",

  "Kangaroo",

  "Kingfisher",

  "Koala",

  "Kookabura",

  "Moose",

  "Narwhal",

  "Newt",

  "Nightingale",

  "Octopus",

  "Okapi",

  "Opossum",

  "Quail",

  "Quelea",

  "Quetzal",

  "Rabbit",

  "Raccoon",

  "Rail",

  "Ram",

  "Rat",

  "Raven",

  "Red deer",

  "Sandpiper",

  "Sardine",

  "Sparrow",

  "Spider",

  "Spoonbill",

  "Squid",

  "Squirrel",

  "Starling",

  "Stingray",

  "Tiger",

  "Toad",

  "Whale",

  "Wildcat",

  "Wolf",

  "Worm",

  "Wren",

  "Yak",

  "Zebra",
];

/* 1. "Zebra" 제거하기 */
// animals.pop();
// console.log(animals); // ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Ape', 'Armadillo', 'Donkey', 'Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Cat', 'Caterpillar', 'Cattle', 'Chamois', 'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chough', 'Clam', 'Cobra', 'Cockroach', 'Cod', 'Cormorant', 'Dugong', 'Dunlin', 'Eagle', 'Echidna', 'Eel', 'Eland', 'Elephant', 'Elk', 'Emu', 'Falcon', 'Ferret', 'Finch', 'Fish', 'Flamingo', 'Fly', 'Fox', 'Frog', 'Gaur', 'Gazelle', 'Gerbil', 'Giraffe', 'Grasshopper', 'Heron', 'Herring', 'Hippopotamus', 'Hornet', 'Horse', 'Kangaroo', 'Kingfisher', 'Koala', 'Kookabura', 'Moose', 'Narwhal', 'Newt', 'Nightingale', 'Octopus', 'Okapi', 'Opossum', 'Quail', 'Quelea', 'Quetzal', 'Rabbit', 'Raccoon', 'Rail', 'Ram', 'Rat', 'Raven', 'Red deer', 'Sandpiper', 'Sardine', 'Sparrow', 'Spider', 'Spoonbill', 'Squid', 'Squirrel', 'Starling', 'Stingray', 'Tiger', 'Toad', 'Whale', 'Wildcat', 'Wolf', 'Worm', 'Wren', 'Yak']

/* 2. Dog 추가하기 */
// animals.push("Dog");
// console.log(animals); // ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Ape', 'Armadillo', 'Donkey', 'Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Cat', 'Caterpillar', 'Cattle', 'Chamois', 'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chough', 'Clam', 'Cobra', 'Cockroach', 'Cod', 'Cormorant', 'Dugong', 'Dunlin', 'Eagle', 'Echidna', 'Eel', 'Eland', 'Elephant', 'Elk', 'Emu', 'Falcon', 'Ferret', 'Finch', 'Fish', 'Flamingo', 'Fly', 'Fox', 'Frog', 'Gaur', 'Gazelle', 'Gerbil', 'Giraffe', 'Grasshopper', 'Heron', 'Herring', 'Hippopotamus', 'Hornet', 'Horse', 'Kangaroo', 'Kingfisher', 'Koala', 'Kookabura', 'Moose', 'Narwhal', 'Newt', 'Nightingale', 'Octopus', 'Okapi', 'Opossum', 'Quail', 'Quelea', 'Quetzal', 'Rabbit', 'Raccoon', 'Rail', 'Ram', 'Rat', 'Raven', 'Red deer', 'Sandpiper', 'Sardine', 'Sparrow', 'Spider', 'Spoonbill', 'Squid', 'Squirrel', 'Starling', 'Stingray', 'Tiger', 'Toad', 'Whale', 'Wildcat', 'Wolf', 'Worm', 'Wren', 'Yak', 'Zebra', 'Dog']

/* 3. "Mosquito", "Mouse", "Mule" 추가하기 */
// animals.push("Mosquito", "Mouse", "Mule");
// console.log(animals); // ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Ape', 'Armadillo', 'Donkey', 'Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Cat', 'Caterpillar', 'Cattle', 'Chamois', 'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chough', 'Clam', 'Cobra', 'Cockroach', 'Cod', 'Cormorant', 'Dugong', 'Dunlin', 'Eagle', 'Echidna', 'Eel', 'Eland', 'Elephant', 'Elk', 'Emu', 'Falcon', 'Ferret', 'Finch', 'Fish', 'Flamingo', 'Fly', 'Fox', 'Frog', 'Gaur', 'Gazelle', 'Gerbil', 'Giraffe', 'Grasshopper', 'Heron', 'Herring', 'Hippopotamus', 'Hornet', 'Horse', 'Kangaroo', 'Kingfisher', 'Koala', 'Kookabura', 'Moose', 'Narwhal', 'Newt', 'Nightingale', 'Octopus', 'Okapi', 'Opossum', 'Quail', 'Quelea', 'Quetzal', 'Rabbit', 'Raccoon', 'Rail', 'Ram', 'Rat', 'Raven', 'Red deer', 'Sandpiper', 'Sardine', 'Sparrow', 'Spider', 'Spoonbill', 'Squid', 'Squirrel', 'Starling', 'Stingray', 'Tiger', 'Toad', 'Whale', 'Wildcat', 'Wolf', 'Worm', 'Wren', 'Yak', 'Zebra', 'Mosquito', 'Mouse', 'Mule']

/* 4. "Human" 포함되어 있는가? */
console.log(animals.includes("Human")); // false

/* 5. "Cat" 포함되어 있는가? */
console.log(animals.includes("Cat")); // true

/* 6. "Red deer"을 "Deer"로 바꾸시오 */
// console.log(animals.indexOf("Red deer")); // 77
// animals[77] = "Deer";
// console.log(animals.includes("Deer")); // true

/* 7. "Spider"부터 3개의 값을 기존 배열에서 제거하기 */
// console.log(animals.indexOf("Spider")); // 81
// animals.splice(81, 3);
// console.log(animals); // ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Ape', 'Armadillo', 'Donkey', 'Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Cat', 'Caterpillar', 'Cattle', 'Chamois', 'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chough', 'Clam', 'Cobra', 'Cockroach', 'Cod', 'Cormorant', 'Dugong', 'Dunlin', 'Eagle', 'Echidna', 'Eel', 'Eland', 'Elephant', 'Elk', 'Emu', 'Falcon', 'Ferret', 'Finch', 'Fish', 'Flamingo', 'Fly', 'Fox', 'Frog', 'Gaur', 'Gazelle', 'Gerbil', 'Giraffe', 'Grasshopper', 'Heron', 'Herring', 'Hippopotamus', 'Hornet', 'Horse', 'Kangaroo', 'Kingfisher', 'Koala', 'Kookabura', 'Moose', 'Narwhal', 'Newt', 'Nightingale', 'Octopus', 'Okapi', 'Opossum', 'Quail', 'Quelea', 'Quetzal', 'Rabbit', 'Raccoon', 'Rail', 'Ram', 'Rat', 'Raven', 'Red deer', 'Sandpiper', 'Sardine', 'Sparrow', 'Squirrel', 'Starling', 'Stingray', 'Tiger', 'Toad', 'Whale', 'Wildcat', 'Wolf', 'Worm', 'Wren', 'Yak', 'Zebra']

/* 8. "Tiger" 이후의 값을 제거하기 */
console.log(animals.indexOf("Tiger")); // 87
animals.splice(87);
console.log(animals); // ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Ape', 'Armadillo', 'Donkey', 'Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Cat', 'Caterpillar', 'Cattle', 'Chamois', 'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chough', 'Clam', 'Cobra', 'Cockroach', 'Cod', 'Cormorant', 'Dugong', 'Dunlin', 'Eagle', 'Echidna', 'Eel', 'Eland', 'Elephant', 'Elk', 'Emu', 'Falcon', 'Ferret', 'Finch', 'Fish', 'Flamingo', 'Fly', 'Fox', 'Frog', 'Gaur', 'Gazelle', 'Gerbil', 'Giraffe', 'Grasshopper', 'Heron', 'Herring', 'Hippopotamus', 'Hornet', 'Horse', 'Kangaroo', 'Kingfisher', 'Koala', 'Kookabura', 'Moose', 'Narwhal', 'Newt', 'Nightingale', 'Octopus', 'Okapi', 'Opossum', 'Quail', 'Quelea', 'Quetzal', 'Rabbit', 'Raccoon', 'Rail', 'Ram', 'Rat', 'Raven', 'Red deer', 'Sandpiper', 'Sardine', 'Sparrow', 'Spider', 'Spoonbill', 'Squid', 'Squirrel', 'Starling', 'Stingray', 'Tiger']

/* 9. "Baboon"부터 "Bison"까지 새로운 배열에 저장하기 */
// console.log(animals.indexOf("Baboon")); // 8
// console.log(animals.indexOf("Bison")); // 15
// console.log(animals.slice(8, 16)); // ['Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison']
