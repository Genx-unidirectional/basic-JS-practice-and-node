class Address {
  constructor(zip, city) {
    this.zip = zip;
    this.city = city;
  }
}

class User {
  constructor(name, { age = 21, email = "example@gmail.com", address } = {}) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }
}

const user1 = new User("ganesh", { age: 21 });
console.log(user1);
