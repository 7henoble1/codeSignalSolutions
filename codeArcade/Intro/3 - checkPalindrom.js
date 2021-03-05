function checkPalindrome(inputString) {
   
    let right = inputString.slice(0,Math.ceil(inputString.length/2));
    let left = inputString.slice(Math.floor(inputString.length/-2));    
    let reverse = left.split("").reverse().join("");   
    
    if (right == reverse) {
        return true;
    }   
    
    else {
        return false;
    }
    
}
