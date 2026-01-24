// Q1. let use karke ek variable banao jisme tumhara name ho, phir console me print karo.

let fullName = "Ravi Kashyap";
console.log(fullName);

// Q2. const use karke PI banao aur uski value change karke error dikhao.

const PI = 3.14;
console.log(PI);

// Q3. Ek string, number aur boolean banao aur unka typeof print karo.

let str = "Ravi";
let a = 20;
let istrue = true;

console.log(typeof(str));
console.log(typeof(a));
console.log(typeof(istrue));

// Q4. Ek variable banao jisme null ho aur typeof check karo. Output kya aaya?
let  c =  null;
console.log(typeof(c));


// Q5. "100" string ko number me convert karke usme 50 add karo.
let hundred =  Number("100")
let add = hundred + 50;
console.log(add);
console.log(typeof(hundred));

// Q6. true ko number me convert karo aur output print karo.
let True = Number(true)
console.log(typeof(True));


// Q7. Do numbers lo aur >, <, === ka use karke compare karo.

let x = 10;
let y = 20;
let z = "10";
console.log(x > y);
console.log(x < y);
console.log((  x === z));


//8. Check karo ki "5" == 5 aur "5" === 5 ka output kya hai (code likho).

console.log("5" == 5);
console.log("5" === 5);

// Q9. prompt() se user ka age lo aur console me print karo.
// let Name =  prompt();
// console.log(Name);


// Q10. confirm() use karke user se poochho “Are you sure?” aur result print karo.
// let isSure = confirm("Are you sure?");

// Q11. Age input lo aur if-else se check karo user adult hai ya nahi.
// let age = prompt();
// if(age> 18){
//     console.log("You are adult");
// } else {
//     console.log("tum bacche ho abhi");
    
// }



// Q12. Upar wale question ko ternary operator se likho.
// let age = prompt();
// console.log(age > 18? "you are adult" : "you are child");



// Q13. User ke age aur hasID variable ke base pe access allow/deny karo.
// let age = prompt();
// let hasID = True;
// if(age > 18 && hasID){
//     console.log("you are allowed"); 
// }else{
//     console.log("you are not allowed");    
// }



// Q14. for loop se 1 se 10 tak numbers print karo.
for(let i=1; i<=10; i++){
    console.log(i);
    
}


// Q15. while loop se 10 se 1 tak reverse print karo.
let i=10;
while (i >= 1) {
    console.log(i);
    i--;
    
}


// Q16. do-while loop se ek number kam se kam 1 baar print karao.
let j = 2;
do {
    console.log(i);
    j++
    
} while (j <= 3);

// Q17.// for loop use karke 1 se 20 tak sirf even numbers print karo.

let k = 2;
for(k=2; k<=20; k++){
    if (k%2 == 0 ) {
        console.log(k);
        
    }
}


// Q18.for loop use karke kisi bhi number ka table print karo
// (Example: 5 ka table).

let l = 5;
for(l=5; l<=50; l++){
    if (l%5 == 0 ) {
        console.log(l);
        
    }
}


// Q19.for loop use karke 1 se 50 tak numbers print karo,
// lekin 3 ke multiple ko skip karo (continue use karo).

let m = 1;
for(m=1; m<=50; m++){
    if (m%3 == 0 ) {
         continue;
        
    }else{
        console.log(m);
        
    }
}

// Q20.for loop me jab number 25 aaye, loop ko wahi stop kar do (break use karo).

 
for(let n=1; n<=30; n++){
    if (n===25) {
        break;
    }  
        console.log(n);
        
}


// Q21.switch use karke day number (1–7) ko day name me convert karo.
let day =   3;
switch(day){
    case 1:
    console.log("monday");
    break;
    
    case 2:
    console.log("tuesday");
    break;
    
    case 3:
    console.log("wednesday");
    break;
    
    case 4:
    console.log("thursday");
    break;
    
    case 5:
    console.log("friday");
    break;
    
    case 6:
    console.log("Saturday");
    break;
    
    case 7:
    console.log("Sunday");
    break;

    default:
        console.log("invalid date");
        
    

}

 

// Q22.switch use karke simple calculator banao
// (+, -, *, /).

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let operator = prompt("Enter operator (+, -, *, /)");

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     console.log("Result:", result);
//     break;

//   case "-":
//     result = num1 - num2;
//     console.log("Result:", result);
//     break;

//   case "*":
//     result = num1 * num2;
//     console.log("Result:", result);
//     break;

//   case "/":
//     if (num2 === 0) {
//       console.log("Error: Division by zero not allowed");
//     } else {
//       result = num1 / num2;
//       console.log("Result:", result);
//     }
//     break;

//   default:
//     console.log("Invalid operator");
// }


// Q23.Ek function banao jo 2 numbers le aur unka sum return kare.

// let e = Number(prompt("Enter first num"));
// let f = Number(prompt("Enter second num"));


// function  addtwo() {
//     let addtwonum = e+f;
//     return console.log(addtwonum);

    
    
// }

//  addtwo();



// Q24.Ek function banao jo number le aur bataye even hai ya odd.

// let g = Number(prompt("Enter a Number"))

// function CheckEvenOdd(){
//     if (g%2 == 0) {
//         console.log(g + " your number is Even");
        
//     } else {
//         console.log(g + " your number is odd");
        
//     }
// }

// CheckEvenOdd();



 

// Q25.Ek function banao jo number le aur bataye positive, negative ya zero.
// let h = Number(prompt("Enter a Number"))

// function review(){
//      if (h>0) {
//         console.log("your number is positive");
        
//      }if (h<0) {
//         console.log("your number is negative");
//      } if(h== 0) {
//         console.log("your number is zero");
        
//      }
// }

// review();



// Q26.Function expression use karke square of a number nikalo.
let v = 9
function square(){
    sq = v*v;
    console.log("square of " +v +" is "+ sq);
    
}

square();

// Q27.for loop use karke 1 se 100 tak:

// 3 ke multiple → "Fizz"

// 5 ke multiple → "Buzz"

// dono ke → "FizzBuzz"

 

function  num(d) {
    if ( d%3 == 0 && d%5 == 0) {
        console.log("FizzBuzz");
        
    }if (d%3 == 0) {
        console.log("Fizz");
        
    }if ( d%5 == 0 ) {
        console.log(" Buzz");
        
    } else {
        console.log("check again");
        
    }
}

num(30);







