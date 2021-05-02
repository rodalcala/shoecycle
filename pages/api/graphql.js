import { ApolloServer } from 'apollo-server-micro';

import { GRAPHQL_PATH } from '../../lib/apollo';
import connectDB from '../../lib/mongoose';
import typeDefs from '../../src/api/Definitions.graphql';
import resolvers from '../../src/api/resolvers';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: GRAPHQL_PATH });
export default connectDB(server);
