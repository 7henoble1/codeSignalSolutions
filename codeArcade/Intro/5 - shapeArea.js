function shapeArea(x) {
 let area = 0; 
 for (let i = x ; i > 0; i--) {
     i == x ? area += (i*2)-1 : area += ((i*2)-1) * 2              
 }  
 return area;
}
