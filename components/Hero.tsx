import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center" id="hero">
      <div className="mb-6">
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary mx-auto shadow-lg bg-gray-200 flex items-center justify-center">
          {/* Sett inn ditt bilde i public-mappen og endre src under */}
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
        asChild
        className="rounded-full px-6 py-2 text-base font-medium shadow border border-primary/20 bg-accent/70 text-primary hover:bg-accent/90 hover:scale-105 transition-all duration-200"
      >
        <a href="#contact">
          <span className="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25v-1.5M17.25 8.25l-5.25 5.25-5.25-5.25" /></svg>
            Ta kontakt
          </span>
        </a>
      </Button>
    </section>
  );
}
