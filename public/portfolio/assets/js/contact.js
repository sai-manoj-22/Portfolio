/* Contact form: client-side validation + Formspree, with honest mailto fallback.
   To enable direct sending, create a form at https://formspree.io and paste its ID below. */
import { PROFILE } from "./site.js";

const FORMSPREE_ID = ""; // e.g. "xyzabcd" — leave empty to use the email-app fallback

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const rules = {
  name: (v) => (v.length < 2 ? "Please enter your name." : v.length > 100 ? "Name is too long." : ""),
  email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "Please enter a valid email address." : v.length > 255 ? "Email is too long." : ""),
  subject: (v) => (v.length < 3 ? "Please add a subject." : v.length > 150 ? "Subject is too long." : ""),
  message: (v) => (v.length < 10 ? "Message should be at least 10 characters." : v.length > 2000 ? "Message is too long (max 2000)." : ""),
};
const show = (type, msg) => { status.className = `form-status show ${type}`; status.textContent = msg; };

function validate() {
  let ok = true;
  for (const [name, check] of Object.entries(rules)) {
    const input = form.elements[name];
    const err = check(input.value.trim());
    const field = input.closest(".field");
    field.classList.toggle("invalid", !!err);
    input.setAttribute("aria-invalid", String(!!err));
    field.querySelector(".err").textContent = err;
    if (err && ok) { input.focus(); ok = false; }
  }
  return ok;
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const btn = form.querySelector("button[type=submit]");

    if (!FORMSPREE_ID) {
      const body = `${data.message}\n\n— ${data.name} (${data.email})`;
      location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
      show("info", "Your email app should now open with this message ready. Press send there to deliver it — nothing has been sent yet.");
      return;
    }
    btn.disabled = true; btn.textContent = "Sending…";
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset(); show("ok", "Thank you! Your message has been sent. I'll get back to you soon.");
    } catch {
      show("bad", `Sorry, the message couldn't be sent. Please email me directly at ${PROFILE.email}.`);
    } finally { btn.disabled = false; btn.textContent = "Send Message"; }
  });
}
