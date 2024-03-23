// function run(x){
//     return x * 5 ;
// };
// console.log(run(2));


// // immediately invoked function expression
// (
//     function(){
//         console.log("this is life")
//     }
// )();

// (
//     function() {
//         console.log(5*4)
//     }
// )()



// console.log(run(5));

// const what = function(y) {
//     return y * 4 ;
// };
// console.log(what(3));

// const nothing = function(z) {
//     return z * 5 ;
// };
// console.log(nothing(6));

// console.log(`${100} mmk `);

// const results = ["what","nothing"];
// const resultsIndex = 0 ;
// // let resultIndex = 0;

// // const area = function(width,breadth){
// //     let result = width * breadth;
// //     results[resultIndex++] = {width,breadth,area:result};
// //     return `${result} sqft` 
// // };

// // area(400,5);
// // area(400,6);
// // area(400,7);
// // area(400,9);

// // console.table(results);

// const results = [] ;
// let resultsIndex = 0 ;
// const area = function ( width, breadth) {
//     const result = width * breadth ;
//     results[resultsIndex++] = {width, breadth, area: `${result} sqft`};
//     return  ;
// };
// area(35,20);
// area(23,34);
// area(43,23)
// console.table(results);


// const rates = {
//     usd : 2100 ,
//     sgd : 1500 ,
//     eur : 2300
// };

// const exchangeMMKToCurrency = function(amount, currency) {
//     const currencyRate = rates[currency];
//     return `${amount*currencyRate} mmk`;
// };
// console.log(exchangeMMKToCurrency(200,"sgd"));


// let taxRate = 0.05 ;

// const totalPriceWithTax = function(productName,amount,price) {
//     const totalPrice = amount*price;
//     tax = totalPrice*taxRate;
//     return (totalPrice+tax)+ "-"+productName+ "-" + amount ;
// };
// console.log(totalPriceWithTax("apple",5,500))

// const currencyRate = {
//     usd : 2100,
//     sgd : 1500,
//     eur : 2300
// };
// const exchanageMMK = function(amount,rate){
//     const currency =currencyRate[rate];
//     MMK = amount * currency;
//     return MMK;
// };
// console.log(exchanageMMK(1000,"usd"))



const fruits = {
    banana : 500,
    apple : 400,
    orange : 600
}
const totalPrice = function(productName,amount,tax) {
    const price = fruits[productName];
    const productPrice = price*amount;
    const taxPrice = productPrice* (tax/100);
    const totalPrice = productPrice+taxPrice;
    return productName + " - " + `${totalPrice} mmk` + " - " + `amount: ${amount}`;
}
console.log(totalPrice("banana",5,5));
console.log(totalPrice("apple",8,4));
console.log(totalPrice("orange", 6, 5));

