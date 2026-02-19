import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import { useState, useEffect } from "react";

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
      className="container mx-auto my-16 lg:w-10/12 xl:w-3/5 2xl:w-1/2 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-md font-thin tracking-wide">Arlan Abante</span>
          <div className="flex flex-row justify-between">
            <span className="text-md font-thin tracking-wide">Builder</span>
            <div className="flex flex-row items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-md font-thin tracking-wide">
                Philippines {philippineTime && `· ${philippineTime} PHT`}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="scroll-m-20 text-lg font-medium">Currently</h3>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <span className="whitespace-nowrap break-keep">
                  Aug 2025 - Present
                </span>
                <hr className="h-px w-full border-t border-dotted border-black dark:border-gray-600"></hr>
                <a
                  className="group flex flex-row items-center gap-px text-right hover:underline sm:whitespace-nowrap"
                  target="_blank"
                  href="https://www.linkedin.com/company/viralmoment"
                >
                  ViralMoment
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex flex-row justify-between gap-10">
                <span className="whitespace-nowrap break-keep sm:whitespace-nowrap">
                  Data Engineer
                </span>
                <span className="text-right text-gray-500 dark:text-gray-400">
                  Creating revenue-generating, production-ready microservice
                  APIs for AI-based social media video analysis. Focusing on
                  high impact, high throughput systems.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="scroll-m-20 text-lg font-medium">Experiences</h3>

            {/* Data Engineer */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <span className="whitespace-nowrap break-keep">
                  Aug 2024 - July 2025
                </span>
                <hr className="h-px w-full border-t border-dotted border-black dark:border-gray-600"></hr>
                <a
                  className="group flex flex-row items-center gap-px text-right hover:underline sm:whitespace-nowrap"
                  target="_blank"
                  href="https://www.linkedin.com/company/focus-global-inc/"
                >
                  Focus Global Inc.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex flex-row justify-between gap-10">
                <span className="whitespace-nowrap break-keep sm:whitespace-nowrap">
                  Data Engineer
                </span>
                <span className="text-right text-gray-500 dark:text-gray-400">
                  Built scalable data pipelines, developed automation tools to
                  streamline internal workflows, and improved data accessibility
                  for non-technical teams.
                </span>
              </div>
            </div>

            <div></div>

            {/* Full Stack Engineer */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <span className="whitespace-nowrap break-keep font-light">
                  2022 September - 2023 May
                </span>
                <hr className="h-px w-full border-t border-dotted border-black dark:border-gray-600"></hr>
                <span className="group flex flex-row items-center gap-px text-right sm:whitespace-nowrap">
                  Timith Automations
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between gap-10">
                  <span className="whitespace-nowrap break-keep sm:whitespace-nowrap">
                    Full Stack Engineer
                  </span>
                  <span className="text-right text-gray-500 dark:text-gray-400">
                    Developed a blockchain-connected web application with user
                    authentication and support for blockchain transactions.
                    Handled 200+ transactions per minute and supported over
                    3,000 concurrent visitors.
                  </span>
                </div>
              </div>
            </div>

            <div></div>

            {/* Quality Assurance Tester */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <span className="whitespace-nowrap break-keep font-light">
                  2022 March - 2023 January
                </span>
                <hr className="h-px w-full border-t border-dotted border-black dark:border-gray-600"></hr>
                <span className="group flex flex-row items-center gap-px text-right sm:whitespace-nowrap">
                  MinTech Bots
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between gap-10">
                  <span className="whitespace-nowrap break-keep sm:whitespace-nowrap">
                    Quality Assurance Tester
                  </span>
                  <span className="text-right text-gray-500 dark:text-gray-400">
                    Collaborated with an international team to rigorously test
                    and debug automation software, identifying issues and
                    implementing fixes to ensure a seamless user experience.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="scroll-m-20 text-lg font-medium">Achievements</h3>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <span className="whitespace-nowrap break-keep font-light">
                  2024
                </span>
                <hr className="h-px w-full border-t border-dotted border-black dark:border-gray-600"></hr>
                <span className="group flex flex-row items-center gap-px text-right sm:whitespace-nowrap">
                  Graduated Magna Cum Laude
                </span>
              </div>
            </div>

            <div></div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <span className="whitespace-nowrap break-keep font-light">
                  2024
                </span>
                <hr className="h-px w-full border-t border-dotted border-black dark:border-gray-600"></hr>
                <a
                  className="group flex flex-row items-center gap-px text-right hover:underline sm:whitespace-nowrap"
                  target="_blank"
                  href="https://dl.acm.org/doi/10.1145/3655497.3655510"
                >
                  ProMorph
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between gap-10">
                  <span className="whitespace-nowrap break-keep sm:whitespace-nowrap">
                    Machine Learning Developer & Researcher
                  </span>
                  <span className="text-right text-gray-500 dark:text-gray-400">
                    Published a scientific paper on melanoma classification
                    using dermascopic images and machine learning.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default HistoryPage;
