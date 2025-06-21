export const education = [
	{
		degree: "Bachelorgrad i IT og Informasjonssystemer",
		school: "Universitetet i Sørøst-Norge",
		period: "2023 - d.d.",
		description:
			"Bachelorgraden gir et solid fundament innen programmering, databaser, systemutvikling og prosjektarbeid. Jeg har jobbet mye i team, og trives godt med både samarbeid og tekniske utfordringer. Fullstack-utvikling er et område jeg interesserer meg spesielt for, og jeg har mest erfaring med Java, React og PostgreSQL. Studiet har fokus på prosjektarbeid i grupper, webutvikling og java-programmering.",
	},
];

export function Education() {
	return (
		<section className="max-w-2xl mx-auto py-8 px-4" id="education">
			<h2 className="text-3xl font-extrabold mb-6 text-primary text-center tracking-tight">
				Utdanning
			</h2>
			<ul className="space-y-6">
				{education.map((edu, idx) => (
					<li
						key={idx}
						className="border border-primary/20 bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
					>
						<div className="font-bold text-lg text-primary mb-1 flex items-center gap-2">
							<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
							{edu.degree}
						</div>
						<div className="text-sm text-muted-foreground mb-2">
							{edu.school} | {edu.period}
						</div>
						<div className="mt-1 text-base leading-relaxed">
							{edu.description}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
