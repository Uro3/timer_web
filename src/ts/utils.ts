const addZero = (num: number) => ('0' + num).slice(-2);

const calculateMillsecond = (hour: number, minute: number, second: number) => {
  return ((hour * 60 * 60) + (minute * 60) + second) * 1000;
};

export default {
  addZero,
  calculateMillsecond,
};
