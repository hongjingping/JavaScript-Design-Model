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