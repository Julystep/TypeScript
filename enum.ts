/**
 * 数字枚举，当第一个赋值时在第一个就开始向下依次递增
 * 否则从0开始递增
 */
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction.Down);

/**
 * 字符串枚举
 */

enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Down);

/**
 * 计算的和常量成员
每个枚举成员都带有一个值，它可以是 常量或 计算出来的。 当满足如下条件时，枚举成员被当作是常量：

它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
 */
enum Sum { x };
/**
 * 它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
 */
enum Sum1 { x=1, y, z};
/**
 * 枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
 */
enum Sum2 { x=1 << 1, y, z };

/**
 * 运行时的枚举
 */
enum E {
    X, Y, Z
}

function f(obj: { X: number, Y: number, Z: number }) {
    return obj.X + obj.Y + obj.Z;
}

console.log(f(E));

/**
 * 反向映射
 * 不会为字符串成员生成反向映射
 */
enum Enum {
    A
}
let a = Enum.A;
console.log(a);
let nameOfA = Enum[a];
console.log(nameOfA);
