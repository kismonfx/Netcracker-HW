let url = "http://localhost:3000/users";
let getBtn = document.getElementById("getBtn");
let setBtn = document.getElementById("setBtn");
let table = document.getElementById("table");

let defaultTable = `
<tr>
<th>ID</th>
<th>Фамилия</th>
<th>Имя</th>
</tr>`;

function DrawUsers(response) {
  table.innerHTML = defaultTable;
  response.forEach((item) => {
    let user = document.createElement("tr");
    let id = document.createElement("td");
    let name = document.createElement("td");
    let surname = document.createElement("td");
    id.innerHTML = item.id;
    name.innerHTML = item.name;
    surname.innerHTML = item.surname;
    user.appendChild(id);
    user.appendChild(name);
    user.appendChild(surname);
    table.appendChild(user);
  });
}

getBtn.onclick = () => {
  fetch(url)
    .then((response) => response.json())
    .then((response) => DrawUsers(response));
};

setBtn.onclick = () => {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  if (!name || !surname) {
    return alert("Заполните все поля");
  }
  let user = {};
  user.name = name;
  user.surname = surname;
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(user),
  }).then(() => alert("Данные отправлены"));
};
