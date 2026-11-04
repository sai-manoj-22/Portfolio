import { PROFILE, BRAND_ICONS } from "./site.js";

const VIEWS = {
  profile: `<span class="c">// profile.json</span>
{
  <span class="k">"name"</span>: <span class="s">"G SAI MANOJ GOUD"</span>,
  <span class="k">"role"</span>: <span class="s">"Aspiring Software Development Engineer"</span>,
  <span class="k">"degree"</span>: <span class="s">"B.Tech CSE — SR University"</span>,
  <span class="k">"cgpa"</span>: <span class="s">"8.988 (till 4th semester)"</span>,
  <span class="k">"certification"</span>: <span class="s">"Oracle Certified Foundations Associate"</span>,
  <span class="k">"leadership"</span>: <span class="s">"Vice Chair — International Affairs Club"</span>
}`,
  skills: `<span class="c">// skills — established</span>
<span class="k">languages</span>  = [<span class="s">"C"</span>, <span class="s">"Java"</span>, <span class="s">"Python"</span>]
<span class="k">concepts</span>   = [<span class="s">"Data Structures and Algorithms"</span>]
<span class="k">tools</span>      = [<span class="s">"Git"</span>, <span class="s">"SQL"</span>]`,
  learning: `<span class="c">// currently learning — MERN stack</span>
<span class="k">learning</span> = [<span class="s">"MongoDB"</span>, <span class="s">"Express.js"</span>, <span class="s">"React"</span>, <span class="s">"Node.js"</span>]
<span class="k">status</span>   = <span class="s">"in progress"</span>`,
  education: `<span class="c">// education timeline</span>
<span class="k">B.Tech CSE</span>      SR University, Warangal    <span class="s">Pursuing · CGPA 8.988</span>
<span class="k">Intermediate</span>    Akshara Junior College     <span class="s">2024 · 88.50%</span>
<span class="k">10th Grade</span>      Mount Basil High School    <span class="s">2022 · 84.60%</span>`,
};

const term = document.getElementById("term");
const tabs = document.querySelectorAll(".tab");
const show = (v) => {
  term.innerHTML = VIEWS[v];
  tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.view === v)));
};
tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.view)));
show("profile");

const names = { linkedin: "LinkedIn", github: "GitHub", leetcode: "LeetCode", codeforces: "Codeforces" };
document.getElementById("platforms").innerHTML = Object.entries(PROFILE.links)
  .map(([k, url]) => `<a class="platform" href="${url}" target="_blank" rel="noopener noreferrer">${BRAND_ICONS[k]}<div><strong>${names[k]}</strong><small>${url.replace(/^https:\/\/(www\.)?/, "")}</small></div><svg class="go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg></a>`)
  .join("");
