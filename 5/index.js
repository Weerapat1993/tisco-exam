const data1 = [1, 2, 3, 2, 3, 4, 3, 2, 1];
const data2 = [1, 2, 3, 4, 3, 4, 5, 4, 3, 2, 3, 4, 3, 2, 3, 2, 1];

const input = data2;

let checkPiramid = 0;
let lastValue = 0;
let trend = "";

input.forEach((value) => {
  switch (trend) {
    case "down":
      if (lastValue > value) {
        trend = "down";
        console.log(lastValue, ">", value, "trend:", trend);
      } else {
        trend = "up";
        console.log(lastValue, ">", value, "trend:", trend);
      }
      break;
    case "up":
    default:
      if (lastValue < value) {
        trend = "up";
        console.log(lastValue, "<", value, "trend:", trend);
      } else {
        trend = "down";
        checkPiramid += 1;
        console.log(lastValue, "<", value, "trend:", trend, "piramid + 1");
      }
      break;
  }
  lastValue = value;
});

console.log("output :", checkPiramid);
