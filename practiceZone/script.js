// // � Practice Zone
// // 1. Print 1 to 10 using  for
// for (let  i = 1;  i <=10;  i++) {
//      console.log(i);
     
    
// }



// // 2. Print even numbers between 1 to 20
// let j = 2;
// while (j <= 20) {
//      if (j%2 == 0) {
//         console.log(j); 
//      }
//     j++
// }



// // 3. Reverse a string using loop
// let str = "Ravi kashyap"
// let reverse = ""
// for(let i= str.length - 1; i>= 0; i--){
//     reverse +=  str[i];
// }
// console.log(reverse);




// // // 4. Sum of all numbers in an array
// // let arr = [2, 5, 3, 7, 9, 6];

// // let sum = arr.reduce((ac, val) => {
// //     return( ac += val);
// // },0)

// // console.log(sum);




// // 5. Print all characters of a name using for-of
// let name = "Ravi"
// for(let names of name){
//     console.log(names);
    
// }




// // 6. Print all object keys and values using for-in
// let user = {name: "Ravi", age:23};
// for(let keys in user){
//     console.log(keys,":", user[keys]);
    
// }

// // 7. Use continue to skip a specific number
// for(let i=0; i<= 10; i++){
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
    
// }
// // 8. Guess number game – use  while to ask until correct

let secret = 7;         
let guess = 0;         

while (guess !== secret) {
  guess = Number(prompt("Guess the number:"));

  if (guess < secret) {
    console.log("Too low ");
  } else if (guess > secret) {
    console.log("Too high ");
  } else {
    console.log("Correct");
  }
}




// // 9. Pattern: Print triangle using  *
// // 10. Sum of even numbers in an array using forEach


// let plus = 0;
// let res = arr3.forEach((val) => {
//       if(val%2 == 0){
//         plus +=  val;
       
//       }
     
// })
//  console.log(plus);
        





// let arr3 = [4, 2,70, 6, 57];
// for( let i of arr3){
//     console.log(i);
    
// }
