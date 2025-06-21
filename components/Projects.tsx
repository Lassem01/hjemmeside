const studyProjects = [
	{
		name: "DiscGolf app",
		description: (
			<>
				<span className="block mb-2 font-medium text-primary">
					Discprof er en disc golf-applikasjon utviklet som et prosjektarbeid for APP2000 ved USN Bø for studieåret 2024/2025.
				</span>
				Applikasjonen lar brukere:
				<ul className="list-disc list-inside mb-2">
					<li>Finne og utforske disc golf-baner i hele Norge med detaljert informasjon</li>
					<li>Se interaktive kart over banene med hullinformasjon (OpenLayers)</li>
					<li>Spore spillresultater og personlige statistikker</li>
					<li>Vurdere og anmelde baner</li>
					<li>Delta i fellesskap og turneringer</li>
					<li>Motta varsler om banevedlikehold og arrangementer</li>
					<li>Se sanntids værdata for hver bane, hentet basert på banens geografiske plassering</li>
					<li>Bruke applikasjonen på flere språk (flerspråklig støtte)</li>
				</ul>
				<a
					href="https://github.com/Lassem01/APP2000_G02_25"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors duration-150"
				>
					Se prosjektet på GitHub
				</a>
			</>
		),
		link: "#",
	},
];

const hobbyProjects = [
	{
		name: "Portfolio",
		description: (
			<>
				Dette prosjektet er min personlige portefølje og digitale CV. Her kan du bli litt bedre kjent med meg, se hva jeg har jobbet med, hvilke ferdigheter jeg har, og hvilke prosjekter jeg har gjennomført. Nettsiden er bygget med Next.js og TailwindCSS, og er laget for å gi et helhetlig og moderne inntrykk til deg som vurderer å samarbeide med meg – enten du er potensiell arbeidsgiver, kollega eller bare nysgjerrig.
				<br />
				<br />
				<a
					href="https://github.com/Lassem01/hjemmeside"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 underline font-semibold hover:text-blue-800 transition-colors duration-150"
				>
					Se prosjektet på GitHub
				</a>
			</>
		),
		link: "#",
	},
];

export function Projects() {
	return (
		<section className="max-w-2xl mx-auto py-8 px-4" id="projects">
			<h2 className="text-3xl font-extrabold mb-6 text-primary text-center tracking-tight">
				Prosjekter
			</h2>
			<div className="space-y-8">
				<div>
					<h3 className="text-xl font-bold mb-4 text-primary text-center">
						Studieprosjekt
					</h3>
					<div className="space-y-6">
						{studyProjects.map((project) => (
							<div
								key={project.name}
								className="border border-primary/20 bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
							>
								<div className="text-lg font-bold text-primary flex items-center gap-2 mb-1">
									<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
									{project.name}
								</div>
								<p className="text-muted-foreground text-base leading-relaxed">
									{project.description}
								</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h3 className="text-xl font-bold mb-4 text-primary text-center">
						Hobbyprosjekt
					</h3>
					<div className="space-y-6">
						{hobbyProjects.map((project) => (
							<div
								key={project.name}
								className="border border-primary/20 bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
							>
								<div className="text-lg font-bold text-primary flex items-center gap-2 mb-1">
									<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
									{project.name}
								</div>
								<p className="text-muted-foreground text-base leading-relaxed">
									{project.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
