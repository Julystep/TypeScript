/**
 * 作用域关系
 * 和var的创建方式有关
 */
for(var i = 0; i < 10; i++){
    console.log(i);
    setTimeout(function(){
        //console.log(i);
    },10);
}

/**
 * 分块级创建的方式

for(let i = 0; i < 10; i++){
    console.log(i);
    setTimeout(function(){
        console.log(i);
    },10);
}


 */



/**
 * const定义的变量不可修改，但内部变量可以修改
 */

const cat = {
    name: 'kitty',
    id: 1
}

console.log(cat);

/**
 * 不被允许的操作
 * cat = {
 *    name: 'tom',
 *    id: 2 
 * }
 */

/**
 * 可以进行的操作
 */

 cat.name = 'Jack';
 console.log(cat);

/**
 * 数组解构
 */

 let input = [1, 2];
 let [first, second] = input;
 console.log(first);
 console.log(second); 

 /**
  * 对象解构,如果需要指示类型，应在后面标注
  */
 let o = {
     a: 'A',
     b: 'B',
     c: 'C'
 }
 let {a, b} = o;
 console.log(a);
 console.log(b);