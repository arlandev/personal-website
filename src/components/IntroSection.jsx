export default function IntroSection() {
  return (
    <div
      className="h-[70vh] flex items-center justify-center relative"
      id="introduction"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain z-0 drop-shadow-2xl backdrop-blur-3xl"
        style={{
          backgroundImage: "url('/whitecircle.svg')",
          backgroundSize: "35%",
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-center">
          <p className="text-8xl font-normal drop-shadow-2xl">
            <span className="font-thin">hi,</span>
            <span className="text-8xl font-serif italic">i'm arlan</span>
          </p>
          <p className="text-2xl font-thin">
            i'm currently a
            <span className="font-medium italic"> data engineer</span> based in
            manila, philippines. i have an extensive background
            <span className="font-medium"> in several disciplines.</span>
          </p>
          <p className="text-2xl font-thin">
            in my spare time, i work on projects that i find exciting—especially
            for growth and learning.
          </p>
          <p className="text-2xl font-thin">
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
