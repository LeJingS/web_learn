/*
 * @FilePath: day05.js
 * @Author: LeJingS
 * @Date: 2025-07-08 12:52:21
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-08 17:13:58
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 真的学完Apis
 */
// 1.BOM和延迟函数setTimeout
// BOM是浏览器对象模型
// setTimeout(function () {},延迟毫秒数)
// 清楚延迟函数 clearTimeout(延迟函数的id)

// 2.location对象，它拆分并保存了URL的各个部分
// 页面跳转
location.href = "https://www.baidu.com";
// search属性获取参数，即?后的参数
// hash 属性获取锚点，即#后的参数
// reload() 刷新页面 参数为true表示强制刷新

// 3.navigator对象和history对象
// navigator.userAgent 获取浏览器信息，一般用来判断浏览器是否是移动端，用来跳转到移动端页面
// 匿名立即执行函数
(function () {
  if (/mobile/i.test(navigator.userAgent)) {
    location.href = "https://www.baidu.com";
  }
})();
// history对象方法
// history.back() 返回上一页
// history.forward() 前进一页
// history.go(1) 前进一页
// history.go(-1) 返回上一页
// history.go(0) 刷新当前页面
// history.go(n) 前进n页
// history.go(-n) 后退n页
// history.go(n) n为正数时，前进n页，为负数时，后退n页，为0时，刷新当前


// 4.本地存储localstorage
//数据存在用户浏览器中，关闭浏览器后数据依然存在
//同一浏览器下同一域名下数据共享，以键值对方式存储
localStorage.setItem('name', '张三');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
localStorage.clear();
localStorage.length;
localStorage.key(0);

//本地存储复杂数据
localStorage.setItem('user', JSON.stringify({
    name: '张三',
    age: 18
}));
console.log(JSON.parse(localStorage.getItem('user')));


//数组的map方法和join方法
var arr = [1, 2, 3, 4, 5];
//数组循环处理后返回新数组
var newArr = arr.map(function (item) {
    return item * 2;
});
//join方法 ，吧数组转化为字符串，参数为元素之间的分割符，空格为默认值逗号分割
var str = arr.join('-');


// 5.正则表达式
// const 变量名 = /表达式/
const reg = /前端/
const str = '端后端架构'
console.log(reg.test(str));
//exec方法
console.log(reg.exec(str));

//元字符
// 例如写法 [a-z] 表示匹配a-z之间的任意字符
//分为三大类 边界符 量词 字符类
//边界符
// /^a/表示匹配字符串的开头
// /a$/表示匹配字符串的结尾
// /^a$/表示只有'a‘才能通过，精确匹配
// /a|b/ 表示匹配a或者b

//量词
// ＊ 表示匹配任意字符0次或更多次
// + 匹配任意字符一次或更多次
// ？表示匹配任意字符一次或0次
// {n} 表示匹配任意字符n次
// {n,} 匹配任意字符n次或更多次
// {n,m} 表示匹配任意字符n-m次

//字符类
// /[abc]/ 表示匹配abc之间的任意字符一次
// /[abc]{2}/表示匹配abc之间的任意字符2次
//例 /^[1-9][0-9]{4,}$/ qq号的规则
// /[^abc]/ 表示匹配非abc之间的任意字符一次 [^]内表非
// 预定义类
// /\d/ 匹配任意数字字符一次
// /\D/ 匹配任意非数字字符一次
// /\w/ 匹配任意单词字符一次
// /\W/ 匹配任意非单词字符一次
// /\s/ 匹配任意空白字符一次
// /\S/ 匹配任意非空白字符一次
// /\b/ 匹配单词边界
// /\B/ 匹配非单词边界
// /\t/ 匹配一个制表符
// /\n/ 匹配一个换行符
// /\r/ 匹配一个回车符

//替换
// i是不区分大小写 g是区分大小写
var str = "hello world";
str = str.replace(/\s/g, "");
console.log(str);















