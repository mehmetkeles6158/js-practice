function squareIt(num) {
  return num * num ;
}

console.log(squareIt(5));

// //forEach Loop

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });

function allSums (nums, k) {
  var count = 0;
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        count ++;
      }
    }
  }
  console.log(count);
}

allSums([1,2,3,4,5,6,7,8],7);

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//  Find the sum of all the multiples of 3 or 5 below 1000.
console.log("--------------------------");
var sum = 0;
for (var i = 1; i < 1000; i++) {
  if ( i % 3 === 0 || i % 5 === 0) {
    // console.log(i);
    sum = sum + i ;
    
  }
}
console.log(sum);