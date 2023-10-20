export const generateRandomNumber = (limit) => {
  const randomElem = Math.floor(Math.random() * limit);
  return randomElem;
};

export const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const isPrime = (Number) => {
  const sqrtNum = Math.floor(Math.sqrt(Number));
  let prime = Number !== 1;
  for (let j = 2; j < sqrtNum; j += 1) {
    if (Number % j === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

export const generateProgression = (lengthProgression, limitStep) => {
  const firstNumb = generateRandomNumber(50);
  const result = [firstNumb];
  const stepProgr = generateRandomNumber(limitStep);
  for (let j = 0; j < lengthProgression - 1; j += 1) {
    const nextElem = result[j] + stepProgr;
    result.push(nextElem);
  }
  return result;
};

export const calculate = (operation, number1, number2) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
  return result;
};

export const findGcd = (x, y) => {
  let resX = x;
  let resY = y;
  while (resX && resY) {
    if (resX > resY) {
      resX %= resY;
    } else {
      resY %= resX;
    }
  }
  resX += resY;
  return resX;
};
