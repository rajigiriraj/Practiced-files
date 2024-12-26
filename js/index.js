
// let a=10
// var b=20
// console.log(b)
const b=[1, 2, 3]
"use strict"
// b=[2, 3, 4]
Object.freeze(b)
try{
    b[0]=2
    b[1]=3
    b[2]=4
}catch( ex )
{
    console.log(ex)
}
console.log(b)
// const a=10
// try
var func= ()=> console.log("anonymous")// for one line code we dont need curley braces
func()
var func1=()=> {
    console.log("god")
}
func1()
var func2= function(){
    console.log("hi")
}
func2()
var func3= (arr1, arr2)=> arr1.concat(arr2)
console.log(func3([1,2], [3,4,5]))

var newarr= new Array (6,7,8,9,10,11,12,13,14)
console.log(newarr[newarr.length-1]);
// console.log(newarr.splice(2,8));
// newarr.length=15
console.log(newarr);
newarr.forEach(function(Element,index){
    console.log(`${index} : ${Element}`); 
})
newarr.forEach((Element,index)=> console.log(`${Element} = ${index}`))
let str=`sdfgh
jktyui`
console.log(`hellow. ${2+4} wolrd`);

