export const education = [
	{
		degree: "Bachelorgrad i IT og Informasjonssystemer",
		school: "Universitetet i Sørøst-Norge",
		period: "2023 - d.d.",
		description:
			"Studerer informatikk med fokus på programmering, webutvikling og systemutvikling. To semestre grunnleggende Java og to semestre objektorientert Java-programmering.",
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
			<h2 className="text-2xl font-semibold mb-2">Utdanning</h2>
			<ul className="space-y-4">
				{education.map((edu, idx) => (
					<li key={idx} className="border rounded-lg p-4">
						<div className="font-bold text-lg">{edu.degree}</div>
						<div className="text-sm text-muted-foreground">
							{edu.school} | {edu.period}
						</div>
						<div className="mt-1">{edu.description}</div>
					</li>
				))}
			</ul>
		</section>
	);
}
