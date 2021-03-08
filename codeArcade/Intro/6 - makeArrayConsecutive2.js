function makeArrayConsecutive2(statues) {
     statues.sort((a,b) => {return a-b;});
     count = 0;
     for (let i = statues[0]; i < statues[statues.length-1]; i++) {
         !statues.includes(i) ? count++ : null         
     }     
     return count;
}
