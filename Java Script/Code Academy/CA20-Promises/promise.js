// //Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių.
// Jam resolve - išoka alert "yes, veikia!".
// Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

// const resolveInTime = new Promise((resolve) => {
//   setTimeout(() => resolve(), 10000);
// });
// resolveInTime.then = alert("Yes veikia!");

//Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė,
//jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

const resolveInTime = new Promise((resolve, reject) => {
  const fourOutOfFive = Math.round(Math.random() * 5) + 1;
  setTimeout(() => {
    if (fourOutOfFive === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

resolveInTime
  .then(() => alert("Veikia"))
  .then((message) => alert(message))
  .catch(() => alert(" pažadas buvo atmestas"));
