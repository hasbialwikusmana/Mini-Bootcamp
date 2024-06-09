let items = ["Apple", "Orange", "Banana"];

// console.log(items);

for (let i = 0; i < items.length; i++) {
  console.log("Buah ke", i + 1, "adalah", items[i]);
}

//map
items.map((item, index) => {
  console.log("Buah ke", index + 1, "adalah", item);
});

let itemList = items.map((item, index) => {
  let data = "Buah ke " + (index + 1) + " adalah " + item;
  return data;
});

console.log(itemList);

//forEach
let list = [];
items.forEach((e, i) => {
  list = [...list, "Buah ke " + (i + 1) + " adalah " + e];
});

console.log(list);

//split
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.";

let loremParser = lorem.split(" ");
console.log(loremParser);

let loremText = loremParser.join(" ");
console.log(loremText);

let loremOutput = lorem.split(" ").join(" ");
console.log(loremOutput);
