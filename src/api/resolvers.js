import Requests from './mongoose/requests.schema';
import Shoes from './mongoose/shoes.schema';

const resolvers = {
  Query: {
    async shoes() {
      try {
        const allShoes = await Shoes.find({});
        return allShoes;
      } catch (e) {
        console.log('shoes query error:', e);
      }
    },
    async shoeById(_, { id }) {
      try {
        const [shoe] = await Shoes.find({ _id: id });
        return shoe;
      } catch (e) {
        console.log('shoeById query error:', e);
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
          error: null,
          shoe: newShoe,
        };
      } catch (e) {
        console.log('addShoe mutation error:', e);
        return {
          success: false,
          message: 'shoe_creation_failure',
          error: e,
          shoe: null,
        };
      }
    },
    async sendShoeRequest(_, { id, request }) {
      try {
        const newRequest = await Requests.create(request);
        await Shoes.findByIdAndUpdate(id, { $push: { requests: newRequest } });
        return {
          success: true,
          message: 'send_request_success',
        };
      } catch (e) {
        console.log('sendShoeRequest mutation error:', e);
        return {
          success: false,
          message: 'send_request_failure',
        };
      }
    },
  },
};

export default resolvers;
