const hossein = {
  name: "Hossein",
  age: 29,
  gender: "male",
  developer: true,
};
const ryan = {
  name: "Ryan",
  age: 3,
  gender: "male",
  sonOf: { ...hossein },
};
console.log(hossein);
console.log(ryan);
