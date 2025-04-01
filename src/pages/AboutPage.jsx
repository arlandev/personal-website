function AboutPage() {
  return (
    <main className="container mx-auto my-16 lg:w-10/12 xl:w-3/5 2xl:w-1/2">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-medium tracking-wide">Hi, I'm Arlan</h3>
        <p className="text-xl">
          I enjoy creating magic with code. When I'm not building things, you’ll
          probably find me at the gym, cycling, or catching up on anime. If
          you're curious about what I’ve built or worked on, check out my{" "}
          <a className="font-medium text-blue-400 underline" href="/projects">
            /projects
          </a>{" "}
          or my{" "}
          <a className="font-medium text-blue-400 underline" href="/history">
            /history
          </a>
          .
        </p>
        <div>
          <p className="text-xl">
            Recently, I wanted stuff I make look{" "}
            <kbd className="font-bold">cool</kbd> as well. This website is a
            step in that direction. As I get better with making stuff look cool,
            I'll add them to my /projects and you can check them out there.
          </p>
        </div>
        <hr class="my-8 h-px w-full border-t border-dotted border-black"></hr>
        <div>
          <p>
            That's about all I wanted to share here. If something else comes to
            mind, maybe it shows up here. Bye.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
