// 单继承 属性继承
var extend = function (target, source) {
  // 遍历对象来源
  for ( var property in source ) {
    // 将源对象的属性复制到目标对象中
    target[property] = source[property];
  }
  // 返回目标对象
  return target;
}

var book = {
  name: 'js book',
  alike: ['css', 'js', 'html']
}
var anotherBook = {
  color: 'red'
}
extend(anotherBook, book);
console.log(anotherBook.name); // js book
console.log(anotherBook.alike); //  ["css", "js", "html"]

anotherBook.alike.push('ajax');
anotherBook.name = '设计模式';
console.log(anotherBook.alike); // ["css", "js", "html", "ajax"]
console.log(anotherBook.name); // 设计模式

console.log(book.name); // js book
console.log(book.alike); //  ["css", "js", "html", "ajax"]

// 单继承可以实现对对象属性的复制

var mix = function () {
  var i = 1, // 从第二个参数起为被继承的对象
    len = arguments.length, // 获取参数长度
    target = arguments[0], // 第一个对象为目标对象
    arg; // 缓存参数对象
  // 遍历被继承的对象
  for (; i < len; i++) {
    // 缓存当前对象
    arg = arguments[i];
    // 遍历被继承对象的属性
    for (var property in arg) {
      // 将被继承对象的属性复制到目标对象中
      target[property] = arg[property];
    }
  }
  // 返回目标对象
  return target;
}
