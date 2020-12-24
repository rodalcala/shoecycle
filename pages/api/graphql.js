import { ApolloServer } from 'apollo-server-micro';
import connectDB from '../../lib/mongoose';
import typeDefs from '../../src/api/Definitions.graphql';
import resolvers from '../../src/api/resolvers';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDB(server);
