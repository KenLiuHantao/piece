/**
 * Created by liuht on 17/2/25.
 */
/*算法比较
 * 1.冒泡排序 sort1
 *
 *
 *
 *
 *
 *
 */
var arr=[4,5,2,7,1,0,8,3,6,9];
//数组中交换位置
function exchangeArr(arr,index1,index2){
    "use strict";
    var val1=arr[index1];
    arr.splice(index1,1,arr[index2]);
    arr.splice(index2,1,val1);
    return arr
}

//冒泡从小到大排序
function sort1(arr){
    "use strict";
    var length=arr.length;
    function bubble(index){
        //判断边界
        if(index>0){
            //判断大小
            if(arr[index]<arr[index-1]){
                arr=exchangeArr(arr,index,index-1);
                //递归
                bubble(index-1)
            }else{
                return
            }
        }else{
            return
        }
    }
    for(var i=0;i<length;i++){
        bubble(i);
    }
    return arr
}
//快速排序
function sort2(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return sort2(left).concat([pivot], sort2(right));
}


//建立10000长度随机数组
var arr1=[];
var arr2=[];
var arr3=[];
for(var i=0;i<10000;i++){
    arr1.push(parseInt(Math.random()*100))
}
for(var i=0;i<10000;i++){
    arr2.push(arr1[i])
}
for(var i=0;i<10000;i++){
    arr3.push(arr1[i])
}

//测试sort排序耗时
var date1=new Date();
arr1.sort(function(a,b){
    "use strict";
    return a-b
});
var date2=new Date();
console.log(arr1);
console.log('sort耗时:'+(date2-date1));

//测试自定义冒泡排序耗时
var date3=new Date();
sort1(arr2);
var date4=new Date();
console.log(arr2);
console.log('冒泡耗时:'+(date4-date3));

//测试自定义快速排序耗时
var date5=new Date();
arr3=sort2(arr3);
var date6=new Date();
console.log(arr3);
console.log('快速排序耗时:'+(date6-date5));