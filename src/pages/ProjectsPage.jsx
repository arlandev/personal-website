import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

function ProjectsPage() {
  return (
    <div className="flex-1">
      <div className="min-h-screen py-8">
        <section className="w-full flex flex-col p-4" id="featured">
          <div className="w-full max-w-4xl mx-auto">
            <SectionHeading>featured work</SectionHeading>
            <div className="grid grid-cols-1 gap-8 w-full">
              <ProjectCard
                title="ProMorph: Melanoma Classification Model"
                description="A machine learning model that utilized transfer learning on a ResNet-50 model to classify dermoscopic images of melanoma."
                tools={["python", "tensorflow", "keras"]}
                imagePath=""
                imageAlt=""
                link="https://dl.acm.org/doi/10.1145/3655497.3655510"
              />

              <ProjectCard
                title="ThInq: UST's Helpdesk System"
                description="A university-wide helpdesk system that allows students, faculty, and staff to submit and track requests for assistance. Currently being rebuilt."
                tools={["expressjs", "nodejs", "mysql"]}
              />
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col p-4" id="projects">
          <div className="w-full max-w-4xl mx-auto">
            <SectionHeading>other projects</SectionHeading>
            <div className="grid grid-cols-1 gap-8 w-full">
              <ProjectCard
                title="Document Scanner: Document OCR Pipeline System"
                description="A document OCR pipeline system that uses Google's Document AI to extract text from PDF documents. Currently saves 80 hours per month."
                tools={[
                  "python",
                  "documentai",
                  "airflow",
                  "gcs",
                  "pandas",
                  "docker",
                ]}
              />

              <ProjectCard
                title="Shopee Data Scraper: End-to-End Data Pipeline"
                description="An automated ETL solution that extracts critical marketing metrics and order data from Shopee's Seller Center and Brand Portal across multiple brand accounts."
                tools={["python", "selenium", "bigquery", "gcs", "pandas"]}
                imagePath="/chrome2.jpg"
                imageAlt="Document Scanner: Document OCR Pipeline System"
              />

              <ProjectCard
                title="TGDC: Telegram-to-Discord Mirror"
                description="Python executable capable of reflecting messages of chosen Telegram channel to target Discord channels."
                tools={["python", "docker"]}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectsPage;
