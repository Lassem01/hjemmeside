import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center" id="hero">
      <div className="mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mx-auto shadow-lg bg-gray-200 flex items-center justify-center">
          {/* Sett inn ditt bilde i public-mappen og endre src under */}
          <img
            src="/CV bilde.JPG"
            alt="Profilbilde av Lasse Mostuen"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Hei, jeg er Lasse Mostuen</h1>
      <p className="text-lg text-muted-foreground mb-6">
        IT-student med lidenskap for utvikling, teknologi og problemløsning.
      </p>
      <Button size="lg" variant="knapp" asChild>
        <a href="#contact">Ta kontakt</a>
      </Button>
    </section>
  );
}
