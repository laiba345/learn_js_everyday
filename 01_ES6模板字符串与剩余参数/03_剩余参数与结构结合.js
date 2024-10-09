const person = {
  name: "小余",
  age: 18,
  address: "福建",
};
// 相应的内容先一一对应
const { address, ...person2 } = person;
console.log(person2); //{ name: '小余', age: 18 }

