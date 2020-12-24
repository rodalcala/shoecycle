import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const formatRequestBody = (
  { name, email, message, city, country },
  { brand, model }
) => {
  const receiverLocation = city ? `${city}, ${country}` : `${country}`;

  const header = `someone would like to shoecycle your ${brand} ${model}!\n`;
  const introduction = `${name} is from ${receiverLocation}.\n\n`;
  const body = `This is their message:\n${message}\n\n`;
  const contact = `if you want to get in touch with ${name}, please do so at ${email}.\n\n`;
  const footer = 'thanks for sharing the love and trusting shoecycle!';

  return header + introduction + body + contact + footer;
};

export default sgMail;
