// Progression #1: Greatest of the two numbers

var greatestOfTwoNumbers=(n1,n2)=>{
    if(n1>n2){
        return n1;
    }
    else{
        return n2;
    }
}
console.log(greatestOfTwoNumbers(5,7));

// Progression #2: The lengthy word

var i=0;
var maxlength= "";
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
words.forEach(function(word){
   maxlength= word.length > maxlength.length ? word:maxlength;
})
/*
for(i=0;i<words.length;i++){
    if(words[i].length > maxlength.length){
        maxlength=words[i];
    }
    maxlength=words[i].length>maxlength.length ? words[i]:maxlength;
}*/
console.log("the lenthy word is "+ maxlength);

// Progression #3: Net Price

const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
var sum=0;
function netPrice(prices){
    for(var i=0;i<prices.length;i++){
        sum+=prices[i];
    }
    return sum
}
console.log(netPrice(prices));

// Progression #3.1 (Bonus): A generic sum() function

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add(Arr){
    let sum1=0;
    Arr.forEach(item=>{
        if(typeof item==="number"){
            sum1+=item;
        }
        else if(typeof item==="string"){
            sum1+=item.length;
        }
        else if(typeof item==="boolean"){
            sum1+=item ? 1 : 0;
        }
    })
    return sum1;
}
console.log(add(mixedArr));

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(items){
    var sum2=0;
    items.forEach(item =>{
        sum2+=item;
    })
    var average=sum2/ items.length;
    return average;
}
console.log(midPointOfLevels(numbersAvg));

// Progression 4.2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arrs){
    var sum3=0;
    arrs.forEach(arr =>{
        sum3 += arr.length;
    })
    var averagelenth= Math.ceil(sum3/ arrs.length);
    return averagelenth;
}
console.log(averageWordLength(wordsArr));

// Progression #4.3 (Bonus): A generic avg() function

const mixedArr2 = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(arrs2){
    var sum4=0;
    var avgmixedarr=0;
    arrs2.forEach(data=>{
        if(typeof data ==="string"){
            sum4+= data.length;
        }
        else if(typeof data==="number"){
            sum4+=data;
        }
        else if (typeof data==="boolean"){
            sum4+=data? 1:0;
        }  
    })
    return avgmixedarr=sum4/ arrs2.length;;
}
console.log(avg(mixedArr2));

// Progression #5: Unique arrays

const wordsUnique = [
    'bread',
    'jam',
    'milk',
    'egg',
    'flour',
    'oil',
    'rice',
    'coffee powder',
    'sugar',
    'salt',
    'egg',
    'flour'
  ];
function uniqueArray(arrays){
    
}