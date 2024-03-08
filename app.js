import { decodeMessage } from "./decode/decodeMessage.js";
import { submitMessage } from "./navigation/submitMessage.js";
import { copyLink } from "./utils/copyLink.js";
import { backToForm } from "./navigation/backToForm.js";

submitButton.addEventListener("click", submitMessage);
copyButton.addEventListener("click", copyLink);
backToFormButton.addEventListener("click", backToForm);

decodeMessage();
window.addEventListener("hashchange", decodeMessage);
