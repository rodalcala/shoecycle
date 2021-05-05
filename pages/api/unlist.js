import crypto from 'crypto';

import connectDB from '../../lib/mongoose';
import Shoes from '../../src/api/mongoose/shoes.schema';

async function handler(req, res) {
  try {
    const { shoe: shoeId, code } = req.query;
    const shoe = await Shoes.findById(shoeId);

    /* NOTE: Short circuit if no shoe is found */
    if (!shoe) {
      return res.status(404).json('we could not find your shoe.');
    }

    if (!shoe.available) {
      return res.status(200).json('this shoe has already been unlisted.');
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

    /* NOTE: Set available flag to false to unlist the shoe */
    shoe.available = false;
    shoe.save();

    res.status(202).json('your shoe has been unlisted successfully.');
  } catch (e) {
    console.error('shoe unlist error:', e);
    res.status(500).json('error during shoe unlist, please try again.');
  }
}

export default connectDB(handler);
