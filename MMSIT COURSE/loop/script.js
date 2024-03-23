// 5 times loop
for (var i = 1; i <= 5; i++) {
  console.log(i);
  console.log("*");
  console.log("* *");
  console.log("* * *");
  console.log("* * * *");
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
  console.log("*");
  console.log("* *");
  console.log("* * *");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    continue; //continue is skip
  }
  console.log("*");
  console.log("* *");
  console.log("* * *");
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 2 || i === 4) {
    continue;
  }
  console.log("*");
  console.log("* *");
  console.log("* * *");
}

// for (
//     let i = (function () {
//         console.log("first statement")
//         return 1;
//     })();
//     (function () {
//         const condition = i <= 5;
//         console.log("second statement", condition);
//         return condition;
//     })();
//     i = (function () {
//         i = i + 1;
//         console.log("third statment", i);
//         return i;
//     })())
//     {
//     console.log(i, "code block loop")
// }

for (
  let i = (function () {
    console.log("First Statement");
    return 1;
  })();
  (function () {
    const what = i <= 5 ;
    console.log( "second statement", what);
    return what;
  })();
  i = (function () {
    i = i + 1;
    console.log(i, "third statment");
    return i;
  })()
) {
  console.log(i, "loop");
}

// ARRAY
const fruits = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "kiwi",
    "watermelon",
    "pineapple",
    "mango",
    "blueberry",
];

for (let i of fruits ){
    console.log(i)
}

for (let i in fruits) {
    console.log(i,fruits[i])
}

for ( let i = 1; i < fruits.length; i++) {
    const noArray = fruits[i];
    console.log(i,noArray)
}


// object
const student = {
    name : "John Doe",
    gender : "male",
    age : 20, 
    township: "Anytown",
    phone : "123-456-789"
}
for (let i in student ){
    console.log(i,student[i])
}
for ( let i = 1 ; i < student.length ; i++){
    console.log(student[i])
}


let people = [
    { id: 1, name: 'Alice', age: 25, gender: 'Female', township: 'Township A' },
    { id: 2, name: 'Bob', age: 30, gender: 'Male', township: 'Township B' },
    { id: 3, name: 'Charlie', age: 20, gender: 'Male', township: 'Township C' },
    { id: 4, name: 'Diana', age: 35, gender: 'Female', township: 'Township D' },
    { id: 5, name: 'Eve', age: 28, gender: 'Female', township: 'Township E' }
];
for (let i of people){
    // console.log(i.name, i.id);
    // console.log()
    for ( let key in i){
        console.log(key,i[key])
    }
};

// let peoples = [
//     [1, 'Alice', 25, 'Female', 'Township A'],
//     [2, 'Bob', 30, 'Male', 'Township B'],
//     [3, 'Charlie', 20, 'Male', 'Township C'],
//     [4, 'Diana', 35, 'Female', 'Township D'],
//     [5, 'Eve', 28, 'Female', 'Township E']
// ];
// for (let i in peoples){
//     const index = people[i];
//     console.log(i);
//     for ( let y in index){
//         console.log(index[y],y)
//     }
// }