import user from './user/user.index';
import * as merge from 'lodash.merge';

console.log(merge({}, user.resolvers));

export default {
  typeDefs: [
    user.typeDefs,
  ].join(' '),
  resolvers: merge({}, user.resolvers),
  context: {
    models: {
      user: user.model.default,
      bar: 'hello',
    },
  },
};
