import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The portfolio is a standalone static site in public/portfolio (GitHub Pages ready).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G SAI MANOJ GOUD — Portfolio" },
      { name: "description", content: "Portfolio of G Sai Manoj Goud, aspiring Software Development Engineer." },
      { property: "og:title", content: "G SAI MANOJ GOUD — Portfolio" },
      { property: "og:description", content: "Portfolio of G Sai Manoj Goud, aspiring Software Development Engineer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio/index.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <a href="/portfolio/index.html">Open portfolio</a>
    </div>
  );
}
