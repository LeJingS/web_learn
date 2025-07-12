/*
 * @FilePath: day09.js
 * @Author: LeJingS
 * @Date: 2025-07-11 18:08:22
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-11 18:43:55
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 高阶技巧
 */
// 1.深浅拷贝
// 浅拷贝只适合一层
const obj = {
    a:1,
    b:2,
    c:3
}
const obj1 = {...obj}
const obj2 = Object.assign({},obj)
console.log(obj1,obj2);
// 深拷贝
//1.递归

//2.lodash
// 需要引入lodash
const o = _.cloneDeep(obj)
//JSON.parse(JSON.stringify())
const o1 = JSON.parse(JSON.stringify(obj))
// 2.异常处理
//throw抛异常
if(obj.a === 1){
    throw new Error('a is 1')
}
//try/catch捕获异常
try{
    //代码
}catch(err){
    console.log(err.message);
    return err
    //异常处理
}finally{
    //不管有木有错误都执行
}
//debugger断点调试

// 3.处理this
//普通函数this指向调用的对象
//箭头函数this指向外层作用域的this
//原型中最好不使用this

//call方法改变this指向
function fn(a,b){print(this,a+b)}
fn.call(obj,1,2)
//调用改变指向并传参

//apply方法改变this指向
fn.apply(obj,[1,2])
//常用在数组最值
print(Math.max.apply(null,[1,2,3,4,5]))

//bind方法改变this指向，可以改变指向，并返回一个新函数
var fn = fn.bind(obj)




// 4.性能优化
// 防抖 debounce
//单位时间内，频繁触发，只执行最后一次。比如搜索框下拉列表
//lodash防抖处理
_.debounce(function(value){
  print(value)
},500)
//函数，延迟毫秒数

//节流 throttle
//单位时间内，频繁触发，只执行一次。比如鼠标移动
_.throttle(function(value){
  print(value)
},500)
//函数，延迟毫秒数












