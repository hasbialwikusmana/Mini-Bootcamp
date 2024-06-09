function penjumlahan(num1, num2) {
  let total = num1 + num2;
  return total;
}

const penjumlahan2 = function (num1, num2) {
  let total = num1 + num2;
  return total;
};

const penjumlahan3 = (num1, num2) => {
  let total = num1 + num2;
  return total;
};
const penjumlahan4 = (num1, num2) => num1 + num2;

console.log(penjumlahan(5, 5));
console.log(penjumlahan2(10, 5));
console.log(penjumlahan3(15, 5));
console.log(penjumlahan4(20, 5));
