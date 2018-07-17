const getUsers = async (_, __, ctx) => {
  const users = await ctx.models.user.find({});
  return users;
};

const createUser = async (_, { input }, ctx) => {
  const user = new ctx.models.user(input);
  // user.username = input.username;
  // user.password = input.password;
  // user.email = input.email;
  const newUser = await user.save();
  console.log(newUser, 'new');
  return newUser;
};

module.exports = {
  Query: {
    getUsers,
  },
  Mutation: {
    createUser,
  },
};
