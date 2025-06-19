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
			<h2 className="text-3xl font-extrabold mb-6 text-primary text-center tracking-tight">
				Erfaring
			</h2>
			<ul className="space-y-6">
				{experience
					.filter((exp) => exp.title !== "Styremedlem i utvalg")
					.map((exp, idx) => (
						<li
							key={idx}
							className="border border-primary/20 bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
						>
							<div className="font-bold text-lg text-primary mb-1 flex items-center gap-2">
								<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
								{exp.title}
							</div>
							<div className="text-sm text-muted-foreground mb-2">
								{exp.company} | {exp.period}
							</div>
							<div className="mt-1 text-base leading-relaxed">
								{exp.description}
							</div>
						</li>
					))}
			</ul>
			<h3 className="text-xl font-semibold mt-10 mb-3 text-secondary-foreground">
				Annen erfaring
			</h3>
			<ul className="space-y-4">
				{experience
					.filter((exp) => exp.title === "Styremedlem i utvalg")
					.map((exp, idx) => (
						<li
							key={idx}
							className="border border-accent bg-accent/40 rounded-xl p-5 shadow-sm"
						>
							<div className="font-bold text-lg text-accent-foreground mb-1 flex items-center gap-2">
								<span className="inline-block w-2 h-2 bg-accent rounded-full"></span>
								{exp.title}
							</div>
							<div className="text-sm text-muted-foreground mb-2">
								{exp.company} | {exp.period}
							</div>
							<div className="mt-1 text-base leading-relaxed">
								{exp.description}
							</div>
						</li>
					))}
			</ul>
		</section>
	);
}
