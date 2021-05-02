const getBaseURL = () => {
  if (typeof window === 'undefined') {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3000';
    }

    return `https://${process.env.VERCEL_URL}`;
  }

  return '';
};

export const generateURL = (path, querys) => {
  return getBaseURL() + path;
}