const getNewName = document.body.querySelector("#getNewName");

getNewName.addEventListener("input", (event) => {
  event.preventDefault();
  const newName = event.target.value.trim();

  console.log(newName);
  return newName;
});

const postNewName = async () => {
  const request = await fetch(`http://localhost:5001`, {
    method: "POST",
    headers: {
      name: "Jonas",
    },
    body: JSON.stringify(data),
  });
};

const addNewName = postNewName();

const getNames = await fetch("http://localhost:5001");
const showNames = await getNames.json();

const nameList = document.querySelector("#namesList");

showNames.forEach((name) => {
  const nameEl = document.createElement("li");

  nameEl.innerText = name;
  nameList.append(nameEl, addNewName);
});

console.log(showNames);
