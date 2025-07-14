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

const skills = {
  // Habilidades e suas porcentagens
  // Soft Skills
  "comunicação": 90,
  "trabalho em equipe": 85,
  "empatia": 80,
  "resiliência": 75,
  "organização": 70,
  // Hard Skills
  "html5": 95,
  "css3": 75,
  "javascript": 60,
  "typescript": 20,
  "react js": 60,
  "next js": 50,
  "django": 60,
  "python": 70,
  "banco de dados sql": 55,
  "banco de dados no-sql": 50,
  "git": 95,
  "github": 90,
  "figma": 80,
  "vscode": 90,
  "gimp": 75,
  "android studio": 70,
  "kotlin": 65,
};

// pega todos os spans dentro da section.sobre
document.querySelectorAll('.sobre span').forEach(span => {
  const texto = span.textContent.trim().toLowerCase();

  // normaliza o texto pra bater com a chave do objeto
  let chave = texto
    .replace(/-/g, ' ')    // troca hífen por espaço
    .replace(/\s+/g, ' ')  // remove espaços duplicados
    .replace(/\s/g, ' ')   // só pra garantir
    .replace(/js$/, 'js')  // mantém React Js como react js
    .replace(/ no ?sql/, ' no-sql') // NoSQL vira no-sql
    .replace(/git e github/, 'git github'); // só se precisar ajustar

  // tenta pegar o valor na const
  let porcentagem = skills[chave];

  // se não achou direto, tenta ser mais esperto (ex: React Js → react)
  if (porcentagem === undefined) {
    chave = chave.replace(/\sjs/, 'js'); // react js -> reactjs
    porcentagem = skills[chave];
  }

  // Se achou, aplica no .percentual
  if (porcentagem !== undefined) {
    const divPercentual = span.parentElement.querySelector('.percentual');
    if (divPercentual) {
      divPercentual.style.width = `${porcentagem}%`;

      // só pra dar aquele toque visual maroto
      if (porcentagem >= 80) {
        divPercentual.style.backgroundColor = '#2ecc71'; // verde pra skills acima de 80%
      } else if (porcentagem >= 60) {
        divPercentual.style.backgroundColor = '#f1c40f'; // amarelo pra skills entre 60% e 80%
      } else {
        divPercentual.style.backgroundColor = '#ff3b3b'; // vermelho pra skills abaixo de 60%
      }
    }
  } else {
    console.warn(`Skill não encontrada: "${texto}"`);
  }
});

class MeuHeader extends HTMLElement {
  connectedCallback() {
    const repo = "/portfolio";
    const base = window.location.pathname.startsWith(repo) ? repo : "";

    this.innerHTML = `
      <header >
        <nav class="menu">
          <a href="${base}/index.html">HomePage</a>
          <a href="${base}/pages/sobre.html">Sobre</a>
          <a href="${base}/pages/projetos.html">Projetos</a>
        </nav>
      </header>
    `;
  }
}
customElements.define("meu-header", MeuHeader);


class MeuFooter extends HTMLElement {
  connectedCallback() {
    const repo = "/portfolio";
    const base = window.location.pathname.startsWith(repo) ? repo : "";

    this.innerHTML = `
      <footer>
        <nav class="social">
          <a href="https://www.instagram.com/davson_frontend/" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="${base}/imagens/instagramIcon.png" alt="Logo do Instagram">
          </a>
          <a href="https://github.com/DavsonMelo" target="_blank" rel="noopener" aria-label="GitHub">
            <img src="${base}/imagens/githubicon.png" alt="Logo do GitHub">
          </a>
          <a href="https://wa.me/5547984952412" target="_blank" rel="noopener" aria-label="WhatsApp">
            <img src="${base}/imagens/whatsappicon.png" alt="Logo do WhatsApp">
          </a>
        </nav>
      </footer>
    `;
  }
}
customElements.define("meu-footer", MeuFooter);

