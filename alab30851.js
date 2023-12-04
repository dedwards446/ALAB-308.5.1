/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))
  console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))

/** Part 1 */

const numbers = [1, 2, 3, 4, 5];
const strings = ['say', 'hello', 'in', 'the', 'morning'];

  // Take an array of numbers and return the sum.
  function sumOfNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }


// Take an array of numbers and return the average.
function averageOfNumbers(numbers) {
    const sum = sumOfNumbers(numbers);
    return sum / numbers.length;
  }


// Take an array of strings and return the longest string.
function longestString(strings) {
    let longest = '';
    for (const current of strings) {
      if (current.length > longest.length) {
        longest = current;
      }
    }
    return longest;
  }


// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(strings, length) {
    const result = [];
    for (const str of strings) {
      if (str.length > length) {
        result.push(str);
      }
    }
    return result;
  }
  
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbersRecursively(n) {
    if (n > 0) {
      printNumbersRecursively(n - 1);
      console.log(n);
    }
  }




console.log("Sum of numbers:", sumOfNumbers(numbers));
console.log("Average of numbers:", averageOfNumbers(numbers));
console.log("Longest string:", longestString(strings));
console.log("Strings longer than 3:", stringsLongerThan(strings, 3));


console.log("Numbers 1 to 5 using recursion:");
printNumbersRecursively(5);