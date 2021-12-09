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
// function factorial(num) {
//   var product = 1;
//   for (var i = num; i > 0; i--) {
//     product *= i;
//   }
//   console.log(product);
// }

// factorial(3);

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.

// function comSum(nums1, nums2) {
//   var combinations = [];
//   nums1.forEach(function (num1) {
//     nums2.forEach(function (num2) {
//       combinations.push(num1 + num2);
//     });
//   });
//   console.log(combinations);
// }

// comSum([1, 2, 3], [4, 5, 6, 7, 8]);

// function selectEven(strings) {
//   var result = [];
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index += 1;
//   });

//   console.log(result);
// }

// selectEven(["a", "b", "c", "d", "e", "f"]);

// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function (number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });

//   console.log(currentMax);
// }

// max([5, 4, 8, 1, 2]);

// function descending(numbers) {
//   var result = [];
//   for (var i = numbers.length - 1; i >= 0; i--) {
//     result.push(numbers[i]);
//   }
//   console.log(result);
// }

// descending([1, 3, 5, 7]);

// function comSum(nums1, nums2) {
//   var combinations = [];
//   nums1.forEach(function (num1) {
//     nums2.forEach(function (num2) {
//       combinations.push(num1 + num2);
//     });
//   });
//   console.log(combinations);
// }
// comSum([1, 2, 3], [4, 5, 6, 7, 8]);

// function bubbleSort(array) {
//   var n = array.length;
//   var i = 0;
//   while (i < n - 1) {
//     var j = 0;
//     while (j < n - i - 1) {
//       if (array[j] > array[j + 1]) {
//         var temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//       j += 1;
//     }
//     i += 1;
//   }
//   console.log(array);
// }

// bubbleSort([13, 5, 6, 8, 19, 31, 21, 1, 0]);

// function mergeSort(array, l, m, r) {
//   var n1 = m - l + 1;
//   var n2 = r - m;

//   var L = [];
//   var R = [];
// var n1;
// var n2;

//   for (var i = 0; i < n1; i++) {
//     L[i] = array[l + 1];
//   }
//   for (var j = 0; j < n2; j++) {
//     R[j] = array[m + 1 + j];
//   }

//   var k = 0;
//   var n = 0;

//   var p = l;
//   while (k < n1 && n < n2) {
//     if (L[k] <= R[n]) {
//       array[p] = L[k];
//       k++;
//     } else {
//       array[p] = R[n];
//       n++;
//     }
//     k++;
//   }

//   while (k < n1) {
//     array[p] = L[k];
//     k++;
//     p++;
//   }

//   while (n < n2) {
//     array[p] = L[n];
//     n++;
//     p++;
//   }
//   console.log(array);
// }

// mergeSort([13, 5, 6, 8, 19, 31, 21, 1, 0])

//1) Write a function that takes in an array of numbers and returns its sum.

// function sum(nums) {
//   var sum = 0;
//   nums.forEach(function (num) {
//     sum = sum + num;
//   });
//   console.log(sum);
// }

// sum([1, 2, 3, 4]);

// function smallestString(strings) {
//   var smallestString = strings[0];
//   var smallString;

//   strings.forEach(function (string) {
//     if (string.length < smallestString.length) {
//       smallestString = string;
//     }
//   });

//   console.log(smallestString);
// }

// smallestString(["banana", "to", "apple", "cat"]);

//  ---Reverse Function ---
// function reverse(nums) {
//   var reverse = [];
//   for (var i = nums.length - 1; i > -1; i--) {
//     reverse.push(nums[i]);
//   }
//   console.log(reverse);
// }

// reverse([1, 2, 3, 4]);

// ---4)Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.---

// function aWords(words) {
//   var finalWords = [];

//   words.forEach(function (word) {
//     if (word[0] === "a") {
//       finalWords.push(word);
//     }
//   });
//   console.log(finalWords.length);
// }
// var arr2 = ["apple", "cat", "two", "angry"];
// aWords(arr2);

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

//  --- toString() and split()---

// var strings = ["volleyball", "basketball", "badminton", "soccer"];
// var word = "";

// strings.forEach(function (string) {
//   word = word + string;
// });

// console.log(word.split(""));

// --sort with ascending order--
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// --7) Write a function that takes in an array of numbers and returns the two smallest numbers.
// var nums = [3, -4, 5, 0, 10];
// var smallestNumber = nums[0];
// var smalletstIndex = 0;
// var i = 0;

// nums.forEach(function (num) {
//   if (num < smallestNumber) {
//     smallestNumber = num;
//     smalletstIndex = i;
//   }
//   i++;
// });

// nums.splice(smalletstIndex, 1);
// var secondSmallest = nums[0];
// nums.forEach(function (num) {
//   if (num < secondSmallest) {
//     secondSmallest = num;
//   }
// });

// console.log(smallestNumber, secondSmallest);

// Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

// var nums = [0, 100, 20, 301]; //5

// var strings = nums.toString();
// var charsOfStrigs = strings.split("");

// console.log(charsOfStrigs);
// var count = 0;
// charsOfStrigs.forEach(function (item) {
//   if (item === "0") {
//     count++;
//   }
// });

// console.log(count);

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// var words = ["apple", "orange", "grapes", "applesauce"];
// var word = "";
// words.forEach((element) => {
//   word = element + word;
// });

// var count = 0;
// var charsOfStrigs = word.split("");
// charsOfStrigs.forEach((element) => {
//   if (element === "a") {
//     count++;
//   }
// });
// console.log(count);

// console.log("-----");

// for (var i = 0; i < words.length; i++) {
//   for (var j = 0; j < words[i].length; j++) {
//     if (letter === "a") {
//       var letter = words[i][j];
//       count++;
//     }
//   }
// }
// console.log(count);

(var x = { y: [1, 2, 3] });

console.log(x);
