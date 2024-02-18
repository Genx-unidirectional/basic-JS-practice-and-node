// We make the getFetch and getUser function

async function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((res) => res.json);
}

async function getUserPost(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((res) => res.json);
}

getUsers().then((users) => {
  users.map((user) => {
    getUserPost(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});
