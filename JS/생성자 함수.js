function User(name, age) {
  // 생성자 함수 첫 글자는 대문자
  this.name = name;
  this.age = age;
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);

console.log(user1); // User {name: 'Mike', age: 30}
console.log(user2); // User {name: 'Jane', age: 22}
console.log(user3); // User {name: 'Tom', age: 17}

function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원입니다.`);
  };
}

const item1 = new Item("apple", 1000);
const item2 = new Item("doll", 3000);
const item3 = new Item("bag", 5000);

item1.showPrice(); // "가격은 1000원입니다."
item2.showPrice(); // "가격은 3000원입니다."
item3.showPrice(); // "가격은 5000원입니다."
