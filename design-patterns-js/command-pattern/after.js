// Rather than making the two fetching function in same to before file we make single fetching function

function getUser() {
  return getFetch("https://exampleurl.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://exmapleurt.com/posts", { userId: userId });
}

getUser().then((users) => {
  users.map((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

function getFetch(url, params = {}) {
  return axios({ url: url, method: "GET", params: params });
}

// Example Two

class Engine {
  startEngine() {
    console.log("Engine started");
  }
  stopEngine() {
    console.log("Engine started");
  }
}

class Light {
  lightsOn() {
    console.log("Lights on");
  }
  lightsOff() {
    console.log("Lights on");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.light = new Light();
  }

  startCar() {
    this.engine.startEngine();
    this.light.lightsOn();
  }
  stopCar() {
    this.engine.stopEngine();
    this.light.lightsOff();
  }
}
