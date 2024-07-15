/* FIRST LECTURE
FIRST LECTURE
FIRST LECTURE */

// let fullName = "Ankit Anand"
// console.log(fullName);
// console.log(typeof fullName);


            // ABOUT OBJECTS

// const student = {
//     fullName : "Ankit Anand",
//     age : 24,
//     cgpa : 8.66,
//     isPass : true,
// };

// student["fullName"] = "Sanskruti Mali"

// console.log(student.isPass);
// console.log(student["fullName"]);

// const profile = {
//     userId : "@shradhaKhapra",
//     name : "Shradha Khapra",
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     isverified : true,
// };

// console.log(profile);
// console.log(typeof profile["userId"])


/* SECOND LECTURE
SECOND LECTURE
SECOND LECTURE */

            // OPERATORS

    /*  ARITHMETIC OPERATORS -- +, -, *, /
            modulus -- %
            exponential -- **
            increment -- ++
            decrement -- --


        ASSIGNMENT OPERATOR
            =, +=, -=, *=, /=
            a += 1 means a = a + 1 

        COMPARISON OPERATOR
            ==, ===, !=, !==, >, <, >=, <=

            === ---> equal to & type
            !== ---> not eaual to and type

        LOGICAL OPERATORS
            && ---> logical and
            || ---> logical or
            !  ---> logical not
    */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " b = ", b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b);


// let a = 5;
// let b = "5";

// console.log("a == b", a == b);
// console.log("a === b", a === b);


// <------------------- Conditional Statement ------------------>

// let age = 12;

// if (age >= 18) {
//     console.log("You can vote");
// }else{
//     console.log("you CANNOT vote");
// }

// let result = age > 18 ? "adult" : "not adult";  //Ternary operator : ? -- question mark sign
// console.log(result);

// let number = prompt("Enter a number")

// if(number % 5 === 0) {
//     console.log(number, " is multiple of 5")
// } else {
//     console.log(number, " is not a multiple of 5.");
// }




/* THIRD LECTURE
    THIRD LECTURE
    THIRD LECTURE */

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// let i = 1; 
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// }while(i <= 5);


// let str = "Ankit";

// for(let i of str){
//     console.log(i);
// }

// const student = {
//     fullName : "Ankit Anand",
//     age : 24,
//     cgpa : 8.66,
//     isPass : true,
// };

// for (const key in student) {
//     console.log("key = ", key, " value = ", student[key]);
// }

// <------------------------------STRING------------------------>

// let str = "Ankit Anand";

// length = str.length;
// console.log(str[0]);
// console.log(`the length of string ${str} is ${length} `);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim())  // --> to remove the white spaces from starting and end;


// let str1 = "Ankit";
// let str2 = "Anand";

// let str = "aaaaabbbbbccccc"

// console.log(str1.slice(2, 4));
// console.log(str1.concat(str2));

// console.log(str.replace("a", "D"));     // --> replaces only one time
// console.log(str.replaceAll("a", "D"));  // --> replaces all

// console.log(str.charAt(3));

// let name = prompt("Enter Your Name : ");
// console.log(`Your Username is @${name}${name.length}`)


/* LECTURE 4
    LECTURE 4
    Lecture 4 */

// <-----------------------ARRAYS-------------------->

// let name = ["Ankit", "Sanskruti", "Samarth", "Aniruddha"];
// let marks = [98, 97, 89, 93, 87];

// console.log(name);
// console.log(marks);
// console.log(marks[0]);

// name.push("Anand");
// console.log(name);
// name.pop()
// console.log(name);

// console.log(marks.toString());

// let joint = marks.concat(name);
// console.log(joint);

// console.log(name.slice(1, 3));

// marks.splice(2, 0, 78, 64)
// console.log(marks); 



/* LECTURE 5
    LECTURE 5
    Lecture 5 */

// <--------------------------- FUNCTION ------------------------->


// function myFunction(){
//     console.log("Ankit Anand, How are you?");
// }

// myFunction();

// function userinput(msg){
//     console.log(msg)
// }

// let inp = prompt("Enter your message : ");
// userinput(inp);

//  <-------------------ArrowSum ---------------------->

// const multiply = (a, b) => {
//     return a * b;
// }

// console.log(multiply(5, 4));

// function countVowel(str) {
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowel("xyz");

// <------------------- For EACH ----------------------->

// let arr = ["Agra", "Patna", "Aayodhya", "Kolkata", "Chennai"];

// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// arr.forEach((val) => {
//     console.log(val);
// });

// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr);
// });

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val) => {
//     console.log(val**2);
// })

// <-------------------------- MAP ------------------------->

// Map is used to create a duplicate array

// let newArr1 = arr.map((val, idx) => {
//     console.log(val, idx)
// });


// // filter is used to create a new array with some filter.

// let newArr2 = arr.filter((val) => {
//     return val%2 === 0;
// });

// console.log(newArr2);

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(output);



/* LECTURE 6
    LECTURE 6
    Lecture 6 */



// <----------------DOCUMENT OBJECT MODEL ------------------>

// console.dir(window.document);
// console.log(window.document);

// <------------------------ DOM MANIPULATION --------------------->

            // <------------------- getElementBy ---------------------->

// let heading = document.getElementById("heading");
// console.log(heading);

// let headings = document.getElementsByClassName("heading");
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.log(parahs);


            // <----------------- querySelector ----------------->


// let firstEl = document.querySelector("div"); //1st p tag element, also anything can be taken tag, id or class
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// let allElClass = document.querySelectorAll(".heading");
// console.dir(allElClass);

// let allElId = document.querySelectorAll("#heading");
// console.dir(allElId);

// console.log(firstEl.tagName);
// console.log(firstEl.innerText); 
// console.log(firstEl.innerHTML);

// let firsth = document.querySelector("h1"); //1st p tag element, also anything can be taken tag, id or class
// console.dir(firsth);

// console.log(firsth.textContent);  // used to show the text that are hidden on the website


// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + " from Apna College";

// let divs = document.querySelectorAll("div");
// // console.log(divs);

// let idx = 1;

// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// divs[0].innerText = "Ankit Anand";
// divs[1].innerText = "Roll no. 432005";
// divs[2].innertext = "PRN - 22010787";