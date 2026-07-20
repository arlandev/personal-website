// Content data structure matching chester.how style
export const contentItems = [
  // Projects
  {
    id: "shortlist",
    title: "ShortList: AI Resume Optimizer to help reach the first interview",
    category: "Projects",
    description:
      "Scores your resume against a job description, then simulates recruiters, interviewers, and rewrites to close the gap, all client-side with zero server storage.",
    tags: ["react", "vite", "typescript", "llm"],
    link: "https://shortlist.arlanabante.com/",
  },
  
  {
    id: "pdf-studio",
    title: "PDF Studio: Local-first PDF editor",
    category: "Projects",
    description:
      "I didn't want to pay for Adobe Acrobat, and most free online PDF editors are either terrible or upload your files to their servers. So I built my own. Has in-line editing, page operations, and undo/redo history, all running entirely locally in the browser. No server-side processing, no data leaving your device.\n\nTo be fair, Mac's Preview app is pretty good.",
    tags: ["react", "vite", "typescript", "pdf.js"],
    link: "https://pdf.arlanabante.com/",
  },

  {
    id: "toetictac",
    title: "ToeTicTac",
    category: "Projects",
    description:
      "A dynamic twist on Tic-Tac-Toe where players can only keep three pieces on the board. Built with Next.js as a learning project inspired by a real-life game concept.",
    tags: ["nextjs"],
    link: "https://toetictac.arlanabante.com/",
  },

  // Work

  {
    id: "enrichment-api",
    title: "Enrichment API: AI Video Processing Orchestration (ViralMoment)",
    category: "Work",
    description:
      "Designed and built a high-throughput AI video processing orchestration API platform. Orchestrates downstream AI pipelines for social media video processing, handling 500+ requests per second and generating $40k/month in recurring revenue.",
    tags: ["python", "aws", "kafka", "kubernetes", "api-gateway"],
    link: null,
  },

  {
    id: "data-bot",
    title: "Data Bot: Internal Data Intelligence Tool",
    category: "Work",
    description:
      "Built an internal MCP-powered LLM web application enabling authenticated users to query internal datasets via natural language, improving data accessibility for non-technical teams.",
    tags: ["nextjs", "llm", "mcp", "postgresql"],
    link: null,
  },


  {
    id: "ecm-alerts",
    title: "ECM Alerts: E-commerce Pricing Alert System",
    category: "Work",
    description:
      "Multi-ECM data ingestion pipeline leveraging API integration and web scraping to detect mispriced items and trigger real-time alerts. Prevented a $20k loss for one campaign.",
    tags: ["python", "selenium", "bigquery", "gcs", "pandas"],
    link: null,
  },

  // Research

  {
    id: "promorph",
    title: "ProMorph: Melanoma Classification Model",
    category: "Research",
    description:
      "A machine learning model that utilized transfer learning on a ResNet-50 model to classify dermoscopic images of melanoma.",
    tags: ["python", "tensorflow", "keras"],
    link: "https://dl.acm.org/doi/10.1145/3655497.3655510",
  },
];
