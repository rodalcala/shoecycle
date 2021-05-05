import crypto from 'crypto';
import sgMail from '@sendgrid/mail';

import { generateURL } from './utils';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const formatRequestBody = (
  { name, email, message, city, country },
  { _id: shoeId, brand, model, createdAt }
) => {
  /* NOTE: Code to send along in case the shoe is no longer available */
  const hash = crypto
    .createHash('md5')
    .update(createdAt.toString())
    .digest('hex');

  const receiverLocation = city ? `${city}, ${country}` : `${country}`;
  const unlistShoeURL = generateURL('/api/unlist', {
    shoe: shoeId,
    code: hash,
  });

  const header = `someone would like to shoecycle your ${brand} ${model}!</br>`;
  const introduction = `${name} is from ${receiverLocation}.</br></br>`;
  const body = `this is their message:</br>${message}</br></br>`;
  const contact = `if you want to get in touch with ${name}, please do so at ${email}.</br></br>`;
  const footer = 'thanks for sharing the love and trusting shoecycle!</br></br>';
  const unlist = `if you already gave away this shoe please <a href="${unlistShoeURL}"><b>click here to unlist it</b></a>`

  return header + introduction + body + contact + footer + unlist;
};

export const formatVerificationBody = (
  { _id: requestId },
  { _id: shoeId, brand, model, size }
) => {
  const verificationURL = generateURL('/api/verify', {
    shoe: shoeId,
    request: requestId,
  });

  const header = 'before proceeding we need to verify your email.</br></br>';
  const introduction = `according to our records you're requestig a pair of ${brand} ${model} in size ${size}.</br>`;
  const body = `if this sounds right please click in the link below:</br>`;
  const link = `<a href="${verificationURL}"><b>verify yourself!</b></a></br></br>`;
  const footer = `thanks for your patiance! with some luck the owner will get in touch soon.`;

  return header + introduction + body + link + footer;
};

export default sgMail;
