export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
            Contact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's work together
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Have a project idea or want to collaborate? Feel free to reach out.
            I’ll respond as soon as possible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">

            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Info Section */}
          <div className="flex flex-col justify-center space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">sandhyashrestha431@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Nawalpur, Nepal 🇳🇵</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Social</h3>

              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/sandhyashrestha73"
                  target="_blank"
                  className="text-gray-600 hover:text-black"
                >
                  GitHub
                </a>

               

                <a
                  href="mailto:sandhyashrestha431@gmail.com"
                  className="text-gray-600 hover:text-teal-600"
                >
                  Email
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}