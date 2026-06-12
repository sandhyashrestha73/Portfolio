export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      {/* Glow orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-400/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 space-y-6">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600">
            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
            Open to opportunities
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-teal-600">Sandhya</span>
            <br />
            <span className="text-gray-700">Web Developer</span>
          </h1>

          {/* Bio */}
          <p className="text-gray-600 max-w-xl leading-relaxed">
            BCA student from Nepal building clean, purposeful web experiences.
            Passionate about turning ideas into real-world applications —
            one line of code at a time.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="flex-1 flex flex-col items-center relative">

          {/* Ring */}
          <div className="w-40 h-40 rounded-full border-4 border-teal-500 flex items-center justify-center relative">
            <div className="text-3xl font-bold text-gray-700">SS</div>
          </div>

          {/* Badge */}
          <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-white shadow rounded-full text-sm">
            <span>🇳🇵</span> Nepal
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
      >
        <span className="w-1 h-2 bg-gray-500 rounded-full mt-2 animate-bounce" />
      </a>
    </section>
  )
}