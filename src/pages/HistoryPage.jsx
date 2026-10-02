import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import { useState, useEffect } from "react";

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const sections = [
  {
    heading: "currently",
    entries: [
      {
        period: "October 2026 - Present",
        org: "The Imaginarium",
        href: "https://www.imaginarium.vc/",
        role: "AI Full Stack Engineer",
        summary:
          "Building intelligent tech that act as cornerstones for businesses.",
      },
    ],
  },
  {
    heading: "experience",
    entries: [
      {
        period: "March 2026 — October 2026",
        org: "P&G",
        href: "https://www.linkedin.com/company/procter-and-gamble/",
        role: "AI/Software/Platform Engineer",
        summary:
          "Pushed frontier tech in AMA GBS. Built the first iteration of 'Native AI' - an all-in-one autonomous AI solution for the IMDO team. In parallel, I built infra and dev tools from the ground up for our small engineering team which helped introduce best engineering practices. I ended my stint early to pursue a role focused on engineering.",
      },
      {
        period: "Aug 2025 — Feb 2026",
        org: "ViralMoment",
        href: "https://www.linkedin.com/company/viralmoment",
        role: "Data & Backend Engineer",
        summary:
          "Built revenue-generating, production-ready microservice APIs for AI-leveraged social media video analysis. Built knowledge on high impact, high throughput systems. Engineered the Enrichment API - orchestration infrastructure that handled +500 RPS.",
      },
      {
        period: "Aug 2024 — Jul 2025",
        org: "Focus Global Inc.",
        href: "https://www.linkedin.com/company/focus-global-inc/",
        role: "Data Engineer",
        summary:
          "Built scalable data pipelines, developed automation tools to streamline internal workflows, and improved data accessibility for non-technical teams.",
      },
      {
        period: "Sep 2022 — May 2023",
        org: "Timith Automations",
        role: "Full Stack Engineer",
        summary:
          "Developed a Web3 bot automating blockchain actions like minting and wallet/asset management, processing 300,000+ automated transactions per month across 2,000 reccuring users. Generated $5.6MM in software license revenue. Generated users $12MM net gains from 2022 to 2023.",
      },
      {
        period: "Mar 2022 — Jan 2023",
        org: "MinTech Bots",
        role: "QA Engineer",
        summary:
          "Collaborated with an international team to rigorously test and debug automation software, identifying issues and implementing fixes to ensure a seamless user experience.",
      },
    ],
  },
  {
    heading: "achievements",
    entries: [
      {
        period: "2024",
        org: "Graduated Magna Cum Laude",
      },
      {
        period: "2024",
        org: "ProMorph",
        href: "https://dl.acm.org/doi/10.1145/3655497.3655510",
        role: "Machine Learning Developer & Researcher",
        summary:
          "Published a scientific paper on melanoma classification using dermascopic images and machine learning.",
      },
    ],
  },
];

function HistoryPage() {
  usePageTitle("History");
  const [philippineTime, setPhilippineTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const phTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Manila",
      });
      setPhilippineTime(phTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.main
      className="max-w-3xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Identity header */}
      <div className="flex flex-col gap-1 mb-12">
        <div className="flex flex-row items-baseline justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
            Arlan Abante
          </h1>
          <div className="flex flex-row items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="font-mono text-[13px] text-zinc-400">
              Philippines {philippineTime && `· ${philippineTime} PHT`}
            </span>
          </div>
        </div>
        <span className="font-mono text-[13px] text-zinc-500">
          builder — ai fullstack engineer
        </span>
      </div>

      <div className="flex flex-col gap-14">
        {sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-6">
            <h2 className="font-mono text-[13px] tracking-widest uppercase text-zinc-500">
              {section.heading}
            </h2>

            {section.entries.map((entry) => (
              <div
                key={entry.org + entry.period}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-row items-center gap-3">
                  <span className="font-mono text-[13px] text-zinc-400 whitespace-nowrap">
                    {entry.period}
                  </span>
                  <hr className="hr-fade w-full" />
                  {entry.href ? (
                    <a
                      className="group flex flex-row items-center gap-1 text-zinc-100 hover:text-accent transition-colors whitespace-nowrap"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={entry.href}
                    >
                      {entry.org}
                      <ExternalIcon />
                    </a>
                  ) : (
                    <span className="text-zinc-100 whitespace-nowrap">
                      {entry.org}
                    </span>
                  )}
                </div>
                {(entry.role || entry.summary) && (
                  <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-10">
                    {entry.role && (
                      <span className="font-mono text-[13px] text-zinc-300 whitespace-nowrap">
                        {entry.role}
                      </span>
                    )}
                    {entry.summary && (
                      <span className="text-sm sm:text-right text-zinc-500 leading-relaxed">
                        {entry.summary}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    </motion.main>
  );
}

export default HistoryPage;
