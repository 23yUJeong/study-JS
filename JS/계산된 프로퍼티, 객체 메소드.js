const user = {
  name: "Mike",
  age: 30,
  gender: "male",
};

console.log(Object.keys(user)); // ['name', 'age', 'gender']
console.log(Object.values(user)); // ['Mike', 30, 'male']
console.log(Object.entries(user));
// [["name", "Mike"], ["age", 30], ["gender", "male"]]

const arr = [
  ["name", "Mike"],
  ["age", 30],
  ["gender", "male"],
];

console.log(Object.fromEntries(arr)); // {name: 'Mike', age: 30, gender: 'male'}

let n = "name";
let a = "age";

const person = {
  [n]: n,
  [a]: a,
};

console.log(person); // {name: 'name', age: 'age'}

function makeObj(key, value) {
  return {
    [key]: value,
  };
}

const obj = makeObj("name", 18);
console.log(obj); // {name: 18}
