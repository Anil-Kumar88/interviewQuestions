//! 1. class definition and example.
/* class declared with the name which acts as a identifier. we can use the name to create the new object using the keyword new.*/

class vehicle {
  constructor(model, name) {
    (this.model = model), (this.name = name);
  }
  start = () => {
    console.log(`name of the vehicle is :${this.name}`);
  };
}
let audi = new vehicle(123, "sportz version");
audi.start();

//! 2. how to implement class inheritance in javascript.

/* class inheritance : it can be inherited by another class , and the new class can access all the properties of the parent class.
the object that initialize the child class can be access both the properties of the child as well as the parent.*/

class tractor {
    constructor(name,model) {
        this.name = name,
            this.model=model
    }
    start=()=> {
        console.log(this.name);
    }
    end = () => {
        console.log(this.model);
    }
}

class tiller extends tractor {
  dashboard = () => {
    console.log("iam child component");
  };
  start() {
    super.start();
      super.end();
      this.dashboard();
  }
}
swaraj = new tiller("mahindra", 595);
swaraj.start();
swaraj.end();

//! how to find the duplicate element in the array.
// by using the filter method.

const duplicatedArray = [10,10,20,20,20,30,50,80];
// const duplicate = duplicatedArray.filter((e, i, arr) => {return arr.indexOf(e) ===i });
const duplicate = duplicatedArray.filter((e, i, arr) => {return arr.indexOf(e) !==i });
console.log(duplicate);//pending
// if we use === then we get the unique values
// if we use !== then we get the duplicate values
//! there are multiple methods to do the duplicates that are forEach,spread operator,reduce,indexOf() this are present in the geek for geeks.

//! count the duplicate array.
const arr = ["one", "two", "one", "one", "two", "three"];

const count = arr.reduce((accumulator, value) => {
  return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
}, {});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);

//! check given number is integer or not.
const validate = -10;
console.log(!isNaN(validate)); // isNaN() will see that the given value is number or not.

//! explain the difference between the object.freeze and const.
// the const is the javascript variable that it cannot reinitialize and declared so the values cannot alter in the const.

// Object.freeze() this will not allow the object properties to get updated or if we try to reinitialize the values.
// Object.isFrozen()  this method will check that the object is locked(frozen).if frozen it will give the true or else it will give false.

//!  how to sort an number.
const sorting = [100, 30, 30, 50, 60, 80];
console.log(sorting.sort((a, b) => { return a - b }));

//!  how to sort an string.
const str = ["apple", "Orange", "pipeapple", "butterfruit"];
let strsort = str.sort();
console.log(strsort) 

//! how to find the unique elements in the given array.
let unique = [10, 20, 60, 50, 80, 50, 60, 50];
let uniVal = unique.filter((e, i, arr) => { return arr.indexOf(e) === i });
console.log(uniVal);

//! how to find the unique values from the array in the sorted order.
const arr1 = [10, 20, 30, 10, 20, 30, 40, 50, 60];
const uarr1 = arr1.filter((e, i, arr) => { return arr.indexOf(e) === i }).sort((a, b) => { return a - b });
console.log(uarr1);

//! how to find the maximum value in the given array. 
const marr = [10, 20, 30,200, 50, 60, 80, 90];
let maxVal =
    marr.sort((a, b) => {
        return a - b;
    });
console.log(maxVal[maxVal.length - 1]);
    
//! another method.
const numToFindMax = [1020, 40, 80, 9000, 7, 90];
let maxiValue = numToFindMax.reduce((acc, lv) => { return acc > lv ? acc : lv });
console.log(maxiValue);

//! find the minimum value  in the  given array.
const marr1 = [10, 20, 30, 1,200, 50, 60, 80, 90];
let maxVal1 = marr1.sort((a, b) => {
  return b - a;
});
console.log(maxVal1[maxVal1.length - 1]);

//! how to find the average number in the given array.
 
const avg = [10, 20, 30, 50, 60];
const avgNum = avg.reduce((a, b) => { return a + b });
console.log(avgNum / avg.length);

//! how to capitalize the first character in the string or how can you uppercase the first character of the given string.

let firstStr = ["anil", "madappa", "manoj", "shreyas"];
for (let st of firstStr) {
    st = st.charAt(0).toUpperCase()+st.substring(1);
    console.log(st);
}

//! how to make sentence out of given array.

const word = ["you", "guys", "really", "working", "hard"];
const sentence = word.join("-");
console.log(sentence);

//! how to check if any array contains any elements of another array.

const empId = [10, 20, 30, 50, 60, 40, 80];
const retiredEmpId = [40, 10, 20];
let result = empId.some((e) => { return retiredEmpId.includes(e) });
console.log(result);

//! given two string how can you check that the given string is anagram.

// let input1 = prompt("enter the string1");
// let input2 = prompt("enter the string2");
// let str1 =[...input1].sort().join('');//we used spread operator to convert the string into the array. then sorting, without the array conversion sort can't be done because sort works in only array methods. then joining the splited string of array into the single word.
// let str2 = [...input2].sort().join('');
// console.log(str1==str2 ? "it is anagram":"it is not a anagram");

//! another method by using the function.
let string1 = "mary";
let string2 = "army";
function anagram(string1,string2) {
    var a = string1.toLowerCase();
    var b = string2.toLowerCase();
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    return a === b;
}
let checkAnagram = anagram(string1, string2);
console.log(checkAnagram);

//! how can you extract few fields from the given json object and form a new array.

const input = {
    "students": [
        {
            name: "anil",
            id:10
        },
        {
            name: "kumar",
            id:11
        },
        {
            name: "madappa",
            id:12
        }
    ]
}

const results =input.students.map((val)=>{return `iam ${val.name} and my id is ${val.id}`})
console.log(results);

//! filter the object based on certain condition and return the corresponding object

const filtering = {
    "students": [
        {
            firstname: "anil",
            lastname: "kumar",
            id:1,
        },
        {
            firstname: "madappa",
            lastname: "GP",
            id:2,
        },
        {
            firstname: "manoj",
            lastname: "kumar",
            id:3,
        }
    ]
}
let emp = filtering.students.filter((val) => {
    return val.id> 1 ? val.firstname : "";
})
console.log(emp);

//! how to check the variable passed in an array or not.
const arrayOrNot = [10, 20, 454, 5, "anil"];
console.log(Array.isArray(arrayOrNot));
 
//! given array of strings,reverse each word in the sentence.

let rev = "hello bengaluru how are you";
console.log(rev.split("").reverse().join(""));

//! what is IIFEs (immediately invoked function expressions).

// normal function.
function normal() {
    console.log("iam normal function")
}
normal();
// iife function.
(function iife() {
  console.log("iam iife function");
}());

//! how to empty an array.

//pop method.
// const empty1 = [10, 20, 30, 50, 60];
// while (empty1.length>0) {
//     empty1.pop();
// }
// console.log(empty1);

// by splice.
// console.log(empty1.splice(5));

//! write a function to check that the string is palindrome or not.

function checkPalindrome(str) {
    str = str.replace(/\w/g, "").toLowerCase();
    return str== str.split("").reverse().join("");
}
console.log(checkPalindrome("madam"));

//! how to sort and reverse an array without changing the original array.
const originalArray = [10, 20, 30, 50, 60, 5];
const sortReverse = originalArray.slice(0).reverse();
console.log(sortReverse);
console.log(originalArray);

//! data types.
// two types => 1.primitive  2. non-primitive.
// 1. boolean,string,undefined,number,symbol,bigInt,null.
// 2. object,array,function.

//! what is spread operator.
//!create ann object in javascript.

var contact = {
  name: "anil",
  id: 124,
  preferences: {
    pagecount: 100,
    defaultsort: "lastName",
  },
  contact_mechanism: [
    {
      phone: 9686047120,
      email: "kumar.anil@gmail.com",
    },
    {
      phone: 9686042222,
      email: "kumar.asdfg@gmail.com",
    },
  ],
};



















