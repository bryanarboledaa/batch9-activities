var user = {
  firstName: "John",
  lastName: "Dinopol",
  age: 30,
  email: "john.dinopol@gmail.com",
};

function findUserData(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user) {
        resolve(
          `${user.firstName} ${user.lastName}, ${user.age}, ${user.email}`
        );
      } else {
        reject("User is not here");
      }
    }, 1000);
  });
}

findUserData(user)
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
