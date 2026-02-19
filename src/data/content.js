// Content data structure matching chester.how style
export const contentItems = [
  // Projects
  {
    id: "enrichment-api",
    title: "Enrichment API, AI Video Processing Orchestration (ViralMoment)",
    category: "Projects",
    description:
      "Designed and built a high-throughput AI video processing orchestration API platform. Orchestrates downstream AI pipelines for social media video processing, handling 500+ requests per second and generating $40k/month in recurring revenue.",
    tags: ["python", "aws", "kafka", "kubernetes", "api-gateway"],
    link: null,
  },
  {
    id: "data-bot",
    title: "Data Bot: Internal Data Intelligence Tool",
    category: "Projects",
    description:
      "Built an internal MCP-powered LLM web application enabling authenticated users to query internal datasets via natural language, improving data accessibility for non-technical teams.",
    tags: ["nextjs", "llm", "mcp", "postgresql"],
    link: null,
  },
  {
    id: "ecm-alerts",
    title: "ECM Alerts, E-commerce Pricing Alert System",
    category: "Projects",
    description:
      "Multi-ECM data ingestion pipeline leveraging API integration and web scraping to detect mispriced items and trigger real-time alerts, preventing pricing errors and reducing potential losses.",
    tags: ["python", "selenium", "bigquery", "gcs", "pandas"],
    link: null,
  },
  {
    id: "promorph",
    title: "ProMorph: Melanoma Classification Model",
    category: "Projects",
    description:
      "A machine learning model that utilized transfer learning on a ResNet-50 model to classify dermoscopic images of melanoma.",
    tags: ["python", "tensorflow", "keras"],
    link: "https://dl.acm.org/doi/10.1145/3655497.3655510",
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
];
