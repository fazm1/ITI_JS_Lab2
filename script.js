function question1(arr1 =[]){
    arr1.sort(function(a, b){return a - b});
    console.log(arr1);
}

function question2(sentence){
    var arr = sentence.split(" ")
    max = arr[0].length;
    indexOfMax = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i].length > max){
            max=arr[i].length;
            indexOfMax = i;
        }
    }
    console.log(arr[indexOfMax]);
}

function question3(number){
var isPrime= true;
   if (number > 1){
        for(var i = 2; i <= number/2; i++){
            if(number % i == 0){
                console.log(number+" is not prime")
                return false
            }

        }
        console.log(number+" is prime")
        return true
   }
   else {
    console.log(number + " is not prime")
   }


}

function question4(amount, coins = []){
    var ans = []
    var i = 0
    var j = 0;
    while(i < coins.length){
        if(amount - coins[i]>=0){
            amount = amount - coins[i];
            ans[j++] = coins[i];
        }
        else if(amount == 0){
            break;
        }
        else if (amount - coins[i]<0){
            i++
        }
    }
    console.log(ans);
}


var q1 = question1(new Array(-3, 8, 7, 6, 5, -4, 3, 2, 1));
var q2 = question2("Web Development Tutorial");
var q3 = question3(4);
var q4 = question4(46, [25,10,5,2,1]);