import Shoes from './shoes';

const resolvers = {
  Query: {
    async getAllShoes() {
      try {
        const allShoes = await Shoes.find({});
        return allShoes;
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
          message: 'shoe_creation_success',
          shoe: newShoe,
        };
      } catch (e) {
        console.log('addShoe mutation error:', e);
        return {
          success: false,
          message: 'shoe_creation_failure',
          shoe: null,
        };
      }
    },
  },
};

export default resolvers;
