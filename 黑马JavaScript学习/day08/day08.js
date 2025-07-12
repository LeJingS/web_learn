/*
 * @FilePath: day08.js
 * @Author: LeJingS
 * @Date: 2025-07-11 17:31:12
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-11 18:07:49
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: JS进阶
 */
// 1.原型
//封装需要借助构造函数实现，对于复杂的类型，会造成内存浪费
// 原型是构造函数的prototype属性，对象实例的__proto__属性
// 我们可以把公共的方法放在原型上，这样对象实例就可以共享原型上的方法。
function Star(name,age){
    this.name = name;
    this.age = age;
}
Star.prototype.sing = function(){
    console.log('sing');
}

//例子，给数组扩展方法
Array.prototype.max = function(){
    var max = this[0];
    for(var i = 1; i < this.length; i++){
        if(this[i] > max){
            max = this[i];
        }
    }
    return max;
}

//2.constructor
console.log(Star.prototype.constructor);
// 该属性指向原型对象的构造函数。如果prototype对象被修改，则constructor属性会指向修改后的对象。
//prototype如果直接赋值而不是添加属性，则constructor属性需要重新赋值。

//3.__proto__
// __proto__属性，指向当前实例的构造函数的prototype属性。

//4.原型继承
//js中继承的实现原理是原型继承，即子类的原型对象指向父类的实例。
const Person = {
    eyes: 2,
    head: 1
}
function Woman(){

}
//原型继承
Woman.prototype = Person
Woman.prototype.constructor = Woman

const woman = new Woman()
console.log(woman.eyes);

//5.原型链
//类比作用域链
// TODO 原型链学习





