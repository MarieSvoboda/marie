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

let a = 5;
let b = 11;

let soucet = a + b;
console.log(soucet);

//mocnina ** (2**3)

let prijmeni = 'sss';
console.log(jmeno + '' + prijemni);

//deleni / % se zbytkem

let minutVHodine = 60
let hodinVeDne = 24
let dnuVLednu = 31
let vysledek - ***
console.log('v lednu je celkem' + vysledek + 'minut')

//vstup uzivatele prompt

let jmeno = prompt ("zadejte jmeno")
let jmeno = prompt("jak se jmenujes");
console.log("jmenujes se:" + jmeno);
//vraci text retezec
//aby bylo cislo
let cislo = Number("3.24");

let vek = Number(prompt ("kolik je ti let"));


let cislo = Number (vstupOdUzivatele);


true, false
console.log(1===1);   true vypise

// ===rovna se
//!==nerovna se

//< >, >= <=


//logicke operatory
// a zaroven &&.  obe strany pravda  prsi a zaroven mrzne
// nebo ||  prsi nebo mrzne
// Ne ! 
console.log(prsi&&mrzne)


//podminky
let vek = 18;
if ( VYRAZ / pravda ci lez) { vykona se pokud je vyraz, podminka pravdivy} 
else { vykona se pokud vyraz neni pravda}

if (vek>=18)
{console.log( "vyborne jsi plnolety")} 
else {console.log('nejsiplnolety')};


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