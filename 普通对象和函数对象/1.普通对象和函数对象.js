var o1 = {};
var o2 = new Object();
var o3 = new f1();

function f1(){};
var f2 = function () {};
var f3 = new Function('str', 'console.log(str)');

console.log(typeof Object); // function
console.log(typeof Function); // function

console.log(typeof f1); // function
console.log(typeof f2); // function
console.log(typeof f3); // function

console.log(typeof o1); // object
console.log(typeof o2); // object
console.log(typeof o3); // object

/**
 * o1,o2,o3是普通对象; f1，f2,f3是函数对象。
 * 凡是通过new Function()创建的对象都是函数对象，其他的都是普通对象。
 */
