export const languages = [
	{
		name: "Norsk - bokmål",
		oral: "Morsmål",
		written: "Morsmål",
	},
	{
		name: "Engelsk",
		oral: "Flytende",
		written: "Flytende",
	},
];

export function Languages() {
	return (
		<section className="max-w-2xl mx-auto py-8 px-4" id="languages">
			<h2 className="text-3xl font-extrabold mb-6 text-primary text-center tracking-tight">
				Språk
			</h2>
			<ul className="space-y-6">
				{languages.map((lang, idx) => (
					<li
						key={idx}
						className="border border-primary/20 bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
					>
						<div className="font-bold text-lg text-primary mb-1 flex items-center gap-2">
							<span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
							{lang.name}
						</div>
						<div className="text-sm text-muted-foreground mb-2">
							Muntlig: {lang.oral} | Skriftlig: {lang.written}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
