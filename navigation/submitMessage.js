export function submitMessage() {
  const userInput = document.getElementById("message").value;
  const encodedMessage = btoa(userInput);
  const url = `${window.location.origin}${window.location.pathname}#${encodedMessage}`;

  shareText.innerHTML = `<a href="${url}">${url}</a>`;
  secretForm.style.display = "none";
  linkContainer.style.display = "block";
  decodedMessageContainer.style.display = "none";
}
