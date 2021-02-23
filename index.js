// Code your solution in this file!
// let hq = 42

function distanceFromHqInBlocks (someValue) {
    if (someValue > 42) {
        return someValue-42
    }

    else {
        return 42 - someValue
    }
}

function distanceFromHqInFeet(someValue) {
    if (someValue > 42) {
        return (someValue-42) * 264
    }

    else {
        return (42 - someValue) * 264
    }
}


function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start-destination) * 264 
    }
    if (start < destination) {
        return (destination - start) * 264 
    }
}

function calculatesFarePrice (start, destination) {
    let feet = Math.abs(start-destination) * 264
    if (feet <= 400) {
        return 0
    }
    else {
    if (feet > 400  && feet < 2000) {
        return ((feet-400)*.02)
    }

    else if (feet > 2000 && feet < 2500) {
        return 25
    }

    else (feet >= 2500); {
        return "cannot travel that far"
    }
    }
}

     