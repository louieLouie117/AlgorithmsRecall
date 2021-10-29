# Wednesday April 28----------------------------
# find the needle in the hayStack
def find_needle(hayStack):
    for i in range(len(hayStack)):
        print(hayStack[i])
        if hayStack[i] == "needle":
            print("found the needle at position", i)
            found = 'found the needle at position ' + str(i)
            return found
    # your code here
    


# Thursday April 29----------------------------
import math

def litres(time):
    water = 0.5
    litresDrinked = time * water
    value = math.floor(litresDrinked)
    print(value)
    return value

#  Friday April, 30-----------------------------
# number of people in the bus
def number(bus_stops):
    peopleIn = 0
    peopleOut = 0
    peopleInBus = 0
    for i in range(len(bus_stops)):
        peopleOut =  peopleOut + bus_stops[i][1]
        print("out:", peopleOut)
        
        peopleIn = peopleIn + bus_stops[i][0]
        print("in:", peopleIn)   
        
        peopleInBus = peopleIn - peopleOut
    print("people", peopleInBus)
    return peopleInBus
        
    