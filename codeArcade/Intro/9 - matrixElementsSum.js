function matrixElementsSum(matrix) {
    let sum=0;  
    
    for ( let x=0; x < matrix[0].length; x++) {
        for ( let y=0; y < matrix.length; y++) {             
             if (matrix[y][x] == 0) {                 
                 break;   
             }  
             sum+=matrix[y][x];            
        } 
    }
    return sum;
}
