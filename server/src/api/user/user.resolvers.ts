import { validate } from 'class-validator';

const getUsers = async (_, __, ctx) => {
  const users = await ctx.models.user.find({});
  return users;
};

const createUser = async (_, { input }, ctx) => {
  const user = new ctx.models.user();
  user.username = input.username;
  user.password = input.password;
  user.email = input.email;

  const errors = await validate(user);
  if (errors.length > 0) {
    throw new Error('Validation errors please check your request');
  } else {
    const newUser = await user.save();
    return newUser;
  }
};

module.exports = {
  Query: {
    getUsers,
  },
  Mutation: {
    createUser,
  },
};
