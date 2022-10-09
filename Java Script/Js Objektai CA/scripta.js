//Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand". Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).

const cars = {
  doors: 4,
  color: "red",
  brand: "mersas",
};
console.log(cars.doors);

//Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.

document.querySelector("form").addEventListener("submit", (e) => {
  e.Preventdefault();

  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;

  const person = {
    name: name,
    surname: surname,
  };
  console.log(person);
});
