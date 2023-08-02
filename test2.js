const getUniqueArray = (nums) =>{
    let j = 0;
    let uniqueValues = [];
    for(let i=0;i<nums.length;i++){
        let flag = 0;
        for(let j=0;j<i;j++){
            if(nums[i] === nums[j]){
                flag = 1;
                break;
            }
        }
        if(flag === 0){
            uniqueValues.push(nums[i]);
        }
    }

    return uniqueValues;

}

let exampleArray = [1,1,2,2,3,3,1,2,4,5,4,6,6,4];
let uniqueArray = getUniqueArray(exampleArray);
console.log(uniqueArray);
console.log(uniqueArray.length);



// Check if a word is a palyndrome:


function checkPalindrome(userString){
    let reversedString = '';
    
    for(let i=userString.length-1;i>=0;i--){
        reversedString += userString[i];
    }
    
    if(userString.split(" ").join("") === reversedString.split(" ").join("")){
        return `The word or sentence, "${userString}", is a palindrome`;
    }
    else{
        return `The word or sentence, "${userString}", is not a palindrome`;
    }
}
// let exampleString = 'hello world';
// console.log('hello world length: ',exampleString.length);
// console.log(exampleString.split(" ").join(""));


console.log(checkPalindrome('may a moody baby doom a yam'));
console.log(checkPalindrome('Okay'));






