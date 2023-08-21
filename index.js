// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
  let hq = 42;
  return Math.abs(pickUpLocation - hq);
}

function distanceFromHqInFeet(feet) {
  let result = distanceFromHqInBlocks(feet);
  return result * 264;
}

function distanceTravelledInFeet(start, destination) {
  let startBlock = start * 264;
  let endBlock = destination * 264;

  return Math.abs(startBlock - endBlock);
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
