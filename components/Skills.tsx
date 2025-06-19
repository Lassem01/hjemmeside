const skills = [
  "Java","JavaFX","TypeScript", "React", "Next.js", "TailwindCSS", "Node.js", "Git", "Figma"
];

export function Skills() {
  return (
    <section className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-2">Ferdigheter</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <li key={skill} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
