var Book = function (title, time, type) {
  this.title = title;
  this.time = time;
  this.type = type;
};

// 实例化一本书
var book =new Book('JavaScript', '2016', 'js');

console.log(book); //undefined
console.log(book.title); // JavaScript
console.log(book.type); // js
console.log(book.time); // 2016

// 图书安全类
var Book2 = function (title, time, type) {
  // 判断执行过程中this是否是当前这个对象(如果是，说明是用new创建的)
  if ( this instanceof Book2 ) {
    this.title = title;
    this.time = time;
    this.type = type;
  } else {
    // 否则重新创建这个对象
    return new Book2(title, time, type);
  }
};
var book2 = Book2('JavaScript', '2016', 'js');
console.log(book2); //Book2
console.log(book2.title); // JavaScript
console.log(book2.type); // js
console.log(book2.time); // 2016
console.log(window); //undefined
console.log(window.title); // undefined
console.log(window.type); // undefined
console.log(window.time); // undefined