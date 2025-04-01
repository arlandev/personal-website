export default function SectionHeading({ children }) {
  return (
    <h3 className="text-xl font-bold mb-8 rounded-full bg-zinc-200 px-6 py-2 text-black shadow-lg shadow-zinc-800/50 inline-block">
      {children}
    </h3>
  );
}
