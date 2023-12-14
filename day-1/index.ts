import { sample1, day1part1 } from './samples/sample';

const calibrate = (input: string): number => {
  const values = input.split('\n').map((str) => {
    const numbersStr = str.match(/\d/g);

    if (!numbersStr || numbersStr.length === 0) return;
    else if (numbersStr.length === 1)
      return Number(numbersStr[0] + numbersStr[0]);
    else {
      const first = numbersStr[0];
      const last = numbersStr[numbersStr.length - 1];
      return Number(first + last);
    }
  });

  return values.reduce((acc, curr) => acc! + curr!, 0)!;
};

console.log(calibrate(sample1));
console.log(calibrate(day1part1));
