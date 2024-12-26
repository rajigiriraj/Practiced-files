var a=9;
var b=11;

console.log(b)
let raji= "string"
let Raji= "Strings"

console.log(raji , Raji)
console.log(raji , typeof(Raji))

let divide= b/a
console.log(divide)

let modulo= b % a
console.log(modulo)

a-=3
let str="hi im \"raji\" how r u \"god\""
console.log(str)

let strng1= "asdfghjktyui"
strng1+="rajiii"
console.log(strng1)
console.log(strng1.length)

let new_str=strng1[strng1.length-3]
console.log(new_str)

var arr=[["first"],["second",1,2,3],["third"]]
console.log(arr[1][3])
console.log(arr.pop())
console.log(arr.shift())
arr.unshift("raji")
console.log(arr)
function reusable(x,y){
    console.log(x*y)
}
reusable(5,3)

var scope=15
function global(){
    if(scope==15){
        console.log("equal")
    }
}
global();
 
var list=[1,2,3,4,5]
function queue(list,item){
    list.push(item)
    list.shift()
    return list
}
console.log("before:" + JSON.stringify(list))
console.log(queue(list,6))
console.log("after : "+ JSON.stringify(list))

function placefix(val){
    var place=""
    switch(val){
        case 1:
            place="aranthai"
        break;    
        case 2:
            place="switzerland"
        break   
        default:
            place="none" 
    }
    return place
}
console.log(placefix(3))
var num=-2
console.log(num>0 ? "positive" : num<0 ? "negative" : "zero") 