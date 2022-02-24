/*Zadání:
• Žádej si od uživatele zadávat číslo TAK DLOUHO, dokud ti nezadá číslo odlišné od 0.
• Pokud ti zadá 0, vypiš mu, že musí zadat číslo odlišné od 0.
• Po úspěšném zadání čísla, číslo vypiš.*/
/*
let cislo;

cislo = Number(prompt("zadej cislo"));

while (cislo === 0) {
  console.log ('prosim zadej cislo odlisne od nuly');
  cislo = Number((prompt("zadej cislo"));
}

console.log("vase cislo je" + cislo); */

/* Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy vypiš NAAKUMULOVANÝ součet těchto čísel
Vstup: 2
Součet: 2
Vstup: 4
Součet: 6
Vstup: 11
Součet: 17
Vstup: 0
Finální součet: 17*/

/*

let soucet = 0;
let cisloC = Number(prompt('zadej cislo'));

while (cisloC !== 0) {
  if (cisloC === 0) {
    break;
  }
  soucet = soucet + cisloC;
  console.log('zadej cislo' + ' ' + 'dosavadni soucet je:' + soucet);

  cisloC = Number(prompt('zadej cislo'));
  //if (cisloC===0){break}
}

*/

/*Rozšiř předešlý úkol tak, že nebude vypisovat pouze součet, ale rozepíše celou rovnici, jak k němu přišel:*/

/*Nechte uživatele zadat 2 čísla, které značí dolní a horní mez na číselné ose celých čísel – včetně.
Pokud tedy zadá 3 a 7, uvažujme čísla 3, 4, 5, 6, 7.*/

/*Nechte uživatele zadat 2 čísla, které značí dolní a horní mez na číselné ose celých čísel – včetně.
Pokud tedy zadá 3 a 7, uvažujme čísla 3, 4, 5, 6, 7.*/

let a = Number(prompt('zadej cislo a'));
let b = Number(prompt('zadej cislo b > a'));

for (let i = a; i <= b; i = i + 1) {
  console.log('cislo i je:' + i);
}

/*Nechte uživatele zadat horní mez – číslo. Vypište všechny čísla od nuly do této horní meze VČETNĚ, které jsou sudá.
Vstup: 8 Výstup: 2 4 6 8 */

let horniMez = Number(prompt('zadej horni mez:'));

for (let i = 0; i <= horniMez; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
