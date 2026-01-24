// Q1.   1 se 10 tak ke numbers print karo for loop se.

for (let  i = 0;  i <= 10;  i++) {
     console.log(i);
     
    
}



// Q2.
// User se ek number lo aur uska table print karo (1 to 10).

// let j =  Number(prompt("enter a number"))
// for(let i=1; i<=10; i++){
//      console.log(i*j);
     

// }




// 🟡 MEDIUM (2 Questions)
// Q3.

// 1 se 50 tak sirf even numbers print karo.
 for( let i=2; i<=50; i++){
     if (i%2 == 0) {
          console.log(i);
     }
 }


//  Q4.

// User se ek number lo aur check karo:

// agar number 3 ka multiple hai → "Fizz"

// agar 5 ka multiple hai → "Buzz"

// dono ka hai → "FizzBuzz"

// (Loop use karna hai)

// let n = Number(prompt("Enter a num: "));
// for(let i=1; i<=n; i++){
//      let m = n*i;
//      if (m%3 == 0 && m%5 == 0 ) {
//           console.log("FizzBuzz");
//           break;
//      } else if (m%3) {
//           console.log("Fizz");
//           break 
//      } else {
//           console.log("Buzz");
//           break;
          
//      }
// }




// 🔴 HARD (2 Questions)
// Q5.

// User se ek number lo (n)
// 1 se n tak sab numbers ka sum nikaalo using loop.

// let n = Number(prompt("Enter a num: "));
// let i = 1;
// let sum = 0;
// while (i<=n) { 
//      sum += i;
//       i++; 
// }
// console.log(sum);




// Q6.

// User se ek number lo
// aur check karo wo prime number hai ya nahi.

let num = Number(prompt("Enter a number"));
let count = 0;

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}

if (count === 2) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}
