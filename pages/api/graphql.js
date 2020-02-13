import { ApolloServer, gql } from 'apollo-server-micro';
import './../../lib/sequelize';

const typeDefs = gql`
  type Query {
    title: String
  }
`;

const resolvers = {
  Query: {
    title: () => 'shoecycle',
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
