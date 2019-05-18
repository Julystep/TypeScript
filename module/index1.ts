/**
 * 导出模块
 */

/*
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

*/

/**
 * 默认导出
 * default可以是函数或者接口，也可以是一个值
 */
/*
 export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}

export let java = 'script';

*/

/**
 * export =
 * 如果用这种方法导出，引用时则应该使用import = reqiure()
 */
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator1 {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator1;