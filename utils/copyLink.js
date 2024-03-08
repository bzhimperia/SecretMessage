export function copyLink() {
  const linkToCopy = shareText.querySelector("a").href;
  navigator.clipboard.writeText(linkToCopy);
}
