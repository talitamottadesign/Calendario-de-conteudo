import { createFileRoute } from "@tanstack/react-router";
import { Planner } from "@/components/planner/Planner";

export const Route = createFileRoute("/_workspace/")({
  head: () => ({
    meta: [
      { title: "Calendário de Conteúdo — planeje suas redes sociais" },
      { name: "description", content: "Planeje, organize e acompanhe publicações de redes sociais em um calendário com etiquetas, status e métricas." },
      { property: "og:title", content: "Calendário de Conteúdo" },
      { property: "og:description", content: "Um Trello em formato de calendário para planejar seus posts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Planner,
});
