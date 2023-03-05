const obj = {
  1: "1입니다",
  false: "거짓",
};

const obj2 = Object.keys(obj);
console.log(obj2); // ['1', 'false']

console.log(obj["false"]); // "1입니다"

// Symbol
const a = Symbol();
const b = Symbol();

console.log(a); // Symbol()
console.log(b); // Symbol()
console.log(a === b); // false

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1); // Symbol(id)
console.log(id2); // Symbol(id)
console.log(id1 === id2); // false

// property key : 심볼형
const id = Symbol("id");

const user = {
  name: "Mike",
  age: 30,
  [id]: "myId",
};

console.log(user); // {name: 'Mike', age: 30, Symbol(id): 'myId'}
console.log(user[id]); // "myId"

console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.values(user)); // ['Mike', 30]
console.log(Object.entries(user)); // [['name', 'Mike'], ['age', 30]]
const arr = Object.entries(user);

for (key in arr) {
  console.log(key, arr[key]); // ['name', 'Mike'] // ['age', 30]
}

const student = {
  name: "Mike",
  age: 18,
};
const ID = Symbol("J");
student[id] = ID;

for (key in student) {
  console.log(key, student[key]); // "name" "Mike" // "age" 18
}

const dog1 = Symbol.for("dog");
const dog2 = Symbol.for("dog");

console.log(dog1 == dog2); // true

console.log(Symbol.keyFor(dog1)); // "dog"

const myPet = Symbol("id입니다.");
console.log(myPet.description); // "id입니다."

const cat = Symbol("id");

const User = {
  name: "Mike",
  age: 30,
  [cat]: "myId",
  ad: Symbol("sd"),
};

console.log(User);

for (key in User) {
  console.log(key, User[key]); // "name" "Mike" // "age" 30 // "ad" Symbol(sd)
}

console.log(Object.getOwnPropertySymbols(User)); // [Symbol(id)];
console.log(Reflect.ownKeys(User)); // ['name', 'age', 'ad', Symbol(id)]

const i = {
  name: "Mike",
  age: 30,
  sayHello() {
    console.log(`Hi ${this.name}.`);
  },
};

const showName = Symbol("showName");
i[showName] = function () {
  console.log(this.name);
};

i[showName](); // "Mike"
i.sayHello(); // "Hi Mike."
