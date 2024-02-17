// lets say we have class of user

class Address {
  constructor(zip, city) {
    this.zip = zip;
    this.city = city;
  }
}

class User {
  constructor(name, email, password, address) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.address = address;
  }
}
// Let's say we want to make user without the email and password so we have to replace it with undefine

const user = new User(
  "ganesh",
  undefined,
  undefined,
  new Address(421306, "kalyan")
);

console.log(user);
// But what happen when the User class has security token and other extra stuff to be in
//It will eventually complicated to put extra stuff in there and make the instance of  that class
