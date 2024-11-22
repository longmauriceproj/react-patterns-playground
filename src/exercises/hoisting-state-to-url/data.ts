import { faker } from '@faker-js/faker';

faker.seed(123);

const people = faker.helpers.multiple(
  () => ({
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    title: faker.person.jobTitle(),
    email: faker.internet
      .email({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      })
      .toLowerCase(),
    role: faker.person.jobType(),
  }),
  { count: 20 },
);

export { people };
