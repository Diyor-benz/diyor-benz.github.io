console.log("Сайт загружен 😎");

// --- Анимация появления при скролле ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// --- Неоновый след курсора ---
const cursor = document.createElement("div");
cursor.classList.add("cursor-light");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = $;{e.pageX - 25}px;
  cursor.style.top = $;{e.pageY - 25}px;
});
// ----- Анимация текста по буквам -----
const animatedText = document.querySelector('.animate-text');
if (animatedText) {
  const text = animatedText.getAttribute('data-text');
  let i = 0;

  function type() {
    if (i < text.length) {
      animatedText.textContent += text[i];
      i++;
      setTimeout(type, 80); // Скорость (меньше = быстрее)
    }
  }
  type();
}
