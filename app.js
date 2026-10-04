// Google Apps Script API used by the RSVP flow.
const API_URL = "https://script.google.com/macros/s/AKfycbxV8sHt3H9LzDHGWMxobg8WcB1eGgSSjrfipm5zEkfzYMGtPd_tYPg_GbjfSvP-2YA3/exec";

// Carousel código de vestimenta. app.js is loaded in <head>, so wait for the DOM.
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("dressCarousel");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!carousel || !prevBtn || !nextBtn) return;

  const step = () => {
    const firstCard = carousel.querySelector(".look");
    if (!firstCard) return Math.max(134, carousel.clientWidth * 0.55);
    const styles = getComputedStyle(carousel);
    const gap = parseFloat(styles.gap || "0") || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -step(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: step(), behavior: "smooth" });
  });
});
