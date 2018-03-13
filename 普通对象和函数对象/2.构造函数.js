// 构造函数
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.sayName = function () {
    alert(this.name);
  };
};
var person1 = new Person('wikiHong', 22, 'women');
var person2 = new Person('Mrfang', 23, 'man');

/**
 * person1,person1都是Person的实例。
 * 这两个实例都有一个constructor(构造函数)属性，该属性(是一个指针)指向Person。
 */
console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true

/**
 * Person是构造函数，person1和person2是实例
 * 实例的构造函数属性(constructor)指向构造函数
 */

