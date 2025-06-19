export const grades = [
	{
		subject: "DAT1000 Database 1",
		school: "USN",
		year: "2023 høst",
		credits: "7,5",
		grade: "D",
	},
	{
		subject: "INF1000 Informasjonssystemer",
		school: "USN",
		year: "2023 høst",
		credits: "7,5",
		grade: "C",
	},
	{
		subject: "PRG1000 Grunnleggende programmering 1",
		school: "USN",
		year: "2023 høst",
		credits: "7,5",
		grade: "D",
	},
	{
		subject: "WEB1100 Webutvikling og HCI",
		school: "USN",
		year: "2023 høst",
		credits: "7,5",
		grade: "D",
	},
	{
		subject: "ORL1000 Organisering og ledelse",
		school: "USN",
		year: "2024 vår",
		credits: "7,5",
		grade: "C",
	},
	{
		subject: "PRO1000 Praktisk prosjektarbeid",
		school: "USN",
		year: "2024 vår",
		credits: "7,5",
		grade: "B",
	},
	{
		subject: "SYS1000 Systemutvikling",
		school: "USN",
		year: "2024 vår",
		credits: "7,5",
		grade: "A",
	},
	{
		subject: "DAT2000 Database 2",
		school: "USN",
		year: "2024 høst",
		credits: "7,5",
		grade: "E",
	},
	{
		subject: "ESB1000 Etikk og samfunnsansvar",
		school: "USN",
		year: "2024 høst",
		credits: "7,5",
		grade: "C",
	},
	{
		subject: "OBJ2000 Objektorientert programmering 1",
		school: "USN",
		year: "2024 høst",
		credits: "7,5",
		grade: "C",
	},
	{
		subject: "PRG1100 Grunnleggende programmering 2",
		school: "USN",
		year: "2024 høst",
		credits: "7,5",
		grade: "D",
	},
	{
		subject: "APP2000 Applikasjonsutvikling for web",
		school: "USN",
		year: "2025 vår",
		credits: "15",
		grade: "B",
	},
	{
		subject: "OBJ2100 Objektorientert programmering 2",
		school: "USN",
		year: "2025 vår",
		credits: "7,5",
		grade: "B",
	},
	{
		subject: "MET1020 Samfunnsvitenskapelig metode",
		school: "USN",
		year: "2025 vår",
		credits: "7,5",
		grade: "E",
	},
	{
		subject: "SIK2000 Informasjonssikkerhet",
		school: "USN",
		year: "2025 vår",
		credits: "7,5",
		grade: "E",
	},
	// Legg til flere karakterer her
];

const gradeOrder: Record<string, number> = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6 };

export function Grades() {
	return (
		<section
			className="max-w-2xl mx-auto py-8 px-4"
			id="grades"
		>
			<h2 className="text-3xl font-extrabold mb-6 text-primary text-center tracking-tight">
				Karakterer
			</h2>
			<ul className="space-y-6">
				{grades
					.slice()
					.sort((a, b) => (gradeOrder[a.grade as string] ?? 99) - (gradeOrder[b.grade as string] ?? 99))
					.map((g, idx) => (
						<li
							key={idx}
							className="border border-primary/20 bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
						>
							<div>
								<div className="font-bold text-lg text-primary mb-1 flex items-center gap-2">
									<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
									{g.subject}
								</div>
								<div className="text-sm text-muted-foreground mb-2">
									{g.school} | {g.year} | {g.credits} studiepoeng
								</div>
							</div>
							<div className="text-2xl font-bold text-accent-foreground bg-accent px-4 py-2 rounded-full shadow">
								{g.grade}
							</div>
						</li>
					))}
			</ul>
		</section>
	);
}
