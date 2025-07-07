let visible = true;
setInterval(() => {
  document.title = visible ? "🚀 Portfólio de Davson Dev" : "👨‍💻 Vem ver meu trampo!";
  visible = !visible;
}, 5000);

function animarBarras() {
  const preenchimentos = document.querySelectorAll('.preenchimento');

  preenchimentos.forEach(barra => {
    const valorAleatorio = Math.floor(Math.random() * 100); // até 100%
    barra.style.height = valorAleatorio + '%';
  });
}

function animarPizza() {
  const pizza = document.querySelector('.pizza');

  // Sorteia três valores que somam 100
  const a = Math.floor(Math.random() * 60) + 10; // mínimo 10%
  const b = Math.floor(Math.random() * (100 - a - 10)) + 10;
  const c = 100 - a - b;

  // Cores fixas: vermelho, azul e amarelo
  const novaPizza = `conic-gradient(
    red 0% ${a}%,
    blue ${a}% ${a + b}%,
    yellow ${a + b}% 100%
  )`;

  pizza.style.background = novaPizza; // Aplica o novo gradiente
  pizza.style.transition = 'background 1s ease'; // Transição suave
}

document.addEventListener('DOMContentLoaded', () => {
  animarBarras();
  animarPizza();
  setInterval(animarPizza, 2000);
  setInterval(animarBarras, 1500);
});