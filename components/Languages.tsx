export const languages = [
  {
    name: "Norsk - bokmål",
    oral: "Morsmål",
    written: "Morsmål"
  },
  {
    name: "Engelsk",
    oral: "Flytende",
    written: "Flytende"
  }
];

export function Languages() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4" id="languages">
      <h2 className="text-2xl font-semibold mb-2">Språk</h2>
      <ul className="space-y-2">
        {languages.map((lang, idx) => (
          <li key={idx} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <span className="font-bold">{lang.name}</span>
            <span className="text-sm text-muted-foreground">Muntlig: {lang.oral} | Skriftlig: {lang.written}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
