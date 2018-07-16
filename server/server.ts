/* eslint no-console: 0 */
import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
type Query {
  description: String
}
`;

const resolvers = {
  Query: {
    description: () => 'This is the API for a simple blogging application',
  },
};

export const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
