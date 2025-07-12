/*
 * @FilePath: day04.js
 * @Author: LeJingS
 * @Date: 2025-07-06 17:08:52
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-08 12:49:25
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: webApis day04
 */

// 1.页面加载事件和页面滚动事件
//等待页面加载完成执行回调函数
windows.addEventListener("load", function () {
  console.log("页面加载完成");
});
//绑定某个元素加载完毕后执行
img.addEventListener("load", function () {
  console.log("图片加载完成");
});
//DOMContentLoaded 等待初始的html文档加载完成即可触发，不需要等待图片或者样式表加载完成

//页面滚动事件，在滚动的时候触发
windows.addEventListener("scroll", function () {
  console.log("页面滚动");
});
document.addEventListener("scroll", function () {
  console.log("页面滚动");
});
img.addEventListener("scroll", function () {
  console.log("图片滚动");
});
//属性 scrollTop 获取元素在垂直方向的滚动距离
// scrollLeft 获取元素在水平方向的滚动距离
// 这两个属性都是可读写的属性

// 2.页面尺寸事件
windows.addEventListener("resize", function () {
  console.log("页面尺寸发生改变");
});
document.addEventListener("resize", function () {
  console.log("页面尺寸发生改变");
});
img.addEventListener("resize", function () {
  console.log("图片尺寸发生改变");
});
//属性 innerWidth 获取浏览器窗口的内部宽度
// innerHeight 获取浏览器窗口的内部高度
// outerWidth 获取浏览器窗口的宽度
// outerHeight 获取浏览器窗口的高度
// clientWidth 获取元素内容区的宽度
// clientHeight 获取元素内容区的高度

// 3.日期对象
// 获取当前日期对象
const date = new Date();
// 创建一个日期对象
const date1 = new Date(2025, 7, 6);

//方法
// 获取年份 2025
data.getFullYear();
// 获取月份 6 由于从0开始，所以是7月
data.getMonth();
// 获取日期 8
data.getDate();
// 获取星期 2 0表示星期天
data.getDay();
// 获取小时 12
data.getHours();
// 获取分钟 09
data.getMinutes();
// 获取秒 07
data.getSeconds();
// 获取毫秒 08
data.getMilliseconds();

// 获取时间戳 169192
// 获取1970年1月1日0时0分0秒到当前时间点的毫秒数，常用来计算时间间隔
data.getTime();
console.log(+new Date('2025/7/8 12:09:07'));

// 格式化时间 2025/7/8 12:09:07
data.toLocaleString();
data.toLocaleDateString();
data.toLocaleTimeString();



// 4.节点操作 指元素节点
// 父节点查找
const head = document.querySelector("head");
const html = head.parentNode;
// 子节点查找,只获得所有的元素节点，此元素节点的所有内容。得到伪数组
const div2 = head.children[2];
// 兄弟节点查找
const div1 = div2.previousElementSibling;
const div3 = div2.nextElementSibling;

// 节点新增
const div = document.createElement("div");
// 追加节点,作为最后一个子节点
div1.appendChild(div);
div.innerHTML = "<h1>hello world</h1>";
// 追加节点，放在某个子元素之前。此例子是放在最前面
div1.insertBefore(div, div1.children[0]);

// 克隆节点
const div4 = div1.cloneNode(true);
// 布尔值，true为深克隆 克隆子元素，false为浅克隆

// 删除节点，要删除元素必须通过父元素删除
div1.removeChild(div2);





// 5.M端事件（移动端事件）
// 触摸事件
img.addEventListener("touchstart", function () {
  console.log("开始触摸");
});
img.addEventListener("touchmove", function () {
  console.log("正在触摸");
});
img.addEventListener("touchend", function () {
  console.log("触摸结束");
});
// swiper插件来方便开发移动端
// swiper.com.cn



