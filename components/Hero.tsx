import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center py-16 text-center" id="hero">
      <div className="mb-6">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary mx-auto shadow-lg bg-gray-200 flex items-center justify-center">
          <img
            src="/CVbilde.JPG"
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
        className="rounded-full px-6 py-2 text-base font-medium shadow border border-primary/20 bg-accent/70 text-primary hover:bg-accent/90 hover:scale-105 transition-all duration-200 mb-3"
        onClick={() => setShowContact(true)}
      >
        <span className="inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25v-1.5M17.25 8.25l-5.25 5.25-5.25-5.25" /></svg>
          Kontakt meg
        </span>
      </Button>
      <a
        href="https://github.com/Lassem01"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-base font-medium shadow border border-primary/20 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 transition-all duration-200 mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Gå til Lasse Mostuens GitHub-profil"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
        </svg>
        <span>Min GitHub</span>
      </a>
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
            <Button
              className="absolute top-2 right-2 text-xl text-muted-foreground hover:text-primary"
              onClick={() => setShowContact(false)}
              aria-label="Lukk kontaktboks"
            >
              ×
            </Button>
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
