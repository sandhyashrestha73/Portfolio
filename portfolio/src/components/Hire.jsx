export default function HireMe() {
  return (
    <section id="hire" className="py-20 px-4 bg-gray-50">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
            Hire Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's build something amazing
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            I’m currently available for freelance work, internships, and
            collaboration opportunities in web development.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">

            <div>
              <h3 className="text-xl font-semibold mb-2">What I can do</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✔ Frontend Development (React, Tailwind)</li>
                <li>✔ Responsive Website Design</li>
                <li>✔ API Integration</li>
                <li>✔ Bug Fixing & UI Improvements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Availability</h3>
              <p className="text-gray-600">
                ✔ Part-time / Freelance <br />
                ✔ Internships <br />
                ✔ Open to remote work
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">
                Email: sandhya@example.com <br />
                Location: Kathmandu, Nepal 🇳🇵
              </p>
            </div>

          </div>

          {/* Right Form */}
          <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">

            <h3 className="text-xl font-semibold mb-2">
              Send a hiring request
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="text"
              placeholder="Project Type (Website, App, etc.)"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
              rows="5"
              placeholder="Describe your project..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Send Hiring Request
            </button>

            <p className="text-xs text-gray-500 text-center">
              I usually respond within 24–48 hours.
            </p>

          </form>

        </div>
      </div>
    </section>
  )
}