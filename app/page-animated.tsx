"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Grades } from "@/components/Grades";
import { Contact } from "@/components/Contact";

const tabs = [
	{ name: "Om meg", component: <About /> },
	{ name: "Erfaring", component: <Experience /> },
	{ name: "Utdanning", component: <Education /> },
	{ name: "Prosjekter", component: <Projects /> },
	{ name: "Karakterer", component: <Grades /> },
];

export default function HomeAnimated() {
	const [selected, setSelected] = useState(0);
	return (
		<main>
			<Hero />
			<div className="max-w-2xl mx-auto px-4">
				<div className="flex flex-wrap gap-2 justify-center mb-6">
					{tabs.map((tab, idx) => (
						<button
							key={tab.name}
							onClick={() => setSelected(idx)}
							className={`px-4 py-2 rounded-full font-medium transition-colors border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${
								selected === idx
									? "bg-primary text-primary-foreground"
									: "bg-background text-foreground hover:bg-accent"
							}`}
						>
							{tab.name}
						</button>
					))}
				</div>
				<div className="relative min-h-[400px] flex flex-col">
					<AnimatePresence mode="wait">
						<motion.div
							key={selected}
							initial={{ y: 60, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 60, opacity: 0 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
							className="absolute w-full"
							style={{ position: "relative" }}
						>
							{tabs[selected].component}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			<footer className="w-full border-t border-border mt-12 py-8 bg-background text-center relative z-10">
				<Contact />
			</footer>
		</main>
	);
}
