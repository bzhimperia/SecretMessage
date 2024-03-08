export function decodeMessage() {
  const urlSearchParams = new URLSearchParams(window.location.hash.slice(1));
  const encodedMessage = urlSearchParams.get("secretmsg");
  const decodedMessageContent = document.getElementById("decodedMessage");
  const decodedMessageContainer = document.getElementById(
    "decodedMessageContainer"
  );

  if (encodedMessage) {
    const decodedMessage = atob(encodedMessage);
    decodedMessageContent.innerHTML = `${decodedMessage}`;
    secretForm.style.display = "none";
    linkContainer.style.display = "none";
    decodedMessageContainer.style.display = "block";
  }
}
