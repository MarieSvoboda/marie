console.log('neco');

/*Založte proměnné pro jméno, věk, váhu v kg a  výšku  v metrech - nastavte jim libovolnou hodnotu.
Spočtěte BMI
Do konzole vypište větu ve formátu:

Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.*/

let jmeno = 'Marie';
let vek = 41;
let vaha = 58;
let vyska = 1.77;

BMI = vaha / vyska ** 2;
console.log(BMI);

console.log(
  'Jmenuji se' +
    ' ' +
    jmeno +
    '' +
    ' ' +
    'je mi' +
    ' ' +
    vek +
    ' ' +
    'vazim' +
    ' ' +
    vaha +
    'kg' +
    '.'
);

/* Nadefinujme si proměnné a jejich hodnoty potřebné k uložení následujících informací:
 Jméno muže a ženy ​
 Rok a měsíc narození muže i ženy​
Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu​ "[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců​"
Pro zjednodušení úkolu počítejme, že je muž vždy starší! */

/*
let muzJmeno = "xxx"
let zenaJmeno = "hhh"
let rokNarozeniMuz;
let rokNarozeniZena;
let mesicNarozeniMuz;
let mesicNarozeniZena;

rozdil =
  (rokNarozeniMuz * 12 +
  mesicNarozeniMuz) -
  (rokNarozeniZena * 12 + mesicNarozeniZena);
console.log(
  muzJmeno 'a' [zena] jsou od sebe vzdaleni' + ' ' + rozdil + ' ' + 'mesicu'
); */


/*Přijměte jméno jako vstup od uživatele, dále nechte zadat jeho věk a vypište na základě věku jednu ze dvou vět ve tvaru:
a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.*/

let jmeno = prompt("Zadej sve jmeno:")
let vek = Number (prompt("Zadej svuj vek:"))

if (vek>=18) {console.log("Mate pravo ridit auto")}
else
