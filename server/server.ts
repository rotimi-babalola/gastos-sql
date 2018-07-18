import { GraphQLServer } from 'graphql-yoga';
import gqlServerConfig from './src/api';

export const server = new GraphQLServer(gqlServerConfig);
