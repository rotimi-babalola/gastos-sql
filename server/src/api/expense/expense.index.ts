export default {
  resolvers: require('./expense.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('expense/expense.graphql'),
  model: require('../../entity/Expense'),
};
