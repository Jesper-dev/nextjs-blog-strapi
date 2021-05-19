const dev = process.env.NODE_ENV === "development";
export const server = dev
  ? "http://localhost:1337"
  : "https://sleepy-river-26898.herokuapp.com";
