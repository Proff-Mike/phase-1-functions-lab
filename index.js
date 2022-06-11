// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  let hqLocation = 42;
  if (distance >= hqLocation) {
    return distance - hqLocation;
  }
  else {
    return hqLocation - distance;
  }
}

// const hqLocation = 42;
// let pickUpLocation = 50;
// let NoOfBlocks = pickUpLocation - hqLocation;

// function distanceFromHqInBlocks (distance) {
//  distance = NoOfBlocks;
//  }

function distanceFromHqInFeet (distance)  {
  let everyBlockInManhattan = 264;
  return distanceFromHqInBlocks (distance) * everyBlockInManhattan;
}

function distanceTravelledInFeet (start, destination) {
  let everyBlockInManhattan = 264;
  let differenceInFeet = destination - start;

  if (destination > start)  {
    return differenceInFeet * everyBlockInManhattan;
  }
  else {
    return (start - destination) * everyBlockInManhattan;
  }
}

function calculatesFarePrice (start, destination)  {
  let everyBlockInManhattan = 264;
  let differenceInFeet;
  let price = 0

  if (destination > start)  {
    differenceInFeet = (destination - start) * everyBlockInManhattan
  }
  else {
    differenceInFeet = (start - destination) * everyBlockInManhattan
  }
  if (differenceInFeet <= 400)  {
    price = 0;
  }
  else if ( differenceInFeet > 400 && differenceInFeet <= 2000) {
    price = (differenceInFeet - 400) * 0.02
  } 

  else if (differenceInFeet > 2000 && differenceInFeet <= 2500) {
    price = 25
  }  
  else {
    price = "cannot travel that far";
  }
  return price
}




