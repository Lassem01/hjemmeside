const projects = [
  {
    name: "DiscGolf app",
    description: "En webapplikasjon som gir brukere mulighet til å logge inn, opprette et spill og legge inn antall kast per hull, se oversikt over baner som er opprettet ved bruk av en kartløsning, melde seg inn i klubber der de får nyheter og oppdateringer fra admins, lagre baner og få oppdateringer om vedlikehold.",
    link: "#"
  },
  {
    name: "Portfolio",
    description: "Min egen nettside bygget med Next.js og TailwindCSS.",
    link: "#"
  }
];

export function Projects() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-2">Prosjekter</h2>
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.name} className="border rounded-lg p-4">
            <a href={project.link} className="text-lg font-bold hover:underline">{project.name}</a>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
