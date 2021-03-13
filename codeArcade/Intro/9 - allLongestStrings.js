function allLongestStrings(inputArray) {
  return inputArray.filter(e => e.length == (Math.max(...inputArray.map(e => e.length))))  
}
