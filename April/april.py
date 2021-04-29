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