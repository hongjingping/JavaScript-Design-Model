// 类式继承: 通过子类的原型prototype对父类实例化来实现
// 声明父类
function ParentClass() {
  this.ParentValue = true;
};
// 为父类添加共有方法
ParentClass.prototype.getParentValue = function () {
  return this.ParentValue
};
// 声明子类
function SonClass() {
  this.SonValue = false;
}
// 继承父类
SonClass.prototype = new ParentClass();
// 为子类添加共有方法
SonClass.prototype.getSonValue = function () {
  return getSonValue;
}

var instance = new SonClass();
instance.getParentValue();
// instance.getSonValue();

// instanceof 通过判断对象的prototype链来确定这个对象是否是某个类的实例，而不关心对象和类的自身结构
console.log(instance instanceof ParentClass) // true
console.log(instance instanceof SonClass) // true
console.log(SonClass instanceof ParentClass) // false
console.log(SonClass instanceof ParentClass) // false
console.log(SonClass.prototype instanceof ParentClass) // true
console.log(instance instanceof Object) // true

function SuperClass () {
  this.books = ['javascript', 'html', 'css'];
};
function SubClass () {

};
SubClass.prototype = new SuperClass();
var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance2.books); // ["javascript", "html", "css"]
instance1.books.push('设计模式');
console.log(instance2.books); // ["javascript", "html", "css", "设计模式"]