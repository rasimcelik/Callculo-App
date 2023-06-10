export const heading = "currency converter";
export const API_DOMAIN = "https://free.currconv.com/api/v7/convert?q=";
export const API_KEY = process.env.REACT_APP_API_KEY;
export const endpointPath = (from, to) =>
  `${API_DOMAIN}${from}_${to}&compact=ultra&apiKey=${API_KEY}`;
