let a = Number(prompt('zadej cislo A:'));
let b = Number(prompt('zadej cislo B:'));
let c = Number(prompt('zadej cislo C:'));

if (a > b) {
  //porovnavam jeste A a C
  if (a > c) {
    console.log('nejvetsi je A:' + a);
    if (b + c > a) {
      console.log('lze sestrojit');
    } else {
      console.log('nelze sestrojit');
    }
  } else {
    console.log('nejvetsi je C:' + c);
    if (b + a > c) {
      console.log('lze sestrojit');
    } else {
      console.log('nelze sestrojit');
    }
  }
} else {
  //porovnavam B a C
  if (b > c) {
    console.log('nejvetsi je B:' + b);
    if (a + c > b) {
      console.log('lze sestrojit');
    } else {
      console.log('nelze sestrojit');
    }
  } else {
    console.log('nejvetsi je C:' + c);
    if (b + a > c) {
      console.log('lze sestrojit');
    } else {
      console.log('nelze sestrojit');
    }
  }
}
