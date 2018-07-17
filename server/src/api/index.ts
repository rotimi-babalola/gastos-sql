import user from './user';
import * as merge from 'lodash.merge';

export default {
  typeDefs: [
    user.typeDefs,
  ].join(''),
  resolvers: merge({}, user.resolvers),
  context: {
    models: {
      user: user.model,
    },
  },
};
