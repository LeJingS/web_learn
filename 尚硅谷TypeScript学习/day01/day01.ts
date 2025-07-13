/*
 * @FilePath: day01.ts
 * @Author: LeJingS
 * @Date: 2025-07-13 16:42:13
 * @LastEditors: LeJingS
 * @LastEditTime: 2025-07-13 18:15:22
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
let any: any = "hello world";
//unknown
let unknown: unknown = "hello world";
//void
let v: void = undefined;
//never
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
let any1: any = "hello world";
// 隐式any
let any2;







