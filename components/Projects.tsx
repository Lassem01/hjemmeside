const projects = [
	{
		name: "DiscGolf app",
		description:
			"En webapplikasjon som gir brukere mulighet til å logge inn, opprette et spill og legge inn antall kast per hull, se oversikt over baner som er opprettet ved bruk av en kartløsning, melde seg inn i klubber der de får nyheter og oppdateringer fra admins, lagre baner og få oppdateringer om vedlikehold.",
		link: "#",
	},
	{
		name: "Portfolio",
		description: "Min egen nettside bygget med Next.js og TailwindCSS.",
		link: "#",
	},
];

export function Projects() {
	return (
		<section className="max-w-2xl mx-auto py-8 px-4" id="projects">
			<h2 className="text-3xl font-extrabold mb-6 text-primary text-center tracking-tight">
				Prosjekter
			</h2>
			<div className="space-y-6">
				{projects.map((project) => (
					<div
						key={project.name}
						className="border border-primary/20 bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
					>
						<a
							href={project.link}
							className="text-lg font-bold text-primary hover:underline flex items-center gap-2 mb-1"
						>
							<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
							{project.name}
						</a>
						<p className="text-muted-foreground text-base leading-relaxed">
							{project.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
