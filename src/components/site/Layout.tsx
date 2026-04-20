import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export const WHATSAPP_URL = "https://wa.me/919346003989";
export const PHONE = "+91 93460 03989";
export const EMAIL = "sohailali8480@gmail.com";
