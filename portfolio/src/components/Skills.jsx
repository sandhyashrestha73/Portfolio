const SKILLS = [
  {
    category: 'Frontend',
    icon: '⬡',
    items: [
      { name: 'HTML5', level: 90, color: '#e34f26' },
      { name: 'CSS3', level: 85, color: '#1572b6' },
      { name: 'JavaScript', level: 75, color: '#f7df1e' },
      { name: 'React', level: 60, color: '#61dafb' },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: '⬡',
    items: [
      { name: 'Git & GitHub', level: 70, color: '#f05032' },
      { name: 'VS Code', level: 88, color: '#007acc' },
      { name: 'Vite', level: 55, color: '#646cff' },
      { name: 'Responsive UI', level: 80, color: '#00d9c0' },
    ],
  },
]

const LEARNING = ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'TypeScript']

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
            Technical skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What I work with
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A focused set of frontend tools I use to build real projects,
            growing steadily toward the full stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {group.category}
              </h3>

              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    {/* top */}
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    {/* track */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning section */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 font-medium mb-4">
            Currently learning →
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {LEARNING.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-white border rounded-full text-sm text-gray-600 hover:bg-gray-100 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}