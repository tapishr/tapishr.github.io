const projectsData = {
	categories: [
		{ id: "ai-eval", name: "AI Evaluation & Measurement" },
		{ id: "ai-ml", name: "AI & Machine Learning" },
		{ id: "dev-tools", name: "Developer Tools" },
		{ id: "infra", name: "Data & Infrastructure" },
		{ id: "startups", name: "Startups" }
	],
	projects: [
		{
			title: "evalstats",
			shortDescription: "Statistical honesty for AI agent evaluations.",
			fullDescription: "Agent benchmarks are expensive, low-N and high-variance, and most published improvements ship without error bars. evalstats provides the machinery those reports skip: Wilson confidence intervals, the exact McNemar test and paired-difference intervals for comparing two systems on the same task set, and power analysis for minimal detectable difference. The headline result, reproducible with zero compute from data submissions already publish: at N=500 on SWE-bench Verified, differences under roughly 4-6 points are statistically indistinguishable — so 97% of adjacent leaderboard pairs are noise.",
			techStack: ["Python", "Statistics", "McNemar", "Power Analysis"],
			categories: ["ai-eval", "ai-ml"],
			links: [
				{ text: "Read the essay", url: "https://github.com/tapishr/evalstats/blob/main/ESSAY.md" },
				{ text: "Interactive widget", url: "https://tapishr.github.io/evalstats/widget/" },
				{ text: "Source", url: "https://github.com/tapishr/evalstats" }
			],
			featured: true
		},
		{
			title: "novelty-drift",
			shortDescription: "Does the optimal-novelty point move as an audience learns a genre?",
			fullDescription: "A feasibility probe with its decision rule pre-committed in writing before the real-data run, so the verdict could not be rationalised afterwards. The instrument fires on injected drift, stays silent on a stationary null, and — critically — stays silent on a scale-inflation artefact that fools the naive measure. Validated on 515k Million Song Dataset tracks with 90-dimensional timbre vectors and 114k Spotify tracks. It has already produced one methodological finding: relative, scale-free novelty is load-bearing; raw distance is not trustworthy across time.",
			techStack: ["Python", "NumPy", "Bootstrap CIs", "Pre-registration"],
			categories: ["ai-eval", "ai-ml"],
			links: [
				{ text: "Source", url: "https://github.com/tapishr/novelty-drift" },
				{ text: "The probe protocol", url: "https://github.com/tapishr/novelty-drift/blob/main/PROBE.md" }
			],
			featured: true
		},
		{
			title: "Kavi",
			shortDescription: "A multi-tenant AI agent runtime running a company's operations.",
			fullDescription: "230 typed capabilities and 22 durable Temporal workflows, with business units isolated by a Postgres row-level-security wall rather than by application convention. Includes a server-side approval firewall built after a red-team finding: irreversible actions cannot execute unless the run's own message history proves a human approved them — bound to the specific verb and single-use, so it survives prompt injection and replay. Deploys are gated by a self-evaluation harness with held-in, held-out, sealed and canary task sets.",
			techStack: ["Python", "Temporal", "Modal", "Postgres RLS", "LLM agents"],
			categories: ["ai-ml", "infra"],
			links: [],
			featured: true
		},
		{
			title: "Vibinex",
			shortDescription: "Privacy-first code review, built as CTO and co-founder.",
			fullDescription: "A developer-tools startup I co-founded and led as CTO for three years. Vibinex visualises code changes as a graph and adds reviewer context directly in the GitHub and Bitbucket review interface. I wrote most of the Rust data-processing engine — 575 of its commits — on a dual-backend architecture where sensitive customer code stays on-prem while encrypted metadata reaches cloud APIs.",
			techStack: ["Rust", "TypeScript", "Next.js", "Chrome Extension", "Docker"],
			categories: ["dev-tools", "startups"],
			links: [
				{ text: "Website", url: "https://vibinex.com" },
				{ text: "vibi-dpu (Rust engine)", url: "https://github.com/vibinex/vibi-dpu" },
				{ text: "DiffGraph generator", url: "https://github.com/vibinex/diff-graph-generator" }
			],
			featured: true
		},
		{
			title: "Generative media fleet",
			shortDescription: "Eight self-hosted GPU apps replacing per-clip video APIs.",
			fullDescription: "A self-hosted generative-media fleet across 8 Modal GPU apps (WAN 2.2, LTX-2, Flux, SDXL, Whisper, vLLM), replacing third-party video APIs that cost $1.20-4.00 per clip in a Meta ads pipeline. Owning the rollout meant owning capacity, cost and failure handling — not just the model choice.",
			techStack: ["Modal", "PyTorch", "vLLM", "Diffusion models"],
			categories: ["ai-ml", "infra"],
			links: [],
			featured: false
		},
		{
			title: "Video-to-3D character pipeline",
			shortDescription: "Monocular motion capture to rendered 3D, as one durable workflow.",
			fullDescription: "Monocular motion capture (GVHMR/SMPL-X), retargeting onto Mixamo/Unreal/Rigify rigs, and Blender/OptiX GPU render — chained into a single durable workflow with human-in-the-loop rig approval. From the same footage I solved single-camera ball physics, recovering launch position to 2.4cm and velocity to 0.019 m/s, and fed exact-physics props back into the render.",
			techStack: ["Blender/bpy", "SMPL-X", "OptiX", "Computer Vision"],
			categories: ["ai-ml"],
			links: [],
			featured: false
		},
		{
			title: "AWS Glue infrastructure",
			shortDescription: "Serverless ETL at roughly a million job runs a day.",
			fullDescription: "Infrastructure team for AWS Glue, a distributed serverless ETL service supporting close to one million job runs every day from thousands of customers worldwide.",
			techStack: ["Java", "Distributed Systems", "AWS"],
			categories: ["infra"],
			links: [],
			featured: false
		},
		{
			title: "Telemetry pipelines at 10TB/day",
			shortDescription: "Led data engineering for a real-money gaming platform.",
			fullDescription: "Led a team of four building pipelines for 10TB+ of daily gameplay and player telemetry across TimeseriesDB, Firestore and Redis, owning GDPR compliance, access control, backups and cost optimisation.",
			techStack: ["Python", "Firestore", "Redis", "TimeseriesDB", "GCP"],
			categories: ["infra"],
			links: [],
			featured: false
		},
		{
			title: "Nebulaa grain classification",
			shortDescription: "Computer vision for agricultural grain grading, built from scratch.",
			fullDescription: "Co-founded Nebulaa Innovations and engineered a prototype computer-vision grain classification system end to end — data collection, labelling, model training and deployment in Python, Theano and TensorFlow.",
			techStack: ["Python", "Theano", "TensorFlow", "Computer Vision"],
			categories: ["ai-ml", "startups"],
			links: [{ text: "Website", url: "https://www.nebulaa.in" }],
			featured: false
		}
	]
};

export { projectsData };
