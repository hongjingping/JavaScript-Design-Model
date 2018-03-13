/**
 * JS中，每当定义一个对象(函数也是对象)时候，对象中都会包含一些预定义的属性。
 * 其中每个函数对象都有一个prototype属性，这个属性指向函数的原型对象。
 */
function Person () {};
Person.prototype.name = 'wikiHong';
Person.prototype.age = 22;
Person.prototype.gender = 'women';
Person.prototype.sayHello = function () {
  alert(this.name);
};

var person1 = new Person();
person1.sayHello(); // wikiHong

var person2 = new Person();
person2.sayHello(); // wikiHong

console.log(person1.sayHello == person2.sayHello); // true

/**
 * 每一个对象都有_proto_属性，但只有函数对象才有prototype属性。
 */

var a = Person.prototype = {
  name: 'wikiHong',
  age: 22,
  gender: 'women',
  sayHello: function () {
    alert(this.name);
  }
};

/**
 * 原型对象: Person.prototype/A,他有一个默认的属性constructor
 * 默认情况下，所有的原型对象都会自动获得一个constructor(构造函数)属性，
 * 这个属性(是一个指针)指向prototype属性所在的函数(Person)
 */

Person.prototype.constructor == Person;

/**
 * 原型对象(Person.prototype)是构造函数(Proson)的一个实例。
 * 原型对象是普通对象(Function.prototype除外，她是函数对象，但是她很特殊，他没有prototype属性)
 */

 function newPerson () {};
console.log(newPerson.prototype); // constructor newPerson()
console.log(typeof newPerson.prototype); // object
console.log(typeof Function.prototype); // function
console.log(typeof Object.prototype); // object
console.log(typeof Function.prototype.prototype); // undefined

/**
 * 原型对象主要用来继承
 */
var Person2 = function (name) {
  this.name = name;
}
Person2.prototype.getName = function () {
  return this.name;
}
var Proson3 = new Person2('wikiHong');
Proson3.getName();

/**
 * Person2.prototype设置了一个函数对象的属性，那有Person2的实例(Person3)出来的普通对象就继承了这个属性。
 */