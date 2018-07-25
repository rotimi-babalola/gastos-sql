import { validate } from 'class-validator';
import expenseIndex from '../expense/expense.index';

const getUser = async (_, { input }, ctx) => {
  const user = await ctx.models.user.findOne(input.id);
  if (!user) {
    throw new Error('User does not exist');
  }
  return user;
};

const getUsers = async (_, __, ctx) => {
  console.log(ctx.request.headers, 'context');
  const users = await ctx.models.user.find({});
  return users;
};

const signUp = async (_, { input }, ctx) => {
  const user = new ctx.models.user();
  user.username = input.username;
  user.password = input.password;
  user.email = input.email;

  const errors = await validate(user);
  if (errors.length > 0) {
    throw new Error('Please ensure the email is a proper email and/or the password is at least 6 characters');
  } else {
    const newUser = await user.save();
    return newUser;
  }
};

module.exports = {
  Query: {
    getUser,
    getUsers,
  },
  Mutation: {
    signUp,
  },
  User: {
    expenses: async (user, _, ctx) => {
      const userExpenses = ctx.models.expense.find({
        user: user.id,
      });
      return userExpenses;
    },
  },
};
