// let peoples = [
//     [1, 'Alice', 25, 'Female', 'Township A'],
//     [2, 'Bob', 30, 'Male', 'Township B'],
//     [3, 'Charlie', 20, 'Male', 'Township C'],
//     [4, 'Diana', 35, 'Female', 'Township D'],
//     [5, 'Eve', 28, 'Female', 'Township E']
// ];
// for (let i in peoples){
//     const index = peoples[i];
//     for ( let y of index){
//         console.log(y)
//     }
// }


let people = [
    [1, 'Alice', 25, 'Female', 'Township A'],
    [2, 'Bob', 30, 'Male', 'Township B'],
    [3, 'Charlie', 20, 'Male', 'Township C'],
    [4, 'Diana', 35, 'Female', 'Township D'],
    [5, 'Eve', 28, 'Female', 'Township E']
];

// Loop through each row
for (let i = 0; i < people.length; i++) {
    // Access the current row
    let row = people[i];
    
    // Loop through each column within the current row
    for (let j = 0; j < row.length; j++) {
        // Access the current element
        let element = row[j];
        
        // Print or do something with the current element
        console.log(element);
    }
}
