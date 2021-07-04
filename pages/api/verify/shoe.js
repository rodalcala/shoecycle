import crypto from 'crypto';

import connectDB from '../../../lib/mongoose';
import Shoes from '../../../src/api/mongoose/shoes.schema';

async function handler(req, res) {
  try {
    const { shoe: shoeId, code } = req.query;
    const shoe = await Shoes.findById(shoeId);

    /* NOTE: Short circuit if the shoeId is not valid or no hash is found */
    if (!shoe || !code) {
      return res
        .status(401)
        .json('not authorised: try submitting your shoe again.');
    }

    if (shoe.available) {
      return res
        .status(403)
        .json('your verification has already been handled.');
    }

    const hash = crypto
      .createHash('md5')
      .update(shoe.createdAt.toString())
      .digest('hex');

    /* NOTE: If the hash doen't match respond with a 401 */
    if (code !== hash) {
      return res
        .status(401)
        .json('not authorised: we could not confirm this is your shoe.');
    }

    /* NOTE: Set available flag to true to list the shoe */
    shoe.available = true;
    shoe.save();

    res.status(200).json('thanks for verifying your shoe! you are all set.');
  } catch (e) {
    console.error('email verification (shoe) error:', e);
    res.status(500).json('error during shoe verification, please try again.');
  }
}

export default connectDB(handler);
