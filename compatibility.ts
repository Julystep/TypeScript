/**
 * 类型兼容性
 * TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性
 */
interface Named {
    name: string;
    id: number;
}

class Person {
    name: string;
    id: number;
}

let p: Named;
p = new Person();

/**
 * 比较两个函数
 * 函数参数可以少，但不能多
 */

let x1 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;

y1 = x1; 
//x1 = y1 //Error

/**
 * 处理返回类型系统默认为目标函数返回值类型的子类型
 */

let x2 = () => ({name: 'Alice'});
let y2 = () => ({name: 'Alice', location: 'Seattle'});

x2 = y2; // OK
// y2 = x2; // Error, because x() lacks a location property
