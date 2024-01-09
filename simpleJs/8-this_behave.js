let obj = {
  name: "ganesh",
  age: 21,
  getAge() {
    return this.age;
  },
};

let obj2 = {
  name: "ganesh",
  age: 21,
  getAge: () => {
    return this.age;
  },
};

console.log(obj.getAge());
console.log(obj2.getAge());

let obj3 = {
  name: "Jane",
  age: 31,

  getAge() {
    setTimeout(() => {
      console.log(this.age);
    }, 1000);
  },
  getAge2: setTimeout(function () {
    console.log(this.age);
  }, 1000),
};

console.log(obj3.getAge2);
