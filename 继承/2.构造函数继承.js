// 构造函数继承: 通过在子类的构造函数作用环境中执行一次父类的构造函数来实现
// 声明父类
function SuperClass (id) {
  // 引用类型共有属性
  this.books = ['javascript', 'html', 'css'];
  // 值类型共有属性
  this.id = id;
};

// 父类声明原型方法
SuperClass.prototype.showBooks = function () {
  console.log(this.books);
};

// 声明子类
function SubClass (id) {
  SuperClass.call(this, id);
}

// 创建第一个子类的实例
var instance1 = new SubClass(6);
// 创建第二个子类的实例
var instance2 = new SubClass(8);

console.log(instance1.books); // ["javascript", "html", "css"]
console.log(instance1.id); // 6
instance1.books.push('设计模式'); 
console.log(instance1.books); // ["javascript", "html", "css", "设计模式"]
console.log(instance1.id); // 6
console.log(instance2.books); // ["javascript", "html", "css"]
console.log(instance2.id); // 8