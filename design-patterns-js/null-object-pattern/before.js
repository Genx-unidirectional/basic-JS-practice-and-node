class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "bob";
  }
}

const users = [new User(1, "bob"), new User(2, "Ganesh")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  return user;
}

function printUser(id) {
  const user = getUser(id);
//   below there are lot's of check to adhere to the condition and we there is lot uncertain behave happening can there are chances of error  because we cannot do this check's again and again
  let name = "Guest";
  if (user !== null && user.name !== null) name = user.name;
  if (user !== null && user.hasAccess !== null && user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed to be here");
  }
}
