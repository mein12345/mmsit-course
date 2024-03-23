// let memberType = "normalMember";
// let originalPrice = 100;
// let totalPrice = 0;

// if (memberType === "normalMember"){
//     totalPrice += 100*0.95;
// }else if (memberType === "goldMember"){
//     totalPrice += 100*0.9;
// }else if (memberType === "sliverMember"){
//     totalPrice += 100*0.85;
// }else if (memberType === "platinumMember"){
//     totalPrice += 100*0.8;
// }else {
//     totalPrice = originalPrice;
// }

// console.log(totalPrice)

// let tax = 0.05;
// function cost(productCost,tax){
//     taxCostPerProduct = productCost * tax;
//     return productCost + taxCostPerProduct; 
// }
// console.log(cost(30000,tax))

// let currentYear = 2024;
// function findAge(currentYear,birthDate){
//     currentAge = currentYear - birthDate;
//     return currentAge;
// }
// console.log(findAge(currentYear,2000));
// console.log(findAge(currentYear,2002));

// let markSub = {
//     mm : 50 , 
//     en : 45 ,
//     math : 64 , 
//     che : 74 ,
//     phy : 73 ,
//     bio : 93 ,
// }
// console.log(markSub.mm)
// console.log(markSub.en);
// console.log(markSub.math);
// console.log(markSub.che)
// console.log(markSub.phy)
// console.log(markSub.bio);
// console.log(markSub["bio"]);
// for (i in markSub){
//     console.log(i,markSub[i])
// }
const name = "Mg Mg";
let age = 15;
let township = "kyauk myaung";

let pocketMoney = 200;
let orange = 50;
pocketMoney -= orange
console.log(pocketMoney);

const bag= ["myanmar book", "english book" , "Bio book"];
console.log(bag);

let pen = false;

let canMgMgFriSmoke = true;
let canMgMgsmoke = false;

const information = {
    name : name,
    age : age ,
    township : township,
    canSmoke : true,
};
const student1 = {
    name: "Kyaw Kyaw",
    age : 17 ,
    township : "haling",
    canSmoke : true,
};
const student2 = {
    name: "Mya Mya",
    age : 15 ,
    township : "sanchaung",
    canSmoke : false,
};
const student3 = {
    name: "Aye Aye",
    age : 20 ,
    township : "kyauk",
    canSmoke : false,
};
const students = [information,student1,student2,student3];
console.log(students);
console.table(students);
console.log(typeof township);
console.log(typeof name);
console.log(typeof canSmoke);
console.log(students);

let num = 1;

console.log(num+3);
console.log(5-num);
console.log(3*3);
console.log(10/2);
console.log(5%15);
console.log(3**3);

let num1 =num++;
console.log(num);
console.log(num1)

function run(){
    console.log("Hello");
}
run()

function triangle(){
    console.log("*");
    console.log("**");
    console.log("***");
    console.log("****");
    return "I'm running";
}
triangle()
console.log(triangle());

let length = 5; let width = 4; let heigh = 3;
function volume (length,width,heigh){
    volume= length*width*heigh;
    return volume;
}
console.log(volume(length,width,heigh))