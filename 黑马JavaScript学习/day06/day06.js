/*
 * @FilePath: day06.js
 * @Author: LeJingS
 * @Date: 2025-07-08 17:15:26
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-11 16:51:25
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: js进阶学习开始
 */

// 1.作用域和作用域链
// 局部作用域分为块作用域和函数作用域
// 块作用域
{
  var a = 1;
  let b = 2;
  console.log(a);
  console.log(b);
}
console.log(a);//此处输出1
console.log(b);//此处输出undefined
// var 声明的变量，会提升到当前作用域的顶部，但是不会被重新赋值

// 全局作用域
// 写在最外层

// 作用域链 即底层变量查找机制 遵循就近原则

// 2.JS垃圾回收机制
// Garbage Collection 简称GC
// 一般情况：全局变量不会被回收，局部变量不再使用时会被自动回收
// 内存泄漏：应该释放的对象，但是没有被释放
// 引用计数法：对象引用计数，对象引用次数为0，则对象被回收（IE采用，现在已弃）
// 标记清除法：无法被找到的对象被回收，即不在使用、引用的对象（Chrome、Firefox、Safari、Node.js、V8采用）

// 3.JS闭包
//  闭包：函数和函数所引用的外层函数变量的组合
// 闭包的作用：封闭数据，提供操作，外部访问和使用函数内部的变量
// 闭包可能引起的问题题：变量污染，内存泄漏
function outer() {
  var a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}
var fn = outer();
fn();

// 4.变量提升和函数提升
// 变量提升
// 只在var 声明的变量会提升
function fn() {
  console.log(a);
  var a = 1;
}
// 报undefined ，var变量会被提升到当前作用域的最前面，但是只提供声明，不提供赋值
// 所以不会报错而是输出undefined

// 函数提升
function fn() {
  foo();
  function foo() {
    console.log("sss");
  }
}
fn();
// 只提升函数声明，函数表达式不会提升，但是也会执行


// 5.函数参数和展开运算符
// 动态参数
// arguments对象是伪数组
function fn() {
  console.log(arguments);
}
fn(1,2,3,4,"r")
// 剩余参数,是真数组
function fn1(...args) {
  console.log(args);
}
//展开运算符
const arr = [1,2,3,4,5];
console.log(...arr);
console.log(arr);
//一般用来求数组最值和合并数组
console.log(Math.max(...arr));
console.log(Math.min(...arr));

const arr2 = [...arr,6,7,8];

// 6.箭头函数 用来替代匿名函数
function fn2(a,b) {
  return a + b;
}
const fn3 =(a,b) =>{
  return a + b;
}
// 只有一个形参时
const a =0;
const fn4 = a => a + 1;
console.log(fn4(a))

const fn5 = uname => ({name:uname})
// 返回对象

// 箭头函数的this指向
// 箭头函数不会创建自己的this，会继承外层作用域的this



// 7.解构赋值
// 数组解构，将数组的元素依次赋给对应的变量语法的
//const [a,b,c] = [1,2,3];
// 应用：快速变量值交换
let a = 1
let b = 2;//此处必须加分号
[a,b] = [b,a]
// 立即执行函数和数组解构必须在前置加分号
// TODO 数组解构其他相关语法学习～～～

// 8.对象解构， 解构时候的变量名必须与对象属性名一致
const obj = {
    uname: 'zf',
    age: 18
}
const {uname,age} = obj
console.log(uname,age)
// 改名的话
const {uname:name,age:uage} = obj


// 9.forEach遍历数组
const arrr = [1,2,3,4,5]
arrr.forEach(item => {
    console.log(item)
})












