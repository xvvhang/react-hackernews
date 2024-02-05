export function shortenURL(url) {
  const urlObject = new URL(url);
  return urlObject.hostname;
}
