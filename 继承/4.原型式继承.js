// 原型式继承
function inheritObject (o) {
  // 声明一个过渡函数对象
  function F () {};
  // 过渡对象的原型继承父对象
  F.prototype = o;
  // 返回过渡对象的一个实例，该实例的原型继承了父对象
  return new F();
}

var book = {
  name: 'js book',
  alikeBook: ['css book', 'html book']
};
var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');

var otherBook = inheritObject(book);
otherBook.name = 'html book';
otherBook.alikeBook.push('nodejs book');

console.log(newBook.name); // ajax book
console.log(newBook.alikeBook); // ["css book", "html book", "xml book", "nodejs book"]
console.log(otherBook.name); // html book
console.log(otherBook.alikeBook); // ["css book", "html book", "xml book", "nodejs book"]
console.log(book.name); // js book
console.log(book.alikeBook); // ["css book", "html book", "xml book", "nodejs book"]

/**
 * 父类对象中的值类型会被赋值，引用类型会给共用
 */

 // 寄生式继承
var newBook = {
  name: 'js book',
  alikebook: ['css book', 'js book']
};
function createBook (obj) {
  // 通过原型继承方式创建新对象
  var o = new inheritObject(obj);
  // 拓展新对象
  o.getName = function () {
    console.log(name)
  };
  // 返回拓展后的新对象
  return o;
} 

/**
 * 寄生组合式继承
 * 传递参数 subclass 子类
 * 传递参数 superclass 父类
 */
function inheritPrototype (subClass, superClass) {
  // 复制一份父类的原型副本保存到变量中
  var p = inheritObject(superClass.prototype);
  // 修正因为重写子类原型导致子类的constructor属性被修改
  p.constructor = subClass;
  // 设置子类原型
  subClass.prototype = p;
};

// 定义父类
function superClass ( name ) {
  this.name = name;
  this.colors = ['red', 'green', 'blue'];
};
// 定义父类原型方法
superClass.prototype.getName = function () {
  console.log(this.name);
};
// 定义子类
function subClass (name, time) {
  // 构造函数式继承
  subClass.call(this, name);
  // 子类新增属性
  this.time = time;
};
// 寄生式继承父类原型
inheritPrototype(subClass, superClass);
// 子类新增原型方法
subClass.prototype.getTime = function () {
  console.log(this.time);
}
// 创建两个方法测试
var instance1 = new subClass('js book', 2018);
var instance2 = new subClass('css book', 2019);
instance1.colors.push('black');
console.log(instance1.colors);
console.log(instance2.colors);
interface2.getTime();
interface2.getName();


