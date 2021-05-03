import sgMail from '@sendgrid/mail';

import { generateURL } from './utils';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const formatRequestBody = (
  { name, email, message, city, country },
  { brand, model }
) => {
  const receiverLocation = city ? `${city}, ${country}` : `${country}`;

  const header = `someone would like to shoecycle your ${brand} ${model}!\n`;
  const introduction = `${name} is from ${receiverLocation}.\n\n`;
  const body = `this is their message:\n${message}\n\n`;
  const contact = `if you want to get in touch with ${name}, please do so at ${email}.\n\n`;
  const footer = 'thanks for sharing the love and trusting shoecycle!';

  return header + introduction + body + contact + footer;
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
  const link = `<a href="${verificationURL}"><b>verify yourself!</b></a></br></br>`
  const footer = 'thanks for your patiance! with some luck the owner will get in touch soon.';

  return header + introduction + body + link + footer;
};

export default sgMail;
