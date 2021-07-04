import crypto from 'crypto';
import sgMail from '@sendgrid/mail';

import { generateURL } from './utils';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const formatShoeVerificationBody = (
  { _id: shoeId, brand, model, size, createdAt }
) => {
  /* NOTE: Code to send along for the owner to verify/unlist the shoe */
  const hash = crypto
    .createHash('md5')
    .update(createdAt.toString())
    .digest('hex');

  const verificationURL = generateURL('/api/verify/shoe', {
    shoe: shoeId,
    code: hash,
  });

  const unlistShoeURL = generateURL('/api/unlist', {
    shoe: shoeId,
    code: hash,
  });

  const header = 'before proceeding we need to verify your email.</br></br>';
  const introduction = `according to our records you're submitting a pair of ${brand} ${model} in size ${size}.</br>`;
  const body = `if this sounds right please click in the link below:</br>`;
  const link = `<a href="${verificationURL}"><b>verify shoe!</b></a></br></br>`;
  const unlist = `if in the future you want to unlist your shoe for any reason, <a href="${unlistShoeURL}"><b>click here</b></a>.</br>`
  const footer = `thanks for sharing the love!`;

  return header + introduction + body + link + unlist + footer;
};

export const formatShoeRequestBody = (
  { name, email, message, city, country },
  { _id: shoeId, brand, model, createdAt }
) => {
  /* NOTE: Code to send along in case the owner wants to unlist the shoe */
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

export const formatRequestVerificationBody = (
  { _id: requestId },
  { _id: shoeId, brand, model, size }
) => {
  const verificationURL = generateURL('/api/verify/request', {
    shoe: shoeId,
    request: requestId,
  });

  const header = 'before proceeding we need to verify your email.</br></br>';
  const introduction = `according to our records you're requesting a pair of ${brand} ${model} in size ${size}.</br>`;
  const body = `if this sounds right please click in the link below:</br>`;
  const link = `<a href="${verificationURL}"><b>verify yourself!</b></a></br></br>`;
  const footer = `thanks for your patiance! with some luck the owner will get in touch soon.`;

  return header + introduction + body + link + footer;
};

export default sgMail;
