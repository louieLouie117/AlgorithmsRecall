// Wednesday April 28----------------------------------- 
// find the needle in the hayStack
function findNeedle(hayStack) {
    console.log(hayStack)
    for(i = 0; i < hayStack.length; i++ ){
      console.log(hayStack[i])
      
      if(hayStack[i] === "needle"){
        console.log("found the the needle at postion", i)
        return "found the needle at position " + i;
      }
      
    }
  
  // your code here
}


// Thursday April 29-----------------------
// how much water
function litres(time) {
  
    let water = 0.5
    
    let litresDrinked = time * water
    let value = Math.floor(litresDrinked);
    
    console.log(value)
    
    
    return value;
  }