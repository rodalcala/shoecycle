import Requests from './mongoose/requests.schema';
import Shoes from './mongoose/shoes.schema';
import mailer, { formatRequestVerificationBody, formatShoeVerificationBody } from '../../lib/mailer';

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

        /* NOTE: Verify giver's email before making the shoe available */
        mailer.send({
          from: process.env.SENDGRID_EMAIL,
          to: newShoe.email,
          subject: `verify your email for ${newShoe.brand} shoe`,
          html: formatShoeVerificationBody(newShoe),
        });

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
    async sendShoeRequest(_, { id, request: requestData }) {
      try {
        const requestedShoe = await Shoes.findById(id);

        /* NOTE: Check if receiver already submit a request for this shoe */
        const hasRequestedBefore = requestedShoe.requests.some(
          (e) => e.email === requestData.email
        );

        if (hasRequestedBefore) {
          return {
            success: false,
            message: 'send_request_failure',
            error: 'you already requested this shoe',
          };
        }

        const request = await Requests.create(requestData);
        requestedShoe.requests.push(request);
        await requestedShoe.save();

        /* NOTE: Verify receiver's email before sending the request message */

        mailer.send({
          from: process.env.SENDGRID_EMAIL,
          to: request.email,
          subject: `verify your email for ${requestedShoe.brand} shoe`,
          html: formatRequestVerificationBody(request, requestedShoe),
        });

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
