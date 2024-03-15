// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!

  const hrStr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];

  const minStr = [
    "o'clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  if (time === "0:00") {
    return "midnight";
  }
  if (time === "12:00") {
    return "midday";
  }

  const hour = Number(time.split(":")[0]);
  const minutes = Number(time.split(":")[1]);

  if (minutes <= 30) {
    if (minutes == 30) {
      return `half past ${hrStr[hour - 1]}`;
    }
    if (minutes == 0) {
      return `${hrStr[hour - 1]} ${minStr[minutes]}`;
    }
    return `${minStr[minutes]} past ${hrStr[hour - 1]}`;
  } else {
    const remain = 60 - minutes;
    return `${minStr[remain]} to ${hrStr[hour]}`;
  }
}

module.exports = { convertTimeToWords };
