import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center py-16 text-center" id="hero">
      <div className="mb-6">
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary mx-auto shadow-lg bg-gray-200 flex items-center justify-center">
          <img
            src="/CV bilde.JPG"
            alt="Profilbilde av Lasse Mostuen"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Hei, jeg er Lasse Mostuen</h1>
      <ul className="mb-6 text-base text-muted-foreground space-y-1">
        <li><span className="font-semibold text-foreground">Nåværende stilling:</span> Student</li>
        <li><span className="font-semibold text-foreground">Statsborgerskap:</span> Norsk</li>
        <li><span className="font-semibold text-foreground">Fødselsdato:</span> 11.07.2001</li>
      </ul>
      <p className="text-lg text-muted-foreground mb-6">
        IT-student med lidenskap for utvikling, teknologi og problemløsning.
      </p>
      <Button
        size="lg"
        variant="knapp"
        asChild={false}
        className="rounded-full px-6 py-2 text-base font-medium shadow border border-primary/20 bg-accent/70 text-primary hover:bg-accent/90 hover:scale-105 transition-all duration-200"
        onClick={() => setShowContact(true)}
      >
        <span className="inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25v-1.5M17.25 8.25l-5.25 5.25-5.25-5.25" /></svg>
          Kontakt meg
        </span>
      </Button>
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-xl text-muted-foreground hover:text-primary"
              onClick={() => setShowContact(false)}
              aria-label="Lukk kontaktboks"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-2 text-primary">Kontaktinformasjon</h3>
            <ul className="text-base text-muted-foreground space-y-1 mb-2">
              <li><span className="font-semibold text-foreground">E-post:</span> lassemostuen@gmail.com</li>
              <li><span className="font-semibold text-foreground">LinkedIn:</span> <a href="https://www.linkedin.com/in/lasse-mostuen-64a820320/" className="underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/lasse-mostuen</a></li>
            </ul>
            <p className="text-xs text-muted-foreground">Du finner også kontaktinfo nederst på siden.</p>
          </div>
        </div>
      )}
    </section>
  );
}
