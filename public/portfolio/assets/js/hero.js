/* Home page: typed role + lightweight Three.js particle constellation */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const roleEl = document.querySelector("[data-typed]");
if (roleEl) {
  const phrases = ["Aspiring Software Development Engineer", "Computer Science Undergraduate", "Problem Solver · DSA · OOP"];
  const text = roleEl.querySelector("span");
  if (reduce) text.textContent = phrases[0];
  else {
    let p = 0, i = 0, del = false;
    const tick = () => {
      const w = phrases[p];
      text.textContent = w.slice(0, i);
      if (!del && i === w.length) { del = true; return setTimeout(tick, 2200); }
      if (del && i === 0) { del = false; p = (p + 1) % phrases.length; }
      i += del ? -1 : 1;
      setTimeout(tick, del ? 28 : 55);
    };
    tick();
  }
}

const canvas = document.getElementById("hero-canvas");
if (canvas && !reduce) {
  import("https://unpkg.com/three@0.160.0/build/three.module.js").then((THREE) => {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 14;

    const COUNT = innerWidth < 700 ? 500 : 1100;
    const pos = new Float32Array(COUNT * 3), col = new Float32Array(COUNT * 3);
    const palette = [new THREE.Color("#3b82ff"), new THREE.Color("#22d3ee"), new THREE.Color("#8b7bff")];
    for (let i = 0; i < COUNT; i++) {
      const r = 6 + Math.random() * 7, t = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      pos.set([r * Math.sin(ph) * Math.cos(t), r * Math.sin(ph) * Math.sin(t) * 0.6, r * Math.cos(ph)], i * 3);
      const c = palette[i % 3]; col.set([c.r, c.g, c.b], i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending }));
    scene.add(pts);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.012, 8, 160), new THREE.MeshBasicMaterial({ color: "#22d3ee", transparent: true, opacity: 0.35 }));
    ring.rotation.x = 1.2; scene.add(ring);
    const ico = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.2, 1)), new THREE.LineBasicMaterial({ color: "#3b82ff", transparent: true, opacity: 0.18 }));
    scene.add(ico);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas.parentElement;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
      const x = w > 900 ? 4.5 : 0; pts.position.x = ring.position.x = ico.position.x = x;
    };
    resize(); addEventListener("resize", resize);

    let tx = 0, ty = 0, visible = true;
    addEventListener("pointermove", (e) => { tx = (e.clientX / innerWidth - 0.5) * 0.4; ty = (e.clientY / innerHeight - 0.5) * 0.3; }, { passive: true });
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(canvas);

    const clock = new THREE.Clock();
    const loop = () => {
      requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      const t = clock.getElapsedTime();
      pts.rotation.y = t * 0.03 + tx; pts.rotation.x = ty;
      ring.rotation.z = t * 0.1; ico.rotation.y = t * 0.12; ico.rotation.x = t * 0.07;
      renderer.render(scene, camera);
    };
    loop();
  }).catch(() => { canvas.remove(); });
}
