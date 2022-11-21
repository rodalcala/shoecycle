import mailer, { formatShoeRequestBody } from '../../../lib/mailer';
import connectDB from '../../../lib/mongoose';
import Shoes from '../../../src/api/mongoose/shoes.schema';

async function handler(req, res) {
  try {
    const { shoe: shoeId, request: requestId } = req.query;
    const shoe = await Shoes.findById(shoeId);
    const request = shoe.requests.id(requestId);

    /* NOTE: Short circuit if the shoeId is not valid or no request is found */
    if (!shoe || !request) {
      return res
        .status(401)
        .json('not authorised: try submitting your request again.');
    }

    if (request.sent) {
      return res
        .status(403)
        .json('your verification has already been handled.');
    }

    /* NOTE: Set sent flag to true to prevent the email to be sent again */
    request.sent = true;
    await shoe.save();

    mailer.send({
      from: process.env.SENDGRID_EMAIL,
      to: shoe.email,
      subject: `shoe request from ${request.name}`,
      html: formatShoeRequestBody(request, shoe),
    });

    res.status(200).json('thanks for verifying your email! you are all set.');
  } catch (e) {
    console.error('email verification (request) error:', e);
    res.status(500).json('error during request verification, please try again.');
  }
}

export default connectDB(handler);