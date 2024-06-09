let hobbys = ["Reading", "Coding", "Gaming"];

let hobby2 = ["riding", "swimming"];

let dataHobby = [...hobbys, "baking", ...hobby2];

// console.log(dataHobby);

let hobbyBudy = dataHobby[0];
let hobbyRafli = dataHobby[1];
// console.log(hobbyBudy);
// console.log(hobbyRafli);

// Destructuring
let [hobbyHari, hobbyBudi] = dataHobby;

// console.log(hobbyHari);
// console.log(hobbyBudi)

let address = {
  city: "Ciamis",
  province: "Jawa Barat",
  detail: {
    street: "Jalan Raya Ciamis",
    postalCode: "45121",
  },
};

// let city = address.city;
// let province = address.province;
// let street = address.detail.street;
// let postalCode = address.detail.postalCode;

// console.log(city);
// console.log(province);
// console.log(street);
// console.log(postalCode);

// Destructuring
let {
  city,
  province,
  detail: { street, postalCode },
} = address;

console.log(city);
