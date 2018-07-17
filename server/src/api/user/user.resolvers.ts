const getUsers = async (_, __, ctx) => {
  const users = await ctx.models.user.find({});
  return users;
};

module.exports = {
  Query: {
    getUsers,
  },
};
