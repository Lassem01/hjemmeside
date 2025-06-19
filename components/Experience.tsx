export const experience = [
	{
		title: "Sommarvikar, Teknisk avdeling",
		company: "Bø Sommarland",
		period: "Juni 2024 - August 2024",
		description:
			"Daglig drift av parkens attraksjoner med tilhørende utstyr, alle øvrige installasjoner, bygg og utearealer.",
	},
	{
		title: "Sesongarbeider, Driftsenhet Syd",
		company: "Bergen Kommune, Etat for bygg og eiendom",
		period: "Juni 2023 - August 2023 / Juni 2022 - August 2022",
		description:
			"Drift og vedlikehold av uteområder. Klippe plen, luking i blomsterbed, trimming av busker og hekker.",
	},
	{
		title: "Sjåfør, vikar (33%)",
		company: "Posten, Bergen",
		period: "August 2021 - Mai 2022 / Juli 2019 - Juli 2021",
		description:
			"Levering av pakker hjem til kunder på kveldene og sortering av pakker på postterminal.",
	},
	{
		title: "Lærling",
		company: "Dahle Mekaniske Verksted AS",
		period: "Juli 2019 - Juli 2021",
		description:
			"Arbeid har bestått av sveising, platearbeid og diverse montering av stålkonstruksjoner som f.eks. trapper, rekkverk, balkonger og gulv. Fagbrev ble bestått i juni 2021.",
	},
	{
		title: "Styremedlem i utvalg",
		company: "Kroa i Bø",
		period: "September 2024 - d.d.",
		description: "Verv som styremedlem i utvalg.",
	},
];

export function Experience() {
	return (
		<section className="max-w-2xl mx-auto py-8 px-4" id="experience">
			<h2 className="text-2xl font-semibold mb-2">Erfaring</h2>
			<ul className="space-y-4">
				{experience.map((exp, idx) => (
					<li key={idx} className="border rounded-lg p-4">
						<div className="font-bold text-lg">{exp.title}</div>
						<div className="text-sm text-muted-foreground">
							{exp.company} | {exp.period}
						</div>
						<div className="mt-1">{exp.description}</div>
					</li>
				))}
			</ul>
		</section>
	);
}
