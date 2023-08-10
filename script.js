//Example :-Print the odd numbers in an array
var arr = [12, 13, 14, 15, 16];
var result = [];
//function is used to extract the values(odd array)
function odd(arr)
{
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd(arr));
//Example :-Print the odd numbers in an array
var arr = [12, 13, 14, 15, 16];
var result = [];
var odd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd(arr));
//IIFE (Immediately Invoked Function Expression)
//Example :-Print the odd numbers in an array
(function odd(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([12, 13, 14, 15, 16]);

//Arrow Function (ES6)
//Example :-Print the odd numbers in an array
const od = (arr) => {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(od([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//2. TO UPPER CASE 
//NORMAL
function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(toTitleCase("hi I am harish"));
  //ARROW FUNCTION 
  const g = (str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(g("hi i am harish"));
  //IIFE (Immediately Invoked Function Expression)
  (function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  })
  console.log(["hi i am harish"]);
// 3. Sum of an array
const myNums = [1,2,3,4,5];
let sum = 0;
myNums.forEach( num => {
  sum += num;
})
console.log(sum) // 15
//4.Palindrome
const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str1 = String(el);
   let i = 0;
   let j = str1.length - 1;
   while(i < j) {
      if(str1[i] === str1[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr1 => {
   return arr1.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr1));