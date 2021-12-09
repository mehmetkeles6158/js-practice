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