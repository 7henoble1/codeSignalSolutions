function almostIncreasingSequence(sequence) { 

 let size = sequence.length
 let invalidObjects = 0;
 

 for (let i = 0; i < size; i++){     
    if (sequence[i] <= sequence[i-1]) { // checks if adjcent array positions contains numbers that are strictly increasing 
        invalidObjects++;               
        if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1] || invalidObjects > 1 ) return false;  // checks if non-adjacent array positions contains numbers 
    }           
 }  
 return true;  
}
