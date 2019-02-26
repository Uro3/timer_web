const addZero = (num: number) => ('0' + num).slice(-2);

const calculateMillsecond = (minute: number, second: number) => {
  return ((minute * 60) + second) * 1000;
};

export default {
  addZero,
  calculateMillsecond,
};
