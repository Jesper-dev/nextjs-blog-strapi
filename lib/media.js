import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = getStrapiURL(media);
  return imageUrl;
}
