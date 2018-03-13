/**
 * JS在创建对象的时候，都有一个_proto_的内置属性，用于指向创建它的构造函数的原型对象。
 * 对象person1有一个_proto_属性，创建它的构造函数是Person，构造函数的原型对象Person.prototype
 * person1._proto_ == Person.prototype;
 */

Person.prototype.constructor == Person;
person1._proto_ == Person.prototype;
person1.constructor == Person;

/**
 * 这个链接存在于实例person1和构造函数(Person)的原型对象(Person.prototype)之间，
 * 而不是存在于实例和构造函数之间
 */