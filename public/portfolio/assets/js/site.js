/* =========================================================
   Shared site behaviour: header, footer, social links,
   reveals, tilt, parallax, transitions, back-to-top.
   Edit PROFILE below to update links across every page.
   ========================================================= */
export const PROFILE = {
  name: "G SAI MANOJ GOUD",
  email: "saimanojmbhs@gmail.com",
  phone: "+91 9618387772",
  resume: "assets/docs/G_SAI_MANOJ_GOUD_Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/g-sai-manoj-goud-187876326/",
    github: "https://github.com/sai-manoj-22",
    leetcode: "https://leetcode.com/u/G_Sai_Manoj_goud/",
    codeforces: "https://codeforces.com/profile/GSAIMANOJGOUD",
  },
};

export const BRAND_ICONS = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.1c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.48 0a1.37 1.37 0 0 0-.96.44L7.12 6.21l-2.88 3.08a5.25 5.25 0 0 0-1.2 2.1 5.7 5.7 0 0 0-.13 2.21 5.33 5.33 0 0 0 1.5 3.01l4.42 4.46a5.4 5.4 0 0 0 7.43.06l2.68-2.47a1.38 1.38 0 1 0-1.87-2.03l-2.68 2.47a2.64 2.64 0 0 1-3.6-.03l-4.42-4.46a2.58 2.58 0 0 1-.06-3.56L9.26 7.97l5.22-5.6A1.37 1.37 0 0 0 13.48 0zM9.4 13.5a1.38 1.38 0 1 0 0 2.75h10.9a1.38 1.38 0 1 0 0-2.75z"/></svg>',
  codeforces: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5z"/></svg>',
};
const LABELS = { linkedin: "LinkedIn", github: "GitHub", leetcode: "LeetCode", codeforces: "Codeforces" };

const NAV = [
  ["index.html", "Home"], ["about.html", "About"], ["skills.html", "Skills"], ["projects.html", "Projects"],
  ["education.html", "Education"], ["certifications.html", "Certifications"], ["experience.html", "Leadership"],
  ["dashboard.html", "Dashboard"], ["contact.html", "Contact"],
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

function renderHeader() {
  const el = document.querySelector("[data-header]");
  if (!el) return;
  el.className = "site-header";
  el.innerHTML = `
    <div class="container nav">
      <a href="index.html" class="brand" aria-label="G Sai Manoj Goud — home"><span class="brand-mark">SM</span><span>Sai Manoj</span></a>
      <nav aria-label="Primary"><ul class="nav-links" id="nav-links">
        ${NAV.map(([h, l]) => `<li><a href="${h}"${h === current ? ' aria-current="page"' : ""}>${l}</a></li>`).join("")}
      </ul></nav>
      <div class="nav-actions">
        <a class="btn btn-primary btn-sm btn-resume" href="${PROFILE.resume}" download="G_SAI_MANOJ_GOUD_Resume.pdf" aria-label="Download resume"><i data-lucide="download"></i><span>Resume</span></a>
        <button class="menu-btn" aria-controls="nav-links" aria-expanded="false" aria-label="Open menu"><i data-lucide="menu"></i></button>
      </div>
    </div>`;
  const btn = el.querySelector(".menu-btn");
  const links = el.querySelector(".nav-links");
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
    window.lucide?.createIcons();
  });
  const onScroll = () => el.classList.toggle("scrolled", window.scrollY > 20);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}

function renderFooter() {
  const el = document.querySelector("[data-footer]");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="brand"><span class="brand-mark">SM</span><span>${PROFILE.name}</span></a>
          <p style="margin-top:1rem;max-width:38ch">Aspiring Software Development Engineer building efficient, scalable and secure software.</p>
          <div class="btn-row" style="margin-top:1.2rem">
            <a class="btn btn-primary btn-sm" href="${PROFILE.resume}" download="G_SAI_MANOJ_GOUD_Resume.pdf"><i data-lucide="download"></i>Download Resume</a>
          </div>
        </div>
        <div><h4>Explore</h4><ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
        <div><h4>Connect</h4><ul>
          <li><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></li>
          <li><a href="tel:${PROFILE.phone.replace(/\s/g, "")}">${PROFILE.phone}</a></li>
          ${Object.keys(PROFILE.links).map((k) => `<li><a href="${PROFILE.links[k]}" target="_blank" rel="noopener noreferrer">${LABELS[k]}</a></li>`).join("")}
        </ul></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${PROFILE.name}</span><span>Designed &amp; built with HTML, CSS &amp; JavaScript</span></div>
    </div>`;
}

/* <div data-social="linkedin,github"></div> renders brand buttons */
function renderSocials() {
  document.querySelectorAll("[data-social]").forEach((el) => {
    const keys = (el.dataset.social || "linkedin,github,leetcode,codeforces").split(",");
    el.classList.add("social-row");
    el.innerHTML = keys.map((k) => `<a class="btn social-btn" href="${PROFILE.links[k]}" target="_blank" rel="noopener noreferrer" aria-label="${LABELS[k]} profile (opens in new tab)">${BRAND_ICONS[k]}${LABELS[k]}</a>`).join("");
  });
}

function chrome() {
  const progress = document.createElement("div"); progress.className = "progress"; document.body.prepend(progress);
  const veil = document.createElement("div"); veil.className = "page-transition"; document.body.append(veil);
  const top = document.createElement("button");
  top.className = "to-top"; top.setAttribute("aria-label", "Back to top"); top.innerHTML = '<i data-lucide="arrow-up"></i>';
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  document.body.append(top);
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    top.classList.toggle("show", scrollY > 600);
  };
  onScroll(); addEventListener("scroll", onScroll, { passive: true });
}

function reveals() {
  const els = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
}

function tilt() {
  if (reduceMotion || matchMedia("(hover: none)").matches) return;
  document.querySelectorAll(".card").forEach((card) => {
    const strength = card.hasAttribute("data-tilt") ? 6 : 0;
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", `${x * 100}%`); card.style.setProperty("--my", `${y * 100}%`);
      if (strength) card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * strength}deg) rotateY(${(x - 0.5) * strength}deg) translateY(-3px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

function parallax() {
  const items = document.querySelectorAll("[data-parallax]");
  if (!items.length || reduceMotion) return;
  let mx = 0, my = 0, raf = 0;
  const apply = () => {
    raf = 0;
    items.forEach((el) => {
      const s = parseFloat(el.dataset.parallax) || 10;
      el.style.transform = `translate3d(${mx * s}px, ${my * s + scrollY * s * 0.012}px, 0)`;
    });
  };
  const queue = () => { if (!raf) raf = requestAnimationFrame(apply); };
  addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; queue(); }, { passive: true });
  addEventListener("scroll", queue, { passive: true });
}

function transitions() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a || reduceMotion || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank" || a.hasAttribute("download")) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || /^https?:/.test(href)) return;
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(() => { location.href = href; }, 320);
  });
  addEventListener("pageshow", () => document.body.classList.remove("leaving"));
}

function copyButtons() {
  document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.innerHTML = '<i data-lucide="check"></i>'; window.lucide?.createIcons(); }
    catch { /* clipboard unavailable */ }
  }));
}

renderHeader(); renderFooter(); renderSocials(); chrome();
window.lucide?.createIcons();
reveals(); tilt(); parallax(); transitions(); copyButtons();
requestAnimationFrame(() => document.body.classList.add("loaded"));
