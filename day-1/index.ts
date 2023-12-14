import { getNumberFromString } from './utilities';

import { sample2, day1part1 } from './samples/sample';

const regex = /(zero|one|two|three|four|five|six|seven|eight|nine|\d)/g;
const calibrate = (input: string): number => {
  const values = input.split('\n').map((str) => {
    const numStrArr = str.match(regex);

    if (!numStrArr || numStrArr.length === 0) return 0;
    else if (numStrArr.length === 1) {
      let num = numStrArr[0];
      if (Number.isNaN(Number(num))) {
        num = getNumberFromString(num).toString();
      }

      return Number(num + num);
    } else {
      let first = numStrArr[0];
      if (Number.isNaN(Number(first))) {
        first = getNumberFromString(first).toString();
      }
      let last = numStrArr[numStrArr.length - 1];
      let remaining = last[last.length - 1] + str.split(last)[1];

      if (remaining.match(regex)?.length! > 0) {
        last = remaining.match(regex)![0];
      }
      if (Number.isNaN(Number(last))) {
        last = getNumberFromString(last).toString();
      }
      return Number(first + last);
    }
  });
  return values.reduce((acc, curr) => acc + curr, 0)!;
};

console.log(calibrate(day1part1));
