/**
 * Created by liuht on 17/3/13.
 */
//function Cat(name,color){
//    "use strict";
//    this.name=name;
//    this.color=color;
//}
//function Animal(){
//    this.species = "动物";
//}
//Cat.prototype=new Animal()
//Cat.prototype.constructor=Cat
//Cat.prototype.type='animal';
//Cat.prototype.do=function(what){
//    "use strict";
//    console.log(what)
//}

//var cat1=new Cat('1','red');
//var cat2=new Cat('2','blue');
//console.log(cat1);
//console.log(cat1.constructor==Cat);
//console.log(cat1 instanceof Cat);
//console.log(cat1.do==cat2.do);
//console.log(cat1.constructor)
//console.log(cat1.hasOwnProperty('type'))
function getNumberTimes(min,max,num){
    "use strict";
    //转string拿长度
    var min=String(min),
        max=String(max),
        num=String(num),
        times=0,
        arr=[];
    //拆分数字
    for(let i=max.length-1;i>=0;i--){
        //debugger
        arr.push(max.charAt(i)*Math.pow(10,(max.length-1)-i))
    }
    //
    function get(max,num){
        var max=String(max),
            pow=max.length-1
        debugger
        if(max.charAt(0)<num){
            //当max为个位就跳过
            if(pow>1){
                //10的n－1次方乘以n-1乘以max的第一位
                times=times+(max.charAt(0)*Math.pow(10,pow-1)*(pow-1))
            }else if(pow==1){
                times=Number(times+max.charAt(0))
            }
        }else if(max.charAt(0)==num){
            //开头位刚好等于的时候就+1
            if(pow>=1){
                //10的n－1次方乘以n-1乘以max的第一位
                times=times+(max.charAt(0)*Math.pow(10,pow-1)*(pow-1))+1
            }else{
                times=times+1
            }
        }else{
            if(pow>=1){
                //额外加上10的n次方
                times=times+(max.charAt(0)*Math.pow(10,pow-1)*(pow-1))+Math.pow(10,pow)
            }else{
                times=times+1
            }
        }
        console.log(times)
    }
    get(10,2)
}
getNumberTimes()