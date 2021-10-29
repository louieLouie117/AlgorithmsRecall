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


  // Friday April, 30-----------------------------
  // number of people in the bus
  var number = function(busStops){
    let peopleIn = 0;
    let peopleOut = 0;
    let peopleInBus = 0;
    
    console.log("people in the bus",peopleInBus)
    
    
    for(let j = 0; j < busStops.length ; j++){
      currentStop = j + 1;
      
      console.log("getting off:",busStops[j][1])
      console.log("getting on:",busStops[j][0])
      
      peopleIn = peopleIn + busStops[j][0] 
      peopleOut = peopleOut + busStops[j][1]
      
      peopleInBus = peopleIn - peopleOut
      
    }
    
    console.log("people in last stop:", peopleInBus)
     
    return peopleInBus
    
    
    
    // Good Luck!
  }