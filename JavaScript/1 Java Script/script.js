<<<<<<< HEAD
//event listener

document.addEventListener("click", function () {
    console.log("paspausta ant puslapio");
});


//switch
const car = 'Audi'
switch (car) {
    case 'VW':
    case 'Audi':
    case 'Bentley':
    case 'Lamborghini':
    case 'Porsche':
        console.log("VW group");
        break;
    case 'BMW':
    case 'Mini':
    case 'Rolls-Royce':
        console.log('BMW group');
        break;
    default:
        console.log("Nei VW group, nei BMW group")
}
const myCar = "Mini"
switch (myCar) {
    case `VW`:
    case `Lamborgini`:
    case `Audi`:
    case `Bentley`:
    case `Porche`:
        console.log("VwGroup");
        break;
    case `BMW`:
    case `Mini`:
    case `Rolls-Royce`:
        console.log("Bmw Group");
        break;
    default: {
        console.log("Nei Vw nei BMW");
    }
}

//Pavyzdys 2

const userInput = `Zemuoge`
switch (userInput) {
    case `Kriause`:
    case `Bananas`:
    case `Apelsinas`:
    case `Citrina`:
    case `Melionas`:
        console.log("Vaisius");
        break;
    case `Braske`:
    case `Zemuoge`:
    case `Serbenas`:
    case `Agrastas`:
        console.log('Uoga');
        break;
    default: {
        console.log("Nei vaisius, nei uoga");
    }
}


//3Uzduotis

let weekDay = new Date().getDate;
switch (weekDay) {
    case 0:
        weekDay = 'Sekmadienis';
        break;
    case 1:
        weekDay = 'Pirmadienis';
        break;
    case 2:
        weekDay = 'Antradienis';
        break;
    case 3:
        weekDay = 'Treciadienis';
        break;
    case 4:
        weekDay = 'Ketvirtadienis';
        break;
    case 5:
        weekDay = 'Penktadienis';
        break;
    case 6:
        weekDay = 'Sestadienis';
        break;
}
console.log(weekDay)
=======
document.addEventListener("click", function () {
    console.log("paspausta ant puslapio");
});
//Comment

>>>>>>> 018e2d7893a15bbbe55810c4346ffa2588f0dd7a
