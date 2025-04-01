import TechnologyTools from "./TechnologyTools";

export default function ProjectCard(props) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-zinc-100 bg-zinc-50/50 duration-100 ease-in hover:border-zinc-200 hover:bg-zinc-100/60 hover:shadow-sm md:flex-row md:justify-between">
      <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-between">
        <div className="group p-4">
          <div className="flex flex-row items-center justify-center gap-2 md:items-start md:justify-start">
            <h4 className="scroll-m-20 text-center text-xl font-semibold tracking-tight md:text-left mb-5">
              {props.title}
            </h4>
            {props.link && (
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="size-5 flex-shrink-0 self-center hover:text-blue-200 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </a>
            )}
          </div>

          <p className="font-display bg-clip-text text-center text-sm tracking-[-0.02em] text-gray-500 md:text-left">
            {props.description}
          </p>

          <TechnologyTools tools={props.tools} />
        </div>

        <div className="h-[150px] w-[150px] flex-shrink-0 overflow-hidden p-4">
          {props.link &&
            props.imagePath &&
            props.imageAlt(
              <a href={props.link}>
                <img
                  src={props.imagePath}
                  alt={props.imageAlt}
                  className="h-full w-full cursor-pointer rounded-md bg-white/30 object-cover shadow-sm duration-150 ease-in hover:shadow-lg hover:backdrop-grayscale-0"
                />
              </a>
            )}
        </div>
      </div>
    </div>
  );
}
