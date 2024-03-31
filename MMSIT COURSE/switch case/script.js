{
    console.log("*")
    console.log("* *")
    console.log("* * *")
}

// const x = false   ? "what" : "nothing";

// console.log(x);

// const x = 0;
// switch (x <= 3) {
//     case 1 :
//     console.log("*")
//     break;
//     case 2: console.log("**")
//     break;
//     case 3: console.log("***")
//     break;
// };

let x = 0;
// while (x <= 5){
//     console.log("*")
//     console.log("**")
//     console.log("***")
//     x++
// };


do{
    console.log("*")
    console.log("**")
    console.log("***")
    x++;
}while(x <= 5)


const employee = {
    firstName : "Maria",
    secondName : "SUSU"
}
delete employee.firstName;

const points = [ 34, 15, 2, 52, 19, 56, 30, 57];

let total = 0;
// for (let i of points){
//     total += i;

// }
console.log(total)
for (let x=0; x<points.length; x++){
    total+=points[x];
  
}
console.log(total)