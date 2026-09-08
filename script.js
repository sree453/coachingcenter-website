const WHATSAPP_NUMBER = "919876543210";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.getElementById("whatsappHero").href =
  whatsappLink("Hi Bright Future Academy, I would like to know more about the courses.");

document.getElementById("whatsappFloat").href =
  whatsappLink("Hi Bright Future Academy, I would like to enquire about admissions.");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("enquiryForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const className = document.getElementById("className").value;

  if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
    document.getElementById("formMessage").textContent =
      "Please enter a valid phone number.";
    return;
  }

  const message =
    `Hi Bright Future Academy, I am ${name}. ` +
    `I am interested in the ${className} program. ` +
    `My phone number is ${phone}.`;

  window.open(whatsappLink(message), "_blank");

  document.getElementById("formMessage").textContent =
    "Opening WhatsApp to send your enquiry...";
  this.reset();
});
