// 1. 通过this添加属性和方法
var Book = function (id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

// 2.也可以通过类的原型添加属性和方法
Book.prototype.display = function () {
  // 展示这本书
}

// 3.或者
Book.prototype = {
  display: function () {
    // 展示这本书
  }
}
var book = new Book(10, 'wikiHong', 18);

// 4.私有属性和私有方法，特权方法，对象公有属性和对象公有方法
var Person = function (id, name, age) {
  // 私有属性
  var num = 1;
  // 私有方法
  function checkId () {};

  // 特权方法
  this.getName = function () {};
  this.getAge = function () {};
  this.getId = function () {};

  // 对象公有属性
  this.id = id;

  // 对象公有方法
  this.copy = function () {};

  // 构造器
  this.setNmae(name);
  this.setAge(age);
};
// 类静态公有属性(对象不能访问)
Person.isChinese = true;
// 类静态公有方法(对象不能访问)
Person.resetTime = function () {
  console.log('new Time');
};
Person.prototype = {
  // 公有属性
  isChinese: false,
  // 公有方法
  display: function () {}
};
var b = new Person(12, 'wikiHong', 22);
console.log(b.num);
console.log(b.id);
console.log(b.isChinese);
console.log(b.resetTime);
