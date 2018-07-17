// import { User } from '../../entity/User';

const getUsers = async (_, __, ctx) => {
  // ctx.models.User.find();
  const users = await ctx.models.user.default.find({});
  return users;
};

module.exports = {
  Query: {
    getUsers,
  },
};

// const foo = {
//   Query: {
//     getUsers,
//   },
// };

// export default foo;
