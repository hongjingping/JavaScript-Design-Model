/**
 * 所有函数对象的_proto_都指向Function.prototype,它是一个空函数(Empty function)
 */
Number._proto_ == Function.prototype;
Number.constructor == Function;

Boolean._proto_ == Function.prototype;
Boolean.constructor == Function;

String._proto_ == Function.prototype;
String.constructor == Function;

// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object以及Function自身
Object._proto_ == Function.prototype;
Object.constructor == Function;

Function._proto_ == Function.prototype;
Function.constructor == Function;

Array._proto_ == Function.prototype;
Array.constructor == Function;

RegExp._proto_ == Function.prototype;
RegExp.constructor == Function;

Error._proto_ == Function.prototype;
Error.constructor == Function;

Date._proto_ == Function.prototype;
Date.constructor == Function;

// JS中内置的构造器/对象有12个，上面列举了8个，Glogal不能直接访问，Arguments仅仅在函数调用时候由JS引擎创建，Math、JSON是以对象的形式存在，无需new,他们的-proto-是Object.prototype

Math._proto_ == Object.prototype;
Math.constructor == Object;

JSON._proto_ == Object.prototype;
JSON.constructor == Object;

// 函数声明
function Person () {};
// 函数表达式
var Person = function () {};
console.log(Person._proto_ == Function.prototype);
console.log(Person.constructor == Function);