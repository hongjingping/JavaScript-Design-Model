// 创建对象
var obj = {};
// 等同于
var obj = new Object();

// obj是构造函数(Object)的一个实例
obj.constructor == Object;
obj._proto_ === Object.prototype;

/**
 *新对象obj是使用new操作符后跟一个构造函数来创建的。
 构造函数本身就是一个函数(函数对象)，它和构造函数Person差不多
 */

 var b = new Array();
 b.constructor === Array;
 b._proto_ === Array.protottype;

 var c = new Date();
 c.constructor === Date;
 c._proto_ === Date.prototype;

 var d = new Function();
 d.constructor === Function;
 d._proto_ === Function.protottype;

//  Object.prototype._proto_是null, null处于原型链的顶端。

person1.prototype === Person.prototype;
// Person的构造函数是Function
Person._proto_ === Function.prototype;
Person.prototype._proto_ === Object.prototype;
Object.prototype === null;