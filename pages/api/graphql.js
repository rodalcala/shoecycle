import { ApolloServer } from 'apollo-server-micro';
import connectDb from '../../lib/mongoose';
import typeDefs from '../../src/api/shoes/Shoes.graphql';
import Shoes from '../../src/api/shoes/shoes';

const resolvers = {
  Query: {
    shoes() {
      try {
        return [];
      } catch (e) {
        console.log('shoes query error:', e);
      }
    },
  },
  Mutation: {
    async addShoe(_, { shoe }) {
      try {
        const newShoe = await Shoes.create(shoe);
        return {
          success: true,
          message: 'tuvieja',
          shoe: newShoe,
        };
      } catch (e) {
        console.log('addShoe mutation error:', e);
      }
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);
