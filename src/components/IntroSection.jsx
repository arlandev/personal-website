export default function IntroSection() {
  return (
    <div
      className="h-[80vh] flex items-center justify-center relative"
      id="introduction"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain z-0 drop-shadow-2xl backdrop-blur-3xl"
        style={{
          backgroundImage: "url('/whitecircle.svg')",
          backgroundSize: "35%",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 transform translate-y-0">
        <h1 className="text-center">
          <p className="text-6xl md:text-8xl font-normal drop-shadow-2xl">
            <span className="font-thin">hi,</span>
            <span className="font-serif italic">i'm arlan</span>
          </p>
          <p className="text-xl md:text-2xl font-thin mt-4">
            i'm currently a
            <span className="font-medium italic"> data engineer</span> based in
            manila, philippines. i have an extensive background
            <span className="font-medium"> in several disciplines.</span>
          </p>
          <p className="text-xl md:text-2xl font-thin mt-3">
            in my spare time, i work on projects that i find exciting—especially
            for growth and learning.
          </p>
          <p className="text-xl md:text-2xl font-thin mt-3">
            you can check them all out{" "}
            <a className="font-medium underline" href="/projects">
              here
            </a>
            . also, try pressing{" "}
            <kbd className="font-mono font-medium rounded bg-zinc-800 text-white text-sm inline-flex items-center justify-center min-w-5">
              c
            </kbd>
            .
          </p>
        </h1>
      </div>
    </div>
  );
}
