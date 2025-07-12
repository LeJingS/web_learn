/*
 * @FilePath: day02.js
 * @Author: LeJingS
 * @Date: 2025-07-03 20:24:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-07-04 19:32:55
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: webApis学习
 */
// let or const const优先使用，对于引用类型，const不能修改引用，但是可以修改引用里面的内容

// 1.DOM树和DOM对象
// DOM既是Document Object Model文档对象模型
// DOM树结构：例如：HTML -> BODY -> DIV -> P -> A -> IMG
// DOM对象：例如：document.body.firstElementChild.firstElementChild.firstElementChild.src = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";

// 2.获取DOM元素，通过css选择器获取
// 例如获取body中的第一个div，返回对象
var div = document.querySelector("div");
var div = document.querySelector(".div");
// 获取body中的所有div，返回对象数组
var divs = document.querySelectorAll("div");

// 3.修改DOM元素
div.innerHTML = "hello world";
div.style.color = "red";
div.style.cssText = "color: red; font-size: 16px;";
div.className = "div";
div.classList.add("div");
div.classList.remove("div");
div.classList.toggle("div");

// 4.自定义属性
<div id="div" data-name="div"></div>
div.dataset.name = "div";

// 5.定时器，间歇函数
setInterval(function () {
    console.log("hello world");
}, 1000);
// setInterval(函数，间歇时间)
//关闭间歇函数
clearInterval(定时器编号);

// 6.事件监听（绑定）DOML2
div.addEventListener("click", function () {
    console.log("hello world");
});
// 元素对象.addEventListener('事件类型'，事件处理函数)
//旧的事件监听 DOML0
div.onclick = function () {
    console.log("hello world");
};
// 移除事件监听
div.removeEventListener("click", function () {
    console.log("hello world");
});
//onclick的问题时后面的onclick会覆盖前面的onclick
// TODO 此二者还有功能性区别

// 7.事件对象
//鼠标事件
//click mouseenter mouseleave mousemove
div.addEventListener("click", function (e) {
    console.log(e.clientX);
    console.log(e.clientY);
});
div.addEventListener("mouseenter", function (e) {
    console.log(e.clientX);
    console.log(e.clientY);
});
div.addEventListener("mouseleave", function (e) {
    console.log(e.clientX);
    console.log(e.clientY);
});
//表单获取焦点




