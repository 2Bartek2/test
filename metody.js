const name='Bartek'
const fawMeal='schabowego'
console.log(`Cześć, jestem ${name} i bardzo lubie ${fawMeal}!!`);



const name1='Bambo'
const nameAnimal='Felix'
console.log(`Cześć, jestem ${name1}, a to jest ${nameAnimal}.`);
let ageAnimal=8
console.log(`${nameAnimal} ma już ${ageAnimal} lat.`);
console.log(''+ nameAnimal + ' ma już '+ ageAnimal +' lat.');


console.log(name.toUpperCase());
const name5 = name.toUpperCase()
console.log(name5);
const date = new Date
console.log(date.toLocaleDateString());
const username = 'maciej'
const newUserName = username.charAt(0).toLocaleUpperCase() + username.slice(1)
console.log(username.slice(1));
console.log(newUserName);
console.log(typeof name5);
const text1 = 'powiększ mnie'
console.log(text1.toLocaleUpperCase());
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
console.log(text2.toLowerCase());
const text3 = '$#%# wytnij te dziwne znaki na początku'
console.log(text3.slice(5))
const text4 = 'sprawdz czy zawieram słowo "czy"'
console.log(text4.includes('czy'));
const text5 = 'wyloguj z konsoli tylko litere "L",która znajduje się w wyrazie "wyloguj"'
console.log(text5.charAt(2));
const text6 = 'pies zamień każde slowo pies na pies kot'
console.log(text6.replaceAll('pies', 'kot'));
const text7 = 'podziel, ten, string, od, przecinków'
console.log(text7.split(','));