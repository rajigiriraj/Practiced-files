// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.
// otherAngle(30, 60) return -> 90


// Write the function to find the otherAngle obtained.
function otherAngle(a, b) {
    var angle=180-(a+b);
    return angle;
}
console.log(otherAngle(60,90))
//Use SpecRunner to check the Test Cases.