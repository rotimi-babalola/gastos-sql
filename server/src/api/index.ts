import user from './user/user.index';
import expense from './expense/expense.index';
import * as merge from 'lodash.merge';

export default {
  typeDefs: [
    user.typeDefs,
    expense.typeDefs,
  ].join(' '),
  resolvers: merge({}, user.resolvers, expense.resolvers),
  context: {
    models: {
      user: user.model.default,
      expense: expense.model.default,
    },
  },
};
