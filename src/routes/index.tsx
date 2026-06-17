import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIGA — SaaS RH intelligent pour le marché algérien" },
      { name: "description", content: "Pitch deck — SIGA : Développement d'un SaaS RH intelligent adapté au marché algérien. Mémoire de Master Génie Logiciel." },
      { property: "og:title", content: "SIGA — SaaS RH intelligent" },
      { property: "og:description", content: "Pitch deck de soutenance — Master Génie Logiciel, Université A/Mira de Béjaïa." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Deck />;
}
