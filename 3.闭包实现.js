// 利用闭包实现
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkBook (name) {};
  // 返回构造函数
  return function (newId, newName, newPrice) {
    // 私有变量
    var name,price;
    // 私有方法
    function checkId (id) {};
    // 特权方法
    this.getName = function () {};
    this.getPrice = function () {};
    this.setName = function () {};
    this.setPrice = function () {};
    // 共有属性
    this.id = newId;
    // 公有方法
    this.copy = function () {};
    bookNum++;
    if (bookNum > 100) {
      throw new Error('我们仅印刷100本');
    }
    // 构造器
    this.setName (name);
    this.setPrice (price);
  }
})();

Book.prototype = {
  // 静态共有属性
  isBook: false,
  // 静态公有方法
  display: function () {}
};

// 2.利用闭包实现
var newBook = (function () {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkBook (name) {};
  // 创建类
  function book (newId, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkId (id) { };
    // 特权方法
    this.getName = function () {};
    this.getPrice = function () {};
    this.setName = function () {};
    this.setPrice = function () {};
    // 公有属性
    this.id = newId;
    // 公有方法
    this.copy = function () {};
    bookNum++;
    if(bookNum > 100)
      throw new Error('仅仅定制100本');
    this.setName(name);
    this.setPrice(price);
  }
  // 构建原型
  _book.prototype = {
    // 静态公有属性
    isJSBook: false,
    // 静态公有方法
    display: function () {}
  };
  return _book;
})()