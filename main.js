// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.




// We will have three arrays, one for each line. Each array will list stations on that line as the values of the arrays.
// Begin with travel through one array only...
// Two variables will be required, startStation & endStation.
// find indexOf startStation & endStation
// if startStation < endStation loop forward ++
// if startStation > endStation loop backward --
// Loop will add each iteration to a string, used to print stops passed
// Loop will add to a count variable with each iteration used to print total stops

// Expand for cross - line jurneys....
// MTA Object containing three array's, one for each line?


var lineN = [
  "Times Square",
  "34th",
  "28th",
  "23rd",
  "Union Square",
  "8th"
];

var lineL = [
  "8th",
  "6th",
  "Union Square",
  "3rd",
  "1st"
];

var line6 = [
  "Grand Central",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor Place"
];

var startStation = "8th";
var endStation = "Times Square";

var startIndex = lineN.indexOf(startStation);
var endIndex = lineN.indexOf(endStation);

var tripMessage = "You must travel through the following stops on the N line: ";
var tripCounter = 0;

if(startIndex < endIndex) {

  for(var i = startIndex; i <= endIndex; i += 1) {
    tripMessage += lineN[i] + " ";
    tripCounter += 1
  }
} else {

  for(var i = endIndex; i >= startIndex; i -= 1) {
    tripMessage += lineN[i];
    tripCounter += 1
  }
}

console.log(tripMessage);
console.log(tripCounter + " stops in total");
