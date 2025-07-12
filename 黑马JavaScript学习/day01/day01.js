/*
 * @FilePath: day01.js
 * @Author: LeJingS
 * @Date: 2025-07-03 19:45:43
 * @LastEditors: 
 * @LastEditTime: 2025-07-03 20:24:47
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: js基础
 */

//js注释和java一样，每行结尾即可加;也可以不加
// 1.js输入输出语法
console.log("hello world");//控制台输出
document.write("hello world");//浏览器输出，内容标签会被解析
alert("hello world");//弹出框输出


prompt("请输入你的名字");//弹出框输入
confirm("是否确定删除？");//弹出框输入，返回true或false

// 2.js变量
let a = 1;
var b = 2;
//var 和 let 的区别：var 声明的变量会提升到作用域的顶部，let 声明的变量不会提升
// 一般使用let，var 不建议使用

// 3.js数据类型
//数组
let arr = [1,2,3];
//常量
const c = 1;
//字符串拼接
let str = "hello" + "world";
//模板字符串
print(`1${str}1`)
//布尔
let bool = true;
//undefine
let undefine;
//null
let nullVar = null;

// 4.类型转换
//隐式转换
let a1 = 1;
let b1 = "2";
let c1 = a1 + b1;
console.log(c1); //12
//显示转换
let a2 = 1;
let b2 = "2";
let c2 = Number(a2) + Number(b2);
console.log(c); //3

// 5.数据运算符
//算数运算符
let a3 = 1;
let b3 = 2;
console.log(a3 + b3); //3
console.log(a3 - b3); //-1
console.log(a3 * b3); //2
console.log(a3 / b3); //0.5
console.log(a3 % b3); //1
console.log(a3 ** b3); //4
//赋值运算符
let a4 = 1;
a4 += 2;
//if等省略
// 6.断点调试
// 浏览器Sources 即可在文件中断点调试
// 7.函数
function add(a, b) {
  return a + b;
}
//匿名函数
let add2 = function (a, b) {
  return a + b;
};
//立即执行函数
(function () {
  console.log("立即执行函数");
})();
//特殊逻辑中断函数
//｜｜左边如果为true 则执行右边的函数
//＆＆左边为false 则执行左边的函数

// 8.对象
let obj = {
  name: "张三",
  age: 18,
  sex: "男",
  hobby: ["吃饭", "睡觉", "打豆豆"],
  show: function () {
    console.log(this.name + " " + this.age);
  },
};
//内置对象
//生成随机数的内置
Math.random();

// 10.js中基本数据类型和引用数据类型
//值类型直接存储数据，引用类型存储的是内存地址
