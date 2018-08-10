import * as merge from 'lodash.merge';
import user from './user/user.index';
import expense from './expense/expense.index';
import { verifyPassword, signToken } from '../utils/login';

export default {
  typeDefs: [
    user.typeDefs,
    expense.typeDefs,
  ].join(' '),
  resolvers: merge({}, user.resolvers, expense.resolvers),
  context: (req) => ({
    ...req,
    models: {
      user: user.model.default,
      expense: expense.model.default,
    },
    utils: {
      verifyPassword,
      signToken,
    },
  }),
};
