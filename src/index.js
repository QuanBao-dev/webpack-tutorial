import "./styles/index.scss";

const firstPerson = {
  name: "John",
  age: 20,
  gender: "male",
  job: "waitress",
};

const secondPerson = {
  ...firstPerson,
  name: "Doe",
  age: 22,
};

console.log(firstPerson);
console.log(secondPerson);
