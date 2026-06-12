import React, { useEffect, useState } from "react";
import { GoldDefs } from "./components/ui/GoldDefs.tsx";
import { ScrollProgress } from "./components/layout/ScrollProgress.tsx";
import { Navbar } from "./components/layout/Navbar.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp.tsx";
import { WishlistDrawer } from "./components/features/Wishlist.tsx";
import { COLLECTIONS } from "./constants/collections.ts";
import { useHashRoute } from "./hooks/useHashRoute.ts";
import { useWishlist } from "./hooks/useWishlist.ts";
import { Home } from "./pages/Home.tsx";
import { SobrePage } from "./pages/Sobre.tsx";
import { ContatoPage } from "./pages/Contato.tsx";
import { MedidasPage } from "./pages/Medidas.tsx";
import { PrivacidadePage } from "./pages/Privacidade.tsx";
import { TrocasPage } from "./pages/Trocas.tsx";
import { TermosPage } from "./pages/Termos.tsx";
import { CookieConsent } from "./components/layout/CookieConsent.tsx";

interface PageConfig {
  component: React.ComponentType<any>;
  title: string;
}

const PAGES: Record<string, PageConfig> = {
  sobre: { component: SobrePage, title: "Sobre nós" },
  contato: { component: ContatoPage, title: "Contato" },
  medidas: { component: MedidasPage, title: "Guia de medidas" },
  privacidade: { component: PrivacidadePage, title: "Política de privacidade" },
  trocas: { component: TrocasPage, title: "Trocas e devoluções" },
  termos: { component: TermosPage, title: "Termos de uso" },
};

export default function App() {
  const hash = useHashRoute();
  const page = hash.startsWith("#/") ? hash.slice(2) : "";
  const route = PAGES[page];
  const wishlist = useWishlist();
  const [wishlistOpen, setWishlistOpen] = useState(false);

  useEffect(() => {
    if (!hash || hash === "#") return;
    if (hash.startsWith("#/")) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [hash]);

  useEffect(() => {
    document.title = route
      ? `${route.title} — KR.JEWELRY`
      : "KR.JEWELRY — Alta Joalheria";
  }, [route]);

  return (
    <div className="min-h-screen overflow-x-clip bg-noir font-body text-ivory">
      <GoldDefs />
      <ScrollProgress />
      <Navbar
        solid={!!route}
        wishlistCount={wishlist.items.length}
        onOpenWishlist={() => setWishlistOpen(true)}
      />

      {route ? (
        <route.component />
      ) : (
        <Home wishlist={wishlist} />
      )}

      <Footer />
      <WishlistDrawer
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        items={wishlist.items}
        collections={COLLECTIONS}
        onToggle={wishlist.toggle}
        onClear={wishlist.clear}
      />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
}
