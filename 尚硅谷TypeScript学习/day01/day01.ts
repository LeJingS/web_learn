/*
 * @FilePath: day01.ts
 * @Author: LeJingS
 * @Date: 2025-07-13 16:42:13
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-13 19:22:52
 * Copyright: 2025 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: ts学习开始
 */
// 类型
//数字
let num: number = 123;
//字符串
let str: string = "hello world";
//布尔
let bool: boolean = true;
//字面量
let num1: 1 | 2 | 3 = 1;
//any
let any1: any = "hello world";
//unknown
let unknown: unknown = "hello world";
//void 一般用来表示没有返回值
let v: void = undefined;
//never 一般用来表示永远不会返回结果
let n: never;
//object
let obj: object = {
  name: "lejing",
  age: 18,
};
//数组
let arr: number[] = [1, 2, 3];
//tuple
let tuple: [string, number] = ["hello world", 123];
//enum 枚举
enum Color {
  Red,
  Green,
  Blue,
}

//详细介绍
//字面量
let num2: 1 | 2 | 3 = 1;
// num2变量只能赋值1、2、3
let num3: 1| true|"hello world"
// num3变量只能赋值1、true、"hello world"

//any相当于关闭类型检查
//显示any
let any4: any = "hello world";
// 隐式any
let any2;
// unknown实际上就是一个类型安全的any，
// unknown类型只能赋值给any类型或者unknown类型本身,不能直接赋值给其他类型

//类型断言，可以告诉编译器，变量的实际类型比它所声明的类型更宽泛
let any3: any = "hello world";
let str1: string = any3 as string;
str1 = <string>any3;
if(typeof any3 === "string"){
    str1 = any3;
}

//never示例
function error(message: string): never {
    throw new Error(message);
}

// object
let b:{name:string}
//必须要有设置的属性
b = {name:"hello"}
//设置可选属性
let c:{name?:string}
//设置能添加额外任意类型属性
let d: {name:string,[prop:string]:any}
d = {name:"hello",age:18}

// function
//设置参数和返回值
let e: (a:number,b:number) => number;
e = function(a:number,b:number):number{
    return a+b;
}

//数组两种表示法
let f: string[];
let g: Array<number>;

// 元组，即定长度的数组,多了少了都不行
let h: [string,number];
h = ["hello",18];

// 枚举
enum fontSize{
    small = 1,
    medium,
    large
}
let i: Color = Color.Red;




