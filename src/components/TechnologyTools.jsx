export default function TechnologyTools({ tools }) {
  // use {var} here to turn var into a dictionary / array
  return (
    <div className="mt-4 flex flex-row items-center gap-4">
      <span>Tools:</span>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool, index) => (
          <div key={index} className="relative">
            <img
              src={`/svgs/${tool}.svg`}
              alt={tool}
              className="h-7 w-7 rounded-md border border-gray-200 bg-gray-100 p-1 duration-150 ease-in hover:border-gray-300 hover:bg-gray-200 peer"
            ></img>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 peer-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {tool.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
