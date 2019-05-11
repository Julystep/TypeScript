function identity<T>(arg: T): T {
    return arg;
}

let x = identity<string>('javascript');
console.log(x);

let y = identity(123);   //这里采用了类推理的理论
console.log(y)