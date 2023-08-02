// console.log('Hello world');

// for(let i=10;i>=0;i--){
//     if(i === 0){
//         console.log('blast off');
//     }
//     else{
//         console.log(i);
//     }

// }

const greeting = 'Hello, world!';
 
function sendGreeting(name) {
  let greeting;
  if(name) {
    greeting = `Hello, ${name}!`;
    return greeting;
  } else {
    return greeting;
  };
};
 
console.log(sendGreeting());


// Inventory Question:

const Inventory = [
    {
        item: "scented candle",
        stock: 48
    },
    {
        item: "oil diffuser",
        stock: 80
    },
    {
        title: "tea kettle",
        stock: 16
    }
]
console.log(Inventory.length);

let allNames = [];

Inventory.forEach((element)=>{
    allNames.push(element.stock);
});
console.log(allNames);
console.log(allNames[0]);
const lowStock = [];
for(let i=0;i<Inventory.length;i++){
    if(Inventory[i].stock <50){
        lowStock.push(Inventory[i]);
    }

}
console.log(lowStock);



// expected result: 4

const uniqueLength = (array) =>{
    if(array.length === 0){
        return 0;
    }
    let uniqueNumbers = [];
    uniqueNumbers.push(array[0]);
    // uniqueNumbers.push(array[0])
    for(let i=1;i<array.length;i++){
        if(array[i] in uniqueNumbers){
        }
        else{
            uniqueNumbers.push(array[i]);
        }
    }
    console.log(uniqueNumbers.length);
    return uniqueNumbers;
}
console.log('UNIQUE');
function uniqueLength_2(numArray){
    if(numArray.length === 0){
        return 0;
    }
    let i=0;
    let j=1;
    let uniqueList = [];
    // uniqueList.push(numArray[i]);
    while(j<numArray.length){
        if(numArray[i] != numArray[j]){
            i++;
            numArray[i] = numArray[j];
            j++;
        }
        else{
            j++;
        }
    }
    // console.log('Unique: ',uniqueList);
    return i+1;
}
const exampleArray = [1,1,2,7,88,4,2,1]

console.log('RESULTS:')
// Should return 5
const result = uniqueLength_2([1,1,2,3,4,5,5]);
console.log(result);
// Should return 1
const result2 = uniqueLength_2([1,1,1,1]);
console.log(result2);
//Should return 5
const result3 = uniqueLength_2([1,1,2,7,88,4,2]);
console.log(result3);//1 2 7 88 4 

// console.log(uniqueLength(exampleArray));


function findUniqueNumbers(arr) {
    const uniqueNumbers = [];
  
    // Iterate through the input array
    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i];
  
      // Check if the number is already in the uniqueNumbers array
      if (uniqueNumbers.indexOf(currentNumber) === -1) {
        // If it's not present, add it to the uniqueNumbers array
        uniqueNumbers.push(currentNumber);
      }
    }
  
    return uniqueNumbers;
}
  
// Test the function
const inputArray = [1, 2, 2, 3, 2, 5, 2, 6, 6];
const uniqueNumbers = findUniqueNumbers(inputArray);
console.log('ANOTHER UNIQUE: ',uniqueNumbers); // Output: [1, 2, 3, 5, 6]
console.log(uniqueNumbers.length);

let testArray = []
console.log(testArray.indexOf())

