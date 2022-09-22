/*
Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.
Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.
Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).


/*const friendsNames = ["jonas", "petras", "mikis"];
friendsNames.sort((a, b) => (b > a ? 1 : -1));
console.log(friendsNames);*/

/*const carNames = ["lada", "ford", "bulka", "silke"];
carNames.sort((a, b) => (b > a ? 1 : -1));
console.log(carNames);*/
/*
const roomsSizes = [125, 200, 20, 360];
roomsSizes.sort((a, b) => (b > a ? 1 : -1));
console.log(roomsSizes);*/
/*
const roomSizes = [150, 120, 230];
roomSizes.sort((a, b) => a - b);
console.log(roomSizes[0]);

const roomBlocks = [150, 120, 198];
roomBlocks.sort((a, b) => b - a);
console.log(roomBlocks[0]);*/

/*
const productNames = ["bread", "MiLk", "fruit", "BeAr"];
const favouriteProducts = productNames.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLocaleLowerCase()
);
favouriteProducts.sort((a, b) => (b > a ? 1 : -1));
console.log(favouriteProducts);*/

const myNumbers = [10, 20, 15, 20, 30, 56, 58];
console.log(myNumbers.reduce((a, v) => a + v, 0));
