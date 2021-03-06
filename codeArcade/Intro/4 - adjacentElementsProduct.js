function adjacentElementsProduct(inputArray) {
    
 let largest
 
 for (let i = 0; i < inputArray.length-1; i++) {
     //console.log(i)
     if (i == 0) {
         largest = inputArray[i] * inputArray[i+1];        
     } 
    
     else if (inputArray[i] * inputArray[i+1] > largest) {
         largest = inputArray[i] * inputArray[i+1]
     }
 }
 
 return largest
}
