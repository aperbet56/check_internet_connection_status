// Récupération de l'élément p
const message = document.querySelector("#message");

// Déclaration de la fonction messageOnLine
const messageOnLine = () => {
  message.textContent = "Internet connection available";
  message.style.backgroundColor = "#e7f6d5";
  message.style.border = "2px solid #689f38";
  message.style.color = "#689f38";
};

// Déclaration de la fonction messageOffLine
const messageOffLine = () => {
  message.textContent = "No internet connection";
  message.style.backgroundColor = "#ffdde0";
  message.style.border = "2px solid #d32f2f";
  message.style.color = "#d32f2f";
};

if (window.navigator.onLine) {
  // Appel de la fonction messageOnLine
  messageOnLine();
} else {
  // Appel de la fonction messageOffLine
  messageOffLine();
}
// Ecoute de l'événement "online" (en ligne / connecté ) et appel de la fonction messageOnLine
window.addEventListener("online", messageOnLine);

// Ecoute de l'événement "offline" (hors ligne / non connecté) et appel de la fonction messageOffLine
window.addEventListener("offline", messageOffLine);
