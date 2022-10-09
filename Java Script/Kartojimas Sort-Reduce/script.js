//Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

const names = ["Loreta", "Karolina", "Nijole", "Aurimas"];
names.sort();
console.log(names);

//Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

const friendNames = ["Loreta", "Karolina", "Nijole", "Aurimas"];
friendNames.sort((a, b) => b - a);
console.log(friendNames);

//Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir
//su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).
/*
const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
console.log(numbers.sort((x, y) => x - y));

//Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).

//1 variantas
const houseNumbers = [10, 5, 20, 4];
const highestNumber = houseNumbers.sort((a, b) => a - b);
console.log(Math.max(...houseNumbers));
// 2 variantas
const numbers = [10, 5, 20, 4];
numbers.sort((a, b) => b - a);
console.log(numbers[0]);*/

//Parašyk array su penkiais mėgstamiausiais
//tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

//const myNumbers = [12, 34, 35, 65, 67];
//const ku = myNumbers.reduce((a, v) => a + v);
//console.log(ku);

//Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"])
// ir naudojant reduce - grąžink skaičių, kiek šiame array elementų
//yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).
/*
const myCars = ["BMW", "AUDI", "GOLF"];
console.log(myCars.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0));

const myCount = [12, 34, 35, 65, 67];
const largestCount = myCount.reduce((a, v) => (a > v ? a : v));
console.log(largestCount);*/
