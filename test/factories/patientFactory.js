import faker from 'faker';

export const getMockData = ({
  deductible = faker.datatype.number(),
  stop_loss = faker.datatype.number(),
  oop_max = faker.datatype.number(),
}) => ({
  deductible,
  stop_loss,
  oop_max,
});

export default { getMockData };
