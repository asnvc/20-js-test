console.clear();
/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)*/

console.log('1-----1');

const a = 2;
const b = 2
if (a > b){
    console.log(a);
}
if (b > a){
     console.log(b);
}
if (a === b){
    console.log('abu nariai lygūs');
}

console.log('2-----2');
  
for (let i = 1; i <= 10; i++){
    console.log(i);
}

console.log('3-----3');

for (let i = 0; i <= 10; i += 2){
    console.log(i);
}

console.log('4-----4');

for (let i = 0; i < 5; i++){
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}

console.log('5-----5');

let ciklasWhile = 0;

while (ciklasWhile !== 5){
    ciklasWhile = Math.floor(Math.random() * 10) + 1;
    console.log(ciklasWhile);
}

console.log('6-----6');

let arrLength = Math.floor(Math.random() * 11) + 20;
let arr = [];

for (let i = 0; i < arrLength; i++){
    arr.push(Math.floor(Math.random() * 21) + 10);
}

let max = arr[0];

for (let i = 1; i < arrLength; i++){
    if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(arr);
console.log(`Didžiausia masyvo reikšmė: ${max}`);

console.log('7-----7');

const ABC = 'ABCD';
let a1= 0;
let b1= 0;
let c1= 0;
let d1= 0;

const mas7 = [...Array(100)].map(_ => ABC[Math.floor(Math.random() * ABC.length)]);

console.log(mas7);
    
for(let i7= 0; i7<mas7.length; i7++){
        if(mas7[i7] === 'A'){
            a1++;
        }else if(mas7[i7] === 'B'){
            b1++;
        }else if(mas7[i7] === 'C'){
            c1++;
        }else{
        d1++
    }
}
console.log(`A: ${a1}, B: ${b1}, C: ${c1},  D: ${d1} `);

console.log('8-----8');

let sum8 = 0;
function lygineSuma(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        sum8 = a +b;
        if(sum8 % 2 === 0){
            return sum8;
        } else{
            return (`skaičiai nelyginiai`);
        }
    } else if(Array.isArray(a) && Array.isArray(b)){
        sum8 = a.length +b.length;
        if(sum8 % 2 === 0){
            return sum8;
        } else{
            return (`skaičiai nelyginiai`);
        }
    } else {
        return (`Netinkami kintamieji`)
    }
}

console.log('9-----9');

function pirminisSkaicius(n){
    if (typeof n !== 'number'){
        return 'Įvestas ne skaičius';
    }
    if (n < 2){
        return false;
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            return false;
        }
    }
        return true;
}
  
console.log('10----10');

function telefonoNumeris(masyvas) {
    if (masyvas.length !== 10) {
        return "Neteisingas masyvo ilgis";
    }
}

// neuzteko laiko