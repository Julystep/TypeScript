/**
 * 函数类型包含两部分：参数类型和返回值类型
 * 如果一边写了类型一边没写类型，就会自动推断出来类型
 */

let myAdd: (baseValue: number, increment: number) => number =
function(x: number, y: number): number { return x + y; };

/**
 * 可选参数和默认参数
 */

 let myAdd1 = function(x: string, y: string){   //传参必须和这里的数量相匹配
     console.log(x + y);
 }

 let myAdd2 = function(x: string, y?: string){  //这里y的参数是可选的
     console.log(x + y);
 }