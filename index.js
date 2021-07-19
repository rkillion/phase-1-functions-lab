// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block>=42) {
        return block-42;
    } else {
        return 42-block;
    }
}

function distanceFromHqInFeet(block) {
    let numOfBlocks = distanceFromHqInBlocks(block);
    return numOfBlocks*264;
}

function distanceTravelledInFeet(startingBlock,endingBlock) {
    let distance = startingBlock >= endingBlock ? startingBlock - endingBlock : endingBlock - startingBlock;
    return distance*264;
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start,destination);
    if (distanceInFeet>=2500) {
        return "cannot travel that far";
    } else if (distanceInFeet>=2000) {
        return 25;
    } else if (distanceInFeet<400) {
        return 0;
    } else {
        distanceInFeet -= 400;
        return distanceInFeet*.02;
    }
}