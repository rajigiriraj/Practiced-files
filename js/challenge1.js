// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0


// Write the function to find the findDigit obtained.
let findDigit=(num,nth)=>{
    num= Math.abs(num);
    if(nth<=0){
        return -1;
    }
    let string_num= num.toString();
    if(num>string_num.length){
        return 0;
    }
    return parseInt(string_num[string_num.length-nth]);
}
console.log(findDigit(42, 5));
console.log(findDigit(123456, 3));
console.log(findDigit(-98765, 2));
console.log(findDigit(0, 1));
console.log(findDigit(12345, -1));
console.log(findDigit(987654321, 10));