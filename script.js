console.log("Получение данных о пользователе...");
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let user = {
      name: "Иван",
      surname: "Иванов",
    };
    if (user.name && user.surname) {
      console.log("Данные получены");
      resolve(user);
    } else {
      reject("Произошла ошибка");
    }
  }, 2000);
});

let showInfo = function (user) {
  return new Promise((resolve) => {
    resolve(`Пользователь ${user.name} ${user.surname} авторизован`);
  });
};

promise
  .then(showInfo)
  .then((fulfilled) => console.log(fulfilled))
  .catch((error) => console.log(error));
