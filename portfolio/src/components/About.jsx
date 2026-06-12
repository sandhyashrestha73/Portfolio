const STATS = [
  { value: '4th', label: 'Semester, BCA' },
  { value: '3+', label: 'Projects built' },
  { value: '5', label: 'Core skills' },
  { value: '∞', label: 'Things to learn' },
]

export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* Card */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-lg p-6">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold">
              SS
            </div>
            <div>
              <p className="font-semibold text-lg">Sandhya Shrestha</p>
              <p className="text-gray-500 text-sm">BCA Student · Web Developer</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="p-4 rounded-xl bg-gray-50 text-center"
              >
                <span className="block text-xl font-bold text-gray-900">
                  {value}
                </span>
                <span className="text-sm text-gray-500">{label}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>📍 Kathmandu, Nepal</span>

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Available for work
            </span>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <span className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
            About me
          </span>

          <h2 className="text-3xl font-bold mt-2 mb-4">
            Turning curiosity into code
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a BCA student currently in my fourth semester, on a focused journey
            toward becoming a full-stack web developer. My interest in web development
            started with a simple question: <em>how do websites actually work?</em> — and it
            grew into a passion I now pursue every day.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            I work with HTML, CSS, JavaScript, and React to build clean, responsive
            interfaces. Every project I take on teaches me something new — whether it's
            state management, API integration, or just writing more maintainable code.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            My goal is to grow into a developer who builds products that are both
            technically solid and genuinely useful to people. I believe in learning
            by doing, and I document that journey through real projects.
          </p>

          <a
            href="#contact"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Let's connect →
          </a>
        </div>
      </div>
    </section>
  )
}