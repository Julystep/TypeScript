interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

/**
 * 可选参数，如果未给可选参数传参则采用默认值
 * 否则将改变成可选参数传入的值
 */

 interface Value{
     color?: string,
     id?: number
 }

 function test(value : Value): {color: string; id: number}{
     let test1 = {color: 'white', id: 1};
     if(value.color){
         test1.color = value.color;
     }
     if(value.id){
         test1.id = value.id;
     }
     return test1;
 }

 /**
  * 只读属性,属性一旦定义就不可以再次改变
  */
 interface read{
     readonly name: string;
     readonly text: string;
 }

 /**
  * 接口可以被继承，也可以被实现
  */
 