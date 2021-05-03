import mailer, { formatRequestBody } from '../../lib/mailer';
import connectDB from '../../lib/mongoose';
import Shoes from '../../src/api/mongoose/shoes.schema';

async function handler(req, res) {
  try {
    const { shoe: shoeId, request: requestId } = req.query;
    const shoe = await Shoes.findById(shoeId);
    const request = shoe.requests.find((e) => String(e._id) === requestId);

    /* NOTE: Short circuit if the shoeId is not valid or no request is found */
    if (!shoe || !request) {
      return res
        .status(401)
        .json('not authorised: try submitting your request again');
    }

    mailer.send({
      from: process.env.SENDGRID_EMAIL,
      to: shoe.email,
      subject: `shoe request from ${request.name}`,
      text: formatRequestBody(request, shoe),
    });

    res.status(200).json('thanks for verifying your email!');
  } catch (e) {
    console.error('email verification error:', e);
    res.status(500).json('error during verification, please try again');
  }
}

export default connectDB(handler);
