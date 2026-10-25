// ================= CONFIG =================
const GH_USER = "MikeChamp4";
const TOPIC = "portfolio";
const DEFAULT_BRANCH_PREVIEW = "preview.gif"; // file convention at the repo root

// ================= I18N =================
const I18N = {
  ca: {
    htmlLang: "ca",
    role: "Desenvolupador Backend · GenAI",
    aboutLabel: "Sobre mi",
    expLabel: "Experiència laboral",
    techLabel: "Tecnologies que domino",
    titlesLabel: "Formació i títols",
    about: [
      "Backend Developer especialitzat en <strong>GenAI</strong>. Dissenyo i implemento microserveis i APIs REST amb <strong>Python</strong> i <strong>FastAPI</strong> per a aplicacions basades en models de llenguatge (LLMs), incloent sistemes <strong>RAG</strong>: splitters jeràrquics amb LangChain per indexar documents en vector stores (Neo4j, PGVector), extracció d'informació i generació de puntuacions sobre trucades transcrites, i embeddings.",
      "Administro entorns amb <strong>Docker</strong> i <strong>Kubernetes</strong> sobre <strong>Azure</strong>, amb desplegament continu mitjançant Azure DevOps. Sóc el referent tècnic del meu equip: guio companys i becaris en bones pràctiques, tenint cura dels estàndards de qualitat, rendiment i seguretat. M'apassionen els sistemes operatius i <strong>Linux</strong> (administració i configuració), i m'especialitzo en solucions GenAI.",
    ],
    projects: "Projectes",
    loading: "Carregant projectes des de GitHub…",
    empty: "Encara no hi ha projectes amb el topic \"portfolio\". Afegeix-lo als repositoris que vulguis mostrar.",
    error: "No s'han pogut carregar els projectes des de GitHub. Torna-ho a provar més tard.",
    noDesc: "Sense descripció. Afegeix-ne una a la secció About del repositori.",
    view: "Veure a GitHub",
    foot: "Dades carregades en directe des de l'API de GitHub · Allotjat a GitHub Pages",
  },
  es: {
    htmlLang: "es",
    role: "Desarrollador Backend · GenAI",
    aboutLabel: "Sobre mí",
    expLabel: "Experiencia laboral",
    techLabel: "Tecnologías que manejo",
    titlesLabel: "Formación y títulos",
    about: [
      "Backend Developer especializado en <strong>GenAI</strong>. Diseño e implemento microservicios y APIs REST con <strong>Python</strong> y <strong>FastAPI</strong> para aplicaciones basadas en modelos de lenguaje (LLMs), incluyendo sistemas <strong>RAG</strong>: splitters jerárquicos con LangChain para indexar documentos en vector stores (Neo4j, PGVector), extracción de información y generación de puntuaciones sobre llamadas transcritas, y embeddings.",
      "Administro entornos con <strong>Docker</strong> y <strong>Kubernetes</strong> sobre <strong>Azure</strong>, con despliegue continuo mediante Azure DevOps. Soy el referente técnico de mi equipo: guío a compañeros y becarios en buenas prácticas, cuidando los estándares de calidad, rendimiento y seguridad. Me apasionan los sistemas operativos y <strong>Linux</strong> (administración y configuración), y me especializo en soluciones GenAI.",
    ],
    projects: "Proyectos",
    loading: "Cargando proyectos desde GitHub…",
    empty: "Aún no hay proyectos con el topic \"portfolio\". Añádelo a los repositorios que quieras mostrar.",
    error: "No se pudieron cargar los proyectos desde GitHub. Inténtalo de nuevo más tarde.",
    noDesc: "Sin descripción. Añade una en la sección About del repositorio.",
    view: "Ver en GitHub",
    foot: "Datos cargados en directo desde la API de GitHub · Alojado en GitHub Pages",
  },
  en: {
    htmlLang: "en",
    role: "Backend Developer · GenAI",
    aboutLabel: "About",
    expLabel: "Work Experience",
    techLabel: "Technologies I Work With",
    titlesLabel: "Education & Certifications",
    about: [
      "Backend Developer specialized in <strong>GenAI</strong>. I design and build microservices and REST APIs with <strong>Python</strong> and <strong>FastAPI</strong> for applications powered by language models (LLMs), including <strong>RAG</strong> systems: hierarchical splitters with LangChain to index documents into vector stores (Neo4j, PGVector), information extraction and scoring over transcribed calls, and embeddings.",
      "I manage environments with <strong>Docker</strong> and <strong>Kubernetes</strong> on <strong>Azure</strong>, with continuous delivery through Azure DevOps. I'm the technical reference on my team: I mentor peers and interns on best practices, keeping an eye on quality, performance and security standards. I'm passionate about operating systems and <strong>Linux</strong> (administration and configuration), and I specialize in GenAI solutions.",
    ],
    projects: "Projects",
    loading: "Loading projects from GitHub…",
    empty: "No projects with the \"portfolio\" topic yet. Add it to the repositories you want to show.",
    error: "Could not load projects from GitHub. Please try again later.",
    noDesc: "No description. Add one in the repository's About section.",
    view: "View on GitHub",
    foot: "Data loaded live from the GitHub API · Hosted on GitHub Pages",
  },
};

// ================= TITLES (editable data) =================
// Fill each entry: { main, issuer, year }. Leave empty to hide the section.
const TITLES = [
  { main: "Curso de especialización en IA y Big Data", issuer: "Institut Obert de Catalunya, Barcelona", year: "2025 — Act." },
  { main: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)", issuer: "Institut Vidal i Barraquer, Tarragona", year: "2022 — 2024" },
  { main: "Gama de cursos Java FullStack", issuer: "OpenWebinars", year: "2023" },
  { main: "Linux Essentials", issuer: "Linux Professional Institute (LPI)", year: "2022" },
  { main: "Conceptos básicos de ciberseguridad", issuer: "Microsoft Learn", year: "2024" },
  { main: "Título de Monitor de Lleure", issuer: "Joventut Cambrils", year: "2022" },
];

// ================= EXPERIENCE (editable data) =================
// Leave empty to hide the section.
// period is shown as-is in every language; role/summary are per-language.
const EXPERIENCE = [
  {
    period: "Jun 2024 — Act.",
    role: {
      ca: "Backend Developer · GenAI — Inetum",
      es: "Backend Developer · GenAI — Inetum",
      en: "Backend Developer · GenAI — Inetum",
    },
    summary: {
      ca: "Referent tècnic junior al <strong>CoE de Gen AI</strong>. Desenvolupo aplicacions i microserveis amb <strong>Python</strong> i <strong>FastAPI</strong> per a solucions d'IA generativa (<strong>RAGs</strong>), tant per a proves internes com per a clients de la companyia. Treballo amb arquitectura de microserveis, desplegaments amb <strong>Docker</strong> i <strong>Kubernetes</strong>, entorns <strong>Linux (WSL)</strong> i tests unitaris. Guio companys i becaris en bones pràctiques.",
      es: "Referente técnico junior en el <strong>CoE de Gen AI</strong>. Desarrollo aplicaciones y microservicios con <strong>Python</strong> y <strong>FastAPI</strong> para soluciones de IA generativa (<strong>RAGs</strong>), tanto en pruebas internas como para clientes de la compañía. Trabajo con arquitectura de microservicios, despliegues con <strong>Docker</strong> y <strong>Kubernetes</strong>, entornos <strong>Linux (WSL)</strong> y tests unitarios. Guío a compañeros y becarios en buenas prácticas.",
      en: "Junior technical reference at the <strong>Gen AI CoE</strong>. I build applications and microservices with <strong>Python</strong> and <strong>FastAPI</strong> for generative AI solutions (<strong>RAGs</strong>), for both internal pilots and company clients. I work with microservice architecture, <strong>Docker</strong> and <strong>Kubernetes</strong> deployments, <strong>Linux (WSL)</strong> environments and unit testing. I mentor peers and interns on best practices.",
    },
    tags: ["Python", "FastAPI", "RAG", "LangChain", "Docker", "Kubernetes", "Linux"],
  },
  {
    period: "8 meses",
    role: {
      ca: "Tècnic Auxiliar / Editor — Tècnic Center",
      es: "Técnico Auxiliar / Editor — Tècnic Center",
      en: "Support Technician / Editor — Tècnic Center",
    },
    summary: {
      ca: "Muntatge, optimització i instal·lació de sistemes operatius en ordinadors i mòbils. Disseny i gestió web amb <strong>Shopify</strong> i posicionament SEO. Ús de <strong>Google Merchant Center</strong>, <strong>Google Analytics</strong> i Ahrefs per a la venda i l'anàlisi de dades. Edició i disseny gràfic amb la <strong>Suite Adobe</strong> (banners, fotos, disseny de skates).",
      es: "Montaje, optimización e instalación de sistemas operativos en ordenadores y móviles. Diseño y gestión web con <strong>Shopify</strong> y posicionamiento SEO. Uso de <strong>Google Merchant Center</strong>, <strong>Google Analytics</strong> y Ahrefs para la venta y el análisis de datos. Edición y diseño gráfico con la <strong>Suite Adobe</strong> (banners, fotos, diseño de skates).",
      en: "Assembly, optimization and OS installation on computers and mobile devices. Web design and management with <strong>Shopify</strong> plus SEO. Use of <strong>Google Merchant Center</strong>, <strong>Google Analytics</strong> and Ahrefs for online sales and data analysis. Graphic editing and design with the <strong>Adobe Suite</strong> (banners, photos, skate designs).",
    },
    tags: ["Shopify", "SEO", "Google Analytics", "Adobe"],
  },
  {
    period: "4 semanas",
    role: {
      ca: "Tècnic Auxiliar — MBO Amersfoort (Països Baixos)",
      es: "Técnico Auxiliar — MBO Amersfoort (Países Bajos)",
      en: "Support Technician — MBO Amersfoort (Netherlands)",
    },
    summary: {
      ca: "Estada internacional. Muntatge d'ordinadors i configuració de <strong>BIOS/UEFI</strong>, instal·lació de discos durs portàtils i introducció a la <strong>ciberseguretat</strong> amb dispositius Hak5 i Pineapple.",
      es: "Estancia internacional. Montaje de ordenadores y configuración de <strong>BIOS/UEFI</strong>, instalación de discos duros portátiles e introducción a la <strong>ciberseguridad</strong> con dispositivos Hak5 y Pineapple.",
      en: "International placement. Computer assembly and <strong>BIOS/UEFI</strong> configuration, portable hard drive installation and an introduction to <strong>cybersecurity</strong> with Hak5 and Pineapple devices.",
    },
    tags: ["Hardware", "BIOS/UEFI", "Cybersecurity"],
  },
];

// ================= TECH (editable data) =================
// Grouped chips. Category label is per-language; items are proper nouns
// shown the same in every language. Draft generated from the About section
// and the languages detected across the portfolio projects.
const TECH = [
  {
    cat: { ca: "Llenguatges", es: "Lenguajes", en: "Languages" },
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    cat: { ca: "Backend i IA", es: "Backend e IA", en: "Backend & AI" },
    items: ["FastAPI", "Flask", "Node.js", "Express", "LangChain", "RAG", "LLMs", "Embeddings", "REST APIs", "WebSockets", "JWT"],
  },
  {
    cat: { ca: "Dades i emmagatzematge", es: "Datos y almacenamiento", en: "Data & Storage" },
    items: ["PostgreSQL", "PGVector", "Neo4j", "MongoDB", "MySQL"],
  },
  {
    cat: { ca: "DevOps i Cloud", es: "DevOps y Cloud", en: "DevOps & Cloud" },
    items: ["Docker", "Kubernetes", "Azure", "Azure DevOps", "CI/CD", "Linux"],
  },
  {
    cat: { ca: "Frontend", es: "Frontend", en: "Frontend" },
    items: ["Angular"],
  },
];

// ================= THEME =================
const SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>';

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeIcon").innerHTML = theme === "dark" ? MOON : SUN;
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

document.getElementById("themeBtn").addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  applyTheme(cur === "dark" ? "light" : "dark");
});

// ================= LANG =================
let currentLang = "es";
let cachedRepos = null; // re-render without re-fetching the API

function applyLang(lang) {
  currentLang = lang;
  const t = I18N[lang];
  document.documentElement.lang = t.htmlLang;
  document.getElementById("projectsLabel").textContent = t.projects;
  document.getElementById("aboutLabel").textContent = t.aboutLabel;
  document.getElementById("expLabel").textContent = t.expLabel;
  document.getElementById("techLabel").textContent = t.techLabel;
  document.getElementById("titlesLabel").textContent = t.titlesLabel;
  document.getElementById("aboutText").innerHTML = t.about.map(p => `<p>${p}</p>`).join("");
  document.getElementById("footer").textContent = t.foot;
  renderTitles(lang);
  renderExperience(lang);
  renderTech(lang);
  updateNav(t);
  // mark active button
  document.querySelectorAll("#langSeg button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  // role fallback if bio is not available
  const heroRole = document.getElementById("heroRole");
  if (heroRole.dataset.fromBio !== "true") heroRole.textContent = t.role;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  // re-render grid state/messages
  if (cachedRepos !== null) renderProjects(cachedRepos);
}

document.querySelectorAll("#langSeg button").forEach(b => {
  b.addEventListener("click", () => applyLang(b.dataset.lang));
});

// ================= SIDE NAV (index + scroll-spy) =================
function updateNav(t) {
  const labels = {
    projects: t.projects,
    experience: t.expLabel,
    tech: t.techLabel,
    education: t.titlesLabel,
    about: t.aboutLabel,
  };
  document.querySelectorAll("#sideNav .nav-link").forEach(a => {
    const key = a.dataset.nav;
    a.textContent = labels[key] || "";
    // hide nav link when its target section is hidden/empty
    const target = document.querySelector(a.getAttribute("href"));
    a.hidden = !!(target && target.hidden);
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll("#sideNav .nav-link"));
  const map = new Map();
  links.forEach(a => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) map.set(target, a);
  });
  if (!map.size || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        const active = map.get(entry.target);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
  map.forEach((_, section) => observer.observe(section));
}

// ================= TITLES RENDER =================
function renderTitles() {
  const section = document.getElementById("titlesSection");
  const list = document.getElementById("titlesList");
  if (!Array.isArray(TITLES) || TITLES.length === 0) {
    section.hidden = true;
    list.innerHTML = "";
    return;
  }
  section.hidden = false;
  list.innerHTML = TITLES.map(it => `
    <li class="title-item">
      <div>
        <div class="title-main">${escapeHtml(it.main || "")}</div>
        ${it.issuer ? `<div class="title-issuer">${escapeHtml(it.issuer)}</div>` : ""}
      </div>
      ${it.year ? `<div class="title-year">${escapeHtml(it.year)}</div>` : ""}
    </li>`).join("");
}

// ================= EXPERIENCE RENDER =================
function renderExperience(lang) {
  const section = document.getElementById("expSection");
  const list = document.getElementById("expList");
  if (!Array.isArray(EXPERIENCE) || EXPERIENCE.length === 0) {
    section.hidden = true;
    list.innerHTML = "";
    return;
  }
  section.hidden = false;
  list.innerHTML = EXPERIENCE.map(it => {
    const role = (it.role && (it.role[lang] || it.role.en)) || "";
    const summary = (it.summary && (it.summary[lang] || it.summary.en)) || "";
    const tags = (it.tags || []).map(x => `<span class="chip">${escapeHtml(x)}</span>`).join("");
    return `
    <li class="exp-item">
      <div class="exp-head">
        <span class="exp-role">${escapeHtml(role)}</span>
        ${it.period ? `<span class="exp-period">${escapeHtml(it.period)}</span>` : ""}
      </div>
      ${summary ? `<p class="exp-summary">${summary}</p>` : ""}
      ${tags ? `<div class="tech-chips" style="margin-top:12px">${tags}</div>` : ""}
    </li>`;
  }).join("");
}

// ================= TECH RENDER =================
function renderTech(lang) {
  const section = document.getElementById("techSection");
  const groups = document.getElementById("techGroups");
  if (!Array.isArray(TECH) || TECH.length === 0) {
    section.hidden = true;
    groups.innerHTML = "";
    return;
  }
  section.hidden = false;
  groups.innerHTML = TECH.map(g => {
    const cat = (g.cat && (g.cat[lang] || g.cat.en)) || "";
    const chips = (g.items || []).map(x => `<span class="chip">${escapeHtml(x)}</span>`).join("");
    return `
    <div class="tech-group">
      <div class="tech-cat">${escapeHtml(cat)}</div>
      <div class="tech-chips">${chips}</div>
    </div>`;
  }).join("");
}

// ================= PROFILE (name + bio from GitHub) =================
async function loadProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GH_USER}`);
    if (!res.ok) return;
    const u = await res.json();
    if (u.name) document.getElementById("heroName").textContent = u.name;
    if (u.avatar_url) document.getElementById("avatar").src = u.avatar_url;
    if (u.bio) {
      const el = document.getElementById("heroRole");
      el.textContent = u.bio;
      el.dataset.fromBio = "true"; // do not overwrite on language change
    }
  } catch (e) { /* silent: hero already has default values */ }
}

// ================= PROJECTS =================
const GH_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0C18.3 4.35 19.28 4.66 19.28 4.66c.63 1.6.23 2.77.11 3.07.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>';

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

function skeletons(n = 4) {
  let html = "";
  for (let i = 0; i < n; i++) {
    html += `<div class="skeleton"><div class="sk-media"></div><div class="sk-body"><div class="sk-line"></div><div class="sk-line short"></div></div></div>`;
  }
  return html;
}

// Branded fallback image when no preview.gif exists and GitHub's social
// preview endpoint is rate-limited. Keeps every card looking intentional.
function placeholderImage(name, lang) {
  const label = String(name);
  const sub = lang ? String(lang) : "GitHub";
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="#0f1115"/><stop offset="1" stop-color="#161c1a"/>` +
    `</linearGradient></defs>` +
    `<rect width="1200" height="600" fill="url(#g)"/>` +
    `<circle cx="1050" cy="120" r="220" fill="#059669" opacity="0.12"/>` +
    `<text x="80" y="300" font-family="monospace" font-size="42" fill="#6b7280">&lt;/&gt;</text>` +
    `<text x="80" y="370" font-family="sans-serif" font-size="64" font-weight="700" fill="#e8e8ea">${escapeHtml(label)}</text>` +
    `<text x="82" y="430" font-family="monospace" font-size="30" fill="#059669">${escapeHtml(sub)}</text>` +
    `</svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

// Load chain per image: preview.gif -> social preview (retry on 429) -> SVG.
function wireCardImages(scope) {
  (scope || document).querySelectorAll(".card-media[data-og]").forEach(img => {
    const gif = img.dataset.gif;
    const og = img.dataset.og;
    const ph = img.dataset.ph;
    let stage = 0;   // 0 = gif, 1 = social preview, 2 = placeholder
    let ogTries = 0;
    img.onerror = () => {
      if (stage === 0) { stage = 1; img.src = og; return; }
      if (stage === 1 && ogTries < 2) {
        ogTries++;
        // back off and cache-bust to get past GitHub's burst rate limit
        setTimeout(() => { img.src = og + "?retry=" + ogTries; }, 500 * ogTries + Math.random() * 400);
        return;
      }
      stage = 2;
      img.onerror = null;
      img.src = ph;
    };
    img.src = gif;
  });
}

function cardHtml(repo) {
  const t = I18N[currentLang];
  const desc = repo.description ? escapeHtml(repo.description) : `<em>${t.noDesc}</em>`;
  const tags = (repo._languages || []).map(l => `<span class="tag">${escapeHtml(l)}</span>`).join("");
  const gif = `https://raw.githubusercontent.com/${GH_USER}/${encodeURIComponent(repo.name)}/${encodeURIComponent(repo.default_branch)}/${DEFAULT_BRANCH_PREVIEW}`;
  const og = `https://opengraph.githubassets.com/1/${GH_USER}/${encodeURIComponent(repo.name)}`;
  const ph = placeholderImage(repo.name, (repo._languages || [])[0] || "");
  return `
    <a class="card" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener">
      <img class="card-media" loading="lazy" alt="${escapeHtml(repo.name)}"
           data-gif="${escapeHtml(gif)}" data-og="${escapeHtml(og)}" data-ph="${escapeHtml(ph)}" />
      <div class="card-body">
        <div class="card-title">${GH_ICON}${escapeHtml(repo.name)}</div>
        <p class="card-desc">${desc}</p>
        <div class="tags">${tags}</div>
      </div>
    </a>`;
}

function renderProjects(repos) {
  const grid = document.getElementById("grid");
  const t = I18N[currentLang];
  if (!repos || repos.length === 0) {
    grid.innerHTML = `<div class="state">${t.empty}</div>`;
    return;
  }
  grid.innerHTML = repos.map(cardHtml).join("");
  wireCardImages(grid);
}

async function loadProjects() {
  const grid = document.getElementById("grid");
  grid.innerHTML = skeletons();
  try {
    const res = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`, {
      headers: { "Accept": "application/vnd.github+json" }
    });
    if (!res.ok) throw new Error("repos " + res.status);
    let repos = await res.json();

    // filter by topic
    repos = repos.filter(r => Array.isArray(r.topics) && r.topics.includes(TOPIC) && !r.fork);

    // load languages in parallel
    await Promise.all(repos.map(async r => {
      try {
        const lr = await fetch(r.languages_url);
        r._languages = lr.ok ? Object.keys(await lr.json()) : [];
      } catch (e) { r._languages = []; }
    }));

    cachedRepos = repos;
    renderProjects(repos);
  } catch (e) {
    cachedRepos = [];
    grid.innerHTML = `<div class="state">${I18N[currentLang].error}</div>`;
  }
}

// ================= INIT =================
(function init() {
  // theme: user's stored preference > dark by default (always)
  let theme = "dark";
  try { theme = localStorage.getItem("theme") || "dark"; } catch (e) {}
  applyTheme(theme);

  // language: stored > Spanish
  let lang = "es";
  try { lang = localStorage.getItem("lang") || "es"; } catch (e) {}
  if (!I18N[lang]) lang = "es";
  applyLang(lang);

  loadProfile();
  loadProjects();
  initScrollSpy();
})();
