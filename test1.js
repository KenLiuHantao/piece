/**
 * Created by liuht on 17/2/24.
 */

//b是隐形全局
/*
(function foo() {
    var a = b = 0;
    // ...
})()
console.log(b)
*/


//delete 删除对象的属性 不能直接删除对象
//隐形全局变量相当于挂在window下的属性
/*
// 定义三个全局变量
var global_var = 1;
global_novar = 2; // 反面教材
(function () {
    global_fromfunc = 3; // 反面教材
}());
var a={}
a['b']=1

// 试图删除
delete global_var; // false
delete global_novar; // true
delete global_fromfunc; // true
delete a
console.log(a)
delete a.b
console.log(a)
// 测试该删除
console.log(typeof global_var); // "number"
console.log(typeof global_novar); // "undefined"
console.log(typeof global_fromfunc); // "undefined"
*/

//获取全局对象
/*
var global = (function () {
    return this;
}());

console.log(global)
*/

//单var形式
/*
function func() {
    var a = 1,
        b = 2,
        sum = a + b,
        myobject = {},
        i,
        j;
    // function body...
    console.log(sum)
}
*/

/*
// 次佳的循环
for (var i = 0; i < myarray.length; i++) {
    // 使用myarray[i]做点什么
}

//高性能 前提长度是常量
for (var i = 0, max = myarray.length; i < max; i++) {
    // 使用myarray[i]做点什么
}
*/

//if (true) {
//    function foo() {
//        return ' ';
//    }
//}
//else {
//    function foo() {
//        return 'second';
//    }
//}
//console.log(foo())

//var a=function b(){
//    "use strict";
//    var c=1;
//    console.log(b)
//    console.log(a)
//    console.log(a==b)
//    debugger
//}
//function c(){
//    "use strict";
//    a()
//}
//c()
//console.log(b)



//modal对象 num私有状态 add 公开方法
var modal=(function(){
    "use strict";
    var my={},
        num=0;
    my.add=function(){
        num++;
        console.log(num)
    };
    return my
})();

//modal对象的属性拓展
var modal=(function(my){
    "use strict";
    my.name='newModal';
    return my

}(modal));

//松耦合式拓展 modal声明后在不确定初始化时也可以顺利添加，但是在不确定加载顺序时无法重载属性和方法
var modal=(function(my){
    "use strict";
    my.type='1';
    return my

} (modal || {}));

//紧耦合 对modal加载顺序有要求 但是能重载属性和方法 也可以在内部继续引用原来的属性和方法
var modal=(function(my){
    "use strict";
    var oldName=my.name;
    my.name='testName';
    my.checkOldName=function(){
        console.log(oldName)
    };
    return my
}(modal));
console.log(modal)


var a=(function(){
    console.log('do1')
}());
var b=(function(){
    console.log('do2')
})()

//function count(x,y){
//    "use strict";
//    for(var)
//}
//var x=1,
//    y=1;
//    arr=[[1,1]],
//    flag='right';
//for(var val=1;val<100;val++){
//    if(flag=='right'){
//        if(y==1){
//            x++;
//            arr.push([x,y])
//            flag='left'
//        }else{
//            x++;
//            y--;
//            arr.push([x,y])
//        }
//    }else{
//        if(x==1){
//            y++
//            arr.push([x,y])
//            flag='right'
//        }else{
//            x--;
//            y++;
//            arr.push([x,y])
//        }
//    }
//}
//console.log(arr)
//function count(x,y){
//    "use strict";
//    var val=1;
//    if(x=z){
//        for(var i=0;i<x;i++){
//            val=val+4*i
//        }
//    }
//    if(x>y){
//        var z=x-z;
//    }
//}

function er(){
    "use strict";
    console.log(we)
}
setTimeout(function(){
    "use strict";
    console.log(2333)
},1000)
er()
console.log(123123)