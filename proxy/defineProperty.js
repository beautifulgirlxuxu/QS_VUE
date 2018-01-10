// var a = {};
// 精细化的操作对象的属性访问
// 第一个个参数 目标对象   
// 第二个参数 需要定义的属性或方法的名字
// 第三个参数 目标属性所拥有的特性 descriptor    
// Object.defineProperty(a, "b", {
//     value: 123,
//     writable: true,
//     configurable: false
// });
// Object.defineProperty(a, "b", {
//     value: 123,
//     writable: true,
//     configurable: true
// });
// a.b = 234;
// console.log(a.b);

var a = {}; //被代理或被劫持的对象
// Object.defineProperty(a, "b", {
//     value: 3445,
//     enumerable: false//可枚举
// });
// for (key in a) {
//     console.log(key);
// }

Object.defineProperty(a, "b", {
    set: function(newValue) {
        console.log("你要赋值给我，我的值是" + newValue);
        console.log(`以前的值是${this.value}`);
        this.value = newValue;
        console.log(`新的值是${this.value}`);
    },
    get: function() {
        console.log(`你取我的值${this.value}`);
        return this.value;
    }
});

// a.b = 99;
a.b = 100;
a.b

