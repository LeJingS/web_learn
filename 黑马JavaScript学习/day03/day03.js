/*
 * @FilePath: day03.js
 * @Author: LeJingS
 * @Date: 2025-07-05 17:43:53
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-06 17:13:16
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 今日APIS学习
 */
// 1.事件类型
// 焦点事件
const input = document.querySelector('input');
input.addEventListener('focus', function () {
  console.log('有焦点触发');
});
input.addEventListener('blur', function () {
  console.log('失去焦点触发');
});
//键盘事件
input.addEventListener('keydown', function (e) {
  console.log(e.key+'键按下');
});
input.addEventListener('keyup', function (e) {
  console.log(e.key+'键抬起');
});
input.addEventListener('keypress', function (e) {
  console.log(e.key+'键按下并抬起');
});
//文本事件
input.addEventListener('input', function (e) {
  console.log(e.data+'输入了');
});
input.addEventListener('change', function (e) {
  console.log(e.data+'改变了');
});

// 2.事件对象
// 一般命名为event,ev,e
//此对象常见属性
// type 事件类型 client x/y 鼠标相对于浏览器位置 offset x/y 鼠标相对于DOM元素位置 key 按下的键值


// 3.环境对象
//指函数内部的this对象，代表当前对象，普通函数代表window对象，谁调用函数 THIS就是谁

// 4.回调函数
// 函数作为参数传递给另一个函数，当被调用时，被传递的函数
function callback(fn) {
  fn();
}
// 5.事件流
// 浏览器事件流：事件冒泡，事件捕获
// 事件流
//事件冒泡：从内往外指的时事件完整执行过程 子到父
//事件捕获：从外往内指的时事件完整执行过程 父到子
// addEventListener(‘时间类型’，‘函数’，‘布尔类型参数，1代表事件捕获阶段，很少使用，0代表事件冒泡阶段’)
// onclick只有冒泡阶段
// 事件流只冒泡父元素的同名事件

//阻止冒泡，只把事件限制到当前元素内。前提时必须要拿到源事件对象，也可以阻止捕获
e.stopPropagation();

//解绑事件,匿名函数无法解绑？
div.removeEventListener("click", function () { });
div.onclick = null;

// 补充 鼠标经过事件
// mouseover mouseout 鼠标移入移出事件      会有冒泡效果
// mouseenter mouseleave 鼠标移入移出事件   无冒泡效果（推荐）


// 5.事件委托
// 注册一次事件给父元素，处理多个子元素。利用事件冒泡原理
e.target.style.backgroundColor = "red";
e.target.tagname === "DIV"

// 6.阻止元素默认行为
//比如表单信息不合法，前端阻止
a.addEventListener("click", function (e) {
    e.preventDefault();
});
// 比如a标签的跳转，







































