const getRandomNumber = (maxNumber = 100) => {
  const number = Math.trunc(Math.random() * maxNumber);
  return number;
};

export default getRandomNumber;
