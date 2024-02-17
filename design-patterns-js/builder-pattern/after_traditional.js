class Address {
  constructor(zip, city) {
    this.zip = zip;
    this.city = city;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }
  setEmail(email) {
    this.user.email = email;
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}

const user = new UserBuilder("ganesh")
  .setAge(23)
  .setEmail("ganesh@gmail.com")
  .setAddress(new Address(421306, "kalyan"))
  .build();

console.log(user);
