const generateRandomNumber = (min, max) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  const randomElem = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
  return randomElem;
};

export default generateRandomNumber;
