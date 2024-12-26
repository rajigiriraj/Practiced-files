
function calculateTip(amount, rating) {
    switch(rating){
        case "terrible":
            var tip=(0/100)*amount;
            console.log(`tips: ${tip}`);
            break;
        case "poor":
            var tip=(5/100)*amount;
            console.log(`tips: ${tip}`);
            break;
        case "good":
            var tip=(10/100)*amount;
            console.log(`tips: ${tip}`);
            break;
        case "great":
            var tip=(15/100)*amount;
            console.log(`tips: ${tip}`);
            break;
        case "excellent":
            var tip=(20/100)*amount;
            console.log(`tips: ${tip}`);
            break;
          
    }
    //your code here
  }
calculateTip(200,"terrible");
calculateTip(200,"great");
calculateTip(200,"poor");
calculateTip(200,"good");
calculateTip(200,"excellent");
//Use SpecRunner to check the Test Cases.
