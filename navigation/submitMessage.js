export function submitMessage() {
  const userInput = document.getElementById("message").value;
  const encodedMessage = btoa(userInput);
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set("secretmsg", encodedMessage);
  const url =
    window.location.origin +
    window.location.pathname +
    "#" +
    urlSearchParams.toString();

  shareText.innerHTML = `Partagez ce lien pour partager le message décrypté <a href="${url}">${url}</a>`;
  secretForm.style.display = "none";
  linkContainer.style.display = "block";
  decodedMessageContainer.style.display = "none";
}
