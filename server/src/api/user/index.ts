export default {
  resolvers: require('./user.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('user/user.graphql'),
  model: require('../../entity/User'),
};
