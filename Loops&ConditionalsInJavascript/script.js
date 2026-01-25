// 1️⃣ if

// Ek number lo, agar wo positive ho to print karo "Positive".
let i = 10;
if(i> 0){
    console.log("positive");
    
}



// Age lo, agar age 18 ya zyada ho to "Eligible".
let age = 18;
if ( age> 18) {
    console.log("eligible");
    
}



// Temperature lo, agar > 30 ho to "Hot" print karo.
let temp = 50;
if ( temp> 30) {
    console.log("Hot");
    
}



// 2️⃣ if–else

// Ek number lo, agar even ho to "Even", warna "Odd".
let num = 20;
if ( num %2 == 0) {
    console.log("Even");
    
} else {
    console.log("odd");
    
}




// Marks lo, agar >= 40 ho to "Pass", warna "Fail".

let marks = 80;
if ( marks >= 40) {
    console.log("Pass");
    
} else {
    console.log("fail");
    
}



// Password lo, agar "admin123" ho to "Login Success" warna "Wrong Password".
const Password = "admin123";
if ( Password == "admin123") {
    console.log("login succes");
    
} else {
    console.log("wrong password");
    
}


// 4️⃣ Ternary Operator

// Age >= 18 ? "Adult" : "Minor"
console.log(age>=18? "adult" : "minor");


// Number > 0 ? "Positive" : "Not Positive"
console.log(num>=18? "positive" : "negative");


// Marks >= 40 ? "Pass" : "Fail"
console.log(marks>=18? "pass" : "fail");




// 5️⃣ switch
// Number (1–7) → Day name print karo.
let number = 4;
switch ( 7) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("invalid days");
        break;
}



// Operator (+,-,*,/) → Calculator banao.
let a = 5;
let b = 4;
 
switch ( "%") {
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    case "%":
        console.log(a%b);
        break;
    
    default:
        console.log("invalid operator");
        break;
}




// Month number (1–12) → Month name print karo.
switch ( 11) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("febraury");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;

    default:
        console.log("invalid days");
        break;
}






// 6️⃣ for Loop
// 1 se 10 tak print karo.
for (let  i = 1;  i <=10;  i++) {
    console.log(i);
    
}

// 10 se 1 tak reverse print karo.
for (let  i = 10;  i >=1;  i--) {
    console.log(i);
    
}


// 1 se 50 tak ke even numbers print karo.
for (let  i = 1;  i <=50;  i++) {
    if ( i%2 == 0) {
        console.log(i);
        
    }
    
}



// 7️⃣ while Loop

// 1 se 5 tak print karo.
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
    
}



// User se number lo jab tak wo 0 na de.

// while (true) {
//     let num = Number(prompt("Enter a num: "))
//     if (num === 0) {
//         console.log("you win, program stopped");
//         break;
//     }
//     console.log("enter again", num);
    
// }



// Table of 5 print karo.
let Table = 1;
while (Table <= 10) {
    console.log(Table * 5 );
    Table++;
    
}



// 8️⃣ do...while

// 1 se 10 tak print karo.

// Password jab tak correct na ho tab tak poochte raho.

// Number lo jab tak negative na mile.

// 9️⃣ forEach

// Array ke sab numbers print karo.

// Array ke har element ko 2 se multiply karo.

// Names ke array me se sirf "Ravi" find karo.

// 🔟 for...in

// Object ke keys print karo.

// Object ke values print karo.

// Student object ka data print karo.

// 1️⃣1️⃣ for...of

// Array ke elements print karo.

// String ke har letter ko print karo.

// Array me total sum nikaalo.

// 1️⃣2️⃣ Recursion

// 1 se n tak print karo.

// n se 1 tak print karo.

// Factorial nikaalo.

// 1️⃣3️⃣ break

// 1 se 10 tak loop chalao, jab 5 aaye to break.

// Array me jab "stop" aaye to loop tod do.

// Table me jab 6 aaye to stop.

// 1️⃣4️⃣ continue

// 1 se 10 me se 5 skip karo.

// Sirf even print karo, odd skip karo.

// Array me "skip" word ko chhod ke baaki print karo.