// var fruits = ['apple','banana','orange','kiwi']

// // while

// var i = 0;
// while(i < fruits.length){
//   console.log(fruits[i]);
//   i += 1 ;
// }

// //forEach Loop

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });

// //for

// for( var i =0 ; i < fruits.length; i ++) {
//   console.log(fruits[i]);
// }

// Write a method that prints out every number from 1 to 100.
// for (var i = 0; i < 101; i++) {
//   console.log(i);
// }

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// for (var i = 1; i < 100; i += 2) {
//   console.log(i);
// }
// Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// function fiftyFive(nums) {
//   var fiftyFives = [];
//   nums.forEach(function (num) {
//     if (num === 55) {
//       fiftyFives.push(num);
//     }
//   });
//   console.log(fiftyFives.length);
// }

// fiftyFive([10, 3, 55, 20, 55, 39, 55]);

// function everyString(strings) {
//   var array = [];
//   strings.forEach(function (string) {
//     array.push(string, "awesomesauce");
//   });
//   console.log(array);
// }
// everyString(["a", "b", "c"]);

// var itemAmounts = { chair: 5, table: 2 };
// itemAmounts["chair"] -= 2;
// console.log(itemAmounts);

// --- Factorial with while loop
// function factorial(num) {
//   var product = 1;
//   while (num > 0) {
//     product *= num;
//     num -= 1;
//   }
//   console.log(product);
// }

// factorial(5);

// --- Factorial with for loop---
function factorial(num) {
  var product = 1;
  for (var i = num; i > 0; i--) {
    product *= i;
  }
  console.log(product);
}

factorial(3);
