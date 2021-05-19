import { server } from "../config";
export function getStrapiURL(path = "") {
  return `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337"
      : "https://sleepy-river-26898.herokuapp.com"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
