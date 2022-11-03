const returnFirstTwoDrivers = function (array) {
  return [array[0], array[1]];
};

const returnLastTwoDrivers = function (array) {
  return [array[array.length - 2], array[array.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
  return function (fare) {
    return n * fare;
  };
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(arrayOfDrivers, function1) {
  return function1(arrayOfDrivers);
}
