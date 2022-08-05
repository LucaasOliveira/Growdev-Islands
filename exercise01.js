amount = 129;

console.log("O valor do saque vai ser de:  " + amount + " Growcoins");

count50 = 0;
count10 = 0;
count5 = 0;
count1 = 0;

while (amount >= 50) {
  count50++;
  amount = amount - 50;
}
while (amount >= 10) {
  count10++;
  amount = amount - 10;
}
while (amount >= 5) {
  count5++;
  amount = amount - 5;
}
while (amount >= 1) {
  count1++;
  amount = amount - 1;
}
console.log("GC$ 50 " + count50);
console.log("GC$ 10 " + count10);
console.log("GC$ 5 " + count5);
console.log("GC$ 1 " + count1);
