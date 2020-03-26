import Shoes from './shoes';

export const resolvers = {
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
