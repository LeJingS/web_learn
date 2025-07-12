/*
 * @FilePath: day07.js
 * @Author: LeJingS
 * @Date: 2025-07-11 16:52:43
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-11 17:30:18
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: js进阶学习继续
 */
// 1.深入对象
// 创建对象的三种方法
const obj0 = new Object();
const obj1 = {};
//一般首字母大写
function Pig(name, age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
const PeiQi = new Pig("佩琪",1,"女")

// new实例化执行过程

// 实例成员 ＆ 静态成员
// 构造函数的属性和方法都是静态成员

// 2.基本包装类型
// js底层自动把值类型转换成对应的包装过的对象类型

// 3.方法介绍

//Object的静态方法
const obj = {
    name:"PeiQi",
    age:1,
    gender:"女"
}
// 获取对象所有的键
console.log(Object.keys(obj))
// 获取对象所有的值
console.log(Object.values(obj))
// 获取对象所有的键值对
console.log(Object.entries(obj))
//拷贝
console.log(Object.assign({},obj))

//Array的静态方法
const arr = [1,2,3,4,5]
//处理
console.log(arr.reduce(function(prev,current){
    return prev + current
},10))
// 数组全部相加再＋10
arr.reduce((prev,current)=>prev + current,10)

//forEach 遍历
arr.forEach(function(item,index,arr){
    console.log(item,index,arr)
})
//map 返回处理后的数组
arr.map(function(item,index,arr){
    return item * 2
})
//filter 筛选
arr.filter(function(item,index,arr){
    return item > 2
})
//join 拼接数组为字符串
console.log(arr.join(","))
//find 查找并返回第一个满足条件的元素
console.log(arr.find(function(item,index,arr){
    return item > 2
}))
//every 检查是否所有元素都满足条件
console.log(arr.every(function(item,index,arr){
    return item > 2
}))
//some 检查是否至少有一个元素满足条件
console.log(arr.some(function(item,index,arr){
    return item > 2
}))
//concat 连接数组
console.log(arr.concat([6,7,8]))
//sort 排序
console.log(arr.sort())
//splice 删除并返回指定位置的元素
console.log(arr.splice(2,1))
//reverse 反转
console.log(arr.reverse())
//findIndex 查找并返回第一个满足条件的元素的索引
console.log(arr.findIndex(function(item,index,arr){
    return item > 2
}))

//字符串相关方法
const str = "hello world"
//length 字符串长度
console.log(str.length)
//split('分隔符')拆分为数组
console.log(str.split(" "))
//substring(start,end) 截取字符串
console.log(str.substring(0,5))
//startWith(str) 判断是否以str开头
console.log(str.startsWith("hello"))
//endWith(str) 判断是否以str结尾
console.log(str.endsWith("world"))
//includes(str) 判断是否包含str
console.log(str.includes("hello"))
//toUpperCase() 转大写
console.log(str.toUpperCase())
//toLowerCase() 转小写
console.log(str.toLowerCase())
//indexOf(str) 获取str的索引
console.log(str.indexOf("l"))
//replace(str,newStr) 替换str为newStr
console.log(str.replace("l","L"))
//match(re) 匹配正则表达式
console.log(str.match(/l/g))










































