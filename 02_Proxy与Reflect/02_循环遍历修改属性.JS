const obj = {
  name: "kk",
  age: 35,
  Hobbies: "写代码",
};

Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到${key}属性`);
      return value;
    },
    set: function (newValue) {
      console.log(`监听到${key}属性被设置值`);
      value = newValue;
    },
  });
});

obj.name = "小余"; //监听到name属性被设置值
obj.age = 18; //监听到age属性被设置值
obj.Hobbies = "看书"; //监听到Hobbies属性被设置值

console.log(obj.name);
console.log(obj.age); // 18 
console.log(obj.Hobbies);

/**
 * 但是上述做法是有明显缺点的；
 *  - 对于新增属性、删除属性，上述方式是无能为力的
 *  - 有更加合适的API：Proxy，用初衷与用法一致的API，能让我们的意图更加明确可靠
 */