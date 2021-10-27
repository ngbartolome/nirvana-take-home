const sum = (values) => values.reduce((a, b) => a + b, 0);

export const getAverage = (values) => Math.floor(sum(values) / values.length);

export const getMinValue = (values) => Math.min(...values);

export const getMaxValue = (values) => Math.max(...values);

export default {
  getAverage,
  getMinValue,
  getMaxValue,
};
