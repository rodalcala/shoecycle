import Requests from './mongoose/requests.schema';
import Shoes from './mongoose/shoes.schema';
import mailer, { formatRequestBody } from '../../lib/mailer';

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
        const requestedShoe = await Shoes.findById(id);

        /* NOTE: Check if receiver already submit a request for this shoe */
        const hasRequestedBefore = requestedShoe.requests.some(
          (e) => e.email === request.email
        );

        if (hasRequestedBefore) {
          return {
            success: false,
            message: 'send_request_failure',
            error: 'you already requested this shoe',
          };
        }

        mailer.send({
          from: process.env.SENDGRID_EMAIL,
          to: requestedShoe.email,
          subject: `shoe request from ${request.name}`,
          text: formatRequestBody(request, requestedShoe),
        });

        const newRequest = await Requests.create(request);
        requestedShoe.requests.push(newRequest);
        requestedShoe.save();
        return {
          success: true,
          message: 'send_request_success',
        };
      } catch (e) {
        console.log('sendShoeRequest mutation error:', e);
        return {
          success: false,
          message: 'send_request_failure',
          error: e,
        };
      }
    },
  },
};

export default resolvers;
