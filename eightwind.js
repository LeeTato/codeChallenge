// You have an 8-wind compass, like this:
// You receive the direction you are facing (one of the 8 directions:
// N, NE, E, SE, S, SW, W, NW) and a certain degree to turn
//  (a multiple of 45, between -1080 and 1080); positive means clockwise, 
//  and negative means counter-clockwise.
// Return the direction you will face after the turn.

// Examples

// "S",  180  -->  "N"
// "SE", -45  -->  "E"
// "W",  495  -->  "NE"
// Northeast (NE), 45°, halfway between north and east, is the opposite of southwest.
// Southeast (SE), 135°, halfway between south and east, is the opposite of northwest.
// Southwest (SW), 225°, halfway between south and west, is the opposite of northeast.
// Northwest (NW), 315°, halfway between north and west, is the opposite of southeast

function degToCompass(num){
    const val =  Math.floor((num / 45) + 0.5);
    const arr = ["N","NE","E", "SE","S","SW","W","NW"];
    return arr[(val % 8)]
}
console.log(degToCompass(90))