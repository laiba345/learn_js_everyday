/**
 * 监听对象中属性 被设置或获取的过程
 * - 使用之前的属性描述符中的存储属性描述符 defineProperty
 */
const obj = {
  name: "coderwhy",
  age: 35,
};

Object.defineProperty(obj, "name", {
  get: function () {
    console.log("监听到该name属性被访问");
    // 添加下方代码，
    return "参与JS高级共学计划，添加vx：coderwhy666";
  },
  set: function () {
    console.log("监听到该name属性被设置");
  },
});
obj.name; //监听到该name属性被访问
console.log(obj.name); //监听到该name属性被访问  undefined
obj.name = "小余"; //监听到该name属性被设置

/**
 * 注意：
 * 1. 上述中不管是查看属性还是设置属性，都能够被get和set所捕获
 * 2. 监听到属性了，为什么没返回正确的name属性，而是undefined？
 *    - 因为查看属性会触发get，而get没有返回内容，相当于return了一个undefined
 */

/**
 * 在监听案例中，我们返回了一个字符串，而想要返回正确的value值也是简单的，
 * 只需要拿到监听的key，然后从对象中针对性获取即可，同时处理下当改变值时，
 * 在set中新值覆盖旧值就行；
 * 
 * 但是上述方式局限性很大，只能监听一个属性，
 *  - 解决方式1，
 *      - 我们需要先获取全部的key属性，然后遍历key属性填入defineProperty中
 */

// 见demo 02