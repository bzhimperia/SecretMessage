export function backToForm() {
  history.replaceState(
    {},
    document.title,
    window.location.pathname + window.location.search
  );
  secretForm.style.display = "block";
  linkContainer.style.display = "none";
  decodedMessageContainer.style.display = "none";
}
