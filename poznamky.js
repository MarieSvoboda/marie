// let [jmenoPromenne]=[hodnota];
let jirik;
jirik = 57.6;
console.log(jirik);

let jmeno = 'marian';

//string, number, ...
//bool
//prsi / true = pravda
let prsi = true;
//nesnezi
let snezi = false;

let a = 1;
let b = 2;
console.log(a === b, a !== b);
console.log(a > b, a < b);

let a = 5;
let b = 11;

let soucet = a + b;
console.log(soucet);

//mocnina ** (2**3)

let prijmeni = 'sss';
console.log(jmeno + '' + prijemni);

//deleni / % se zbytkem

let minutVHodine = 60;
let hodinVeDne = 24;
let dnuVLednu = 31;
let vysledek = dnuVLednu * hodinVeDne * minutVHodine;
console.log('v lednu je celkem' + vysledek + 'minut');

//vstup uzivatele prompt

let jmeno = prompt('zadejte jmeno');
let jmeno = prompt('jak se jmenujes');
console.log('jmenujes se:' + jmeno);
//vraci text retezec
//aby bylo cislo
let cislo = Number('3.24');

let vek = Number(prompt('kolik je ti let'));

//let cislo = Number (vstupOdUzivatele);

// true, false
console.log(1 === 1); // true vypise

// ===rovna se
//!==nerovna se

//< >, >= <=

//logicke operatory
// a zaroven &&.  obe strany pravda  prsi a zaroven mrzne
// nebo ||  prsi nebo mrzne
// Ne !
// console.log(prsi&&mrzne)

//podminky
let vek = 18;
/* if ( VYRAZ / pravda ci lez) { vykona se pokud je vyraz, podminka pravdivy} 
else { vykona se pokud vyraz neni pravda}

if (vek>=18)
{console.log( "vyborne jsi plnolety")} 
else {console.log('nejsiplnolety')}; */

//()vyraz, matematicka operace, privolani fce
//[ ]pristup do SVGTextPositioningElement
//  {}]blok kodu, podminky, cykly, objekty

// dobre znaceni zavorek aby se nemuselo porad ""...nutne pouzit ` $ {}
/* console.log(`Vase jemno je ${jmenoJ}, je vam ${vekV} a tak jeste musite pockat ${18-vekV} let, nez budete ridit auto`)*/

let a = Number(prompt('Zadej číslo A:'));
let b = Number(prompt('Zadej číslo B:'));
let c = Number(prompt('Zadej číslo C:'));

if (a > b) {
  if (a > c) {
    console.log('Největší číslo je číslo A:' + a);
  } else {
    console.log('Největší číslo je číslo C:' + c);
  }
} else {
  if (c < b) {
    console.log('Největší je číslo B:' + b);
  } else {
    console.log('Největší je číslo C:' + c);
  }
}

//DOKUD plati podminka
// while(podminka-dokud palti tento vyraz) {delam xy};

//vypis 5x ahoj

let pocitadlo = 0;
while (pocitadlo < 5) {
  console.log('ahoj');
  if (pocitadlo === 2) {
    break;
  }
  //pocitadlo ++
  pocitadlo = pocitadlo + 1;
} //++

//while podminka na zacatku
while (podminka) {
  prikazy;
}

//while = do while = cyklus s podminkou na konci
do {
  prikazy;
} while (podminka); //zda se ma skocit na zacatek a jet znovu


// 1 iterace/ kdyz se vykona jeden blok cyklu

FOR cyklus

for(let i=0   ;PODMINKA  i<10  ; i=i+1 ){    
  console.log(i);
  // for ( co se ma provest 1x, podminka, co se ma stat na konci kazde iterace)
  ///odpovida> let i=0  while cyklus (PODMINKA i =10) { ...i=i+1;}
} //i++ = i+1

// FUNKCE:
// jmenaFunkci ( argumenty) console.log("ahoj", "pepo");
let cislo = prompt( "yadej cislo");
/*
fce maji jmeno
 / vstupy parametry
 vystup  = navratova hodnota
*/

function pozdrav(j){
 console.log("ahoj"+ j );
}

//zde specificke hodnoty j
let jmeno = "jirinka"
pozdrav("mariane");
pozdrav("pepo");
pozdrav (jmeno);


function rekni co je vetsi( prvni, druhy){

  if (prvni>druhy)
  console.log (1 je vetsi)
}


//vraceni hodnoty:

function vratidruhoumocninu(x){
let vysledek = x * x;
return vysledek
}
//atd 
console.log(vratidruhoumocninu(11));




// POLE: 

let pole = [4, 11, 16];

console.log(pole);

pole.push() //vlozeni noveho prvku do pole

pole.push(1); //pole nyni 4, 11, 16, 1

// pozice v poli:
pole[index]

console.log("cislo" + pole[index]);
for (let i = 0; i<3; i++){

  console.log("cislo" + pole[i])
}
pole[i]

//delka pole
pole.length // delka pole, kolik ma pozic


// Objekty / vice osob, veku, adres. vysky vahy... nemam indexi / jmeno 1, jmeno 2, jmeno 3...

let jmeno = "marian"
let vek = 32

//jak veci stdruzit do sebe


let pole = [];

let prvniOsoba = {
  jmeno: "marian",
  vek: 31 
};
let druhaOSoba = {
  jmeno:"lucie",
  vek: 23
};

console.log(prvniOsoba.jmeno);
console.log(druhaOsoba.vek);