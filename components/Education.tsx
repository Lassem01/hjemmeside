export const education = [
	{
		degree: "Bachelorgrad i IT og Informasjonssystemer",
		school: "Universitetet i Sørøst-Norge",
		period: "2023 - d.d.",
		description:
			"Studerer informatikk med fokus på programmering, webutvikling og systemutvikling. To semestre grunnleggende Java og to semestre objektorientert Java-programmering.",
	},
	{
		degree: "Sport Extreme Australia (Folkehøgskole)",
		school: "Bakketun FHS",
		period: "August 2022 - Mai 2023",
		description: "Fallskjermhopping, surfing, klatring, dykking og downhillsykling.",
	},
	{
		degree: "Påbygg til generell studiekompetanse",
		school: "Metis Privatistskole",
		period: "2021 - 2022",
		description: "Fullført påbygg for å oppnå generell studiekompetanse.",
	},
	{
		degree: "Teknologi- og industrifag",
		school: "Osterøy VGS",
		period: "2017 - 2019",
		description: "Videregående utdanning innen teknologi og industrifag.",
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
