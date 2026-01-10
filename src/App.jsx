import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const GITHUB_USERNAME = "rhyme10";


const projects = [
  {
    title: "Ticket Management System",
    desc: "Full-stack ticketing app built with React, PHP, and SQL. Features ticket submission, tracking, and agent assignment.",
    tech: ["React", "JavaScript", "PHP", "SQL"],
    screenshots: [
      "/screenshots/tms-login.png",
      "/screenshots/tms-dashboard.png",
      "/screenshots/tms-ticket.png",
    ],
  },
  {
    title: "Airest Website Improvements",
    desc: "UI/UX fixes, performance optimization, and responsive redesign for an existing website.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

function ScreenshotCarousel({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-6">
      <img
        src={images[index]}
        alt=""
        className="w-full h-64 sm:h-72 object-cover rounded-2xl border border-gray-800"
      />

      <div className="flex justify-between mt-3">
        <button
          onClick={() =>
            setIndex((index - 1 + images.length) % images.length)
          }
          className="px-3 py-1 bg-gray-800 rounded-lg"
        >
          ‹
        </button>
        <button
          onClick={() =>
            setIndex((index + 1) % images.length)
          }
          className="px-3 py-1 bg-gray-800 rounded-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-12 py-8 flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold">Rhyme Nigam</h1>
          <p className="text-lg text-gray-400">
            Web Developer • React.js
          </p>
        </div>

        <nav className="flex gap-6 text-lg font-medium">
          <a href="#projects" className="hover:text-indigo-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-indigo-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
        </nav>
      </header>

      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight">
              Hi, I’m{" "}
              <span className="text-indigo-500">Rhyme</span>
              <br />
              Full Stack Developer
            </h2>

            <p className="mt-8 text-xl text-gray-300 max-w-2xl">
              Motivated web developer with hands-on experience
              building dynamic and user-friendly software solutions.
              Skilled in React.js, JavaScript, PHP, and SQL.
              Currently expanding knowledge in Node.js,
              Express.js, and REST APIs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/Rhyme-Nigam-Resume.pdf"
                download
                className="px-8 py-4 text-lg bg-emerald-600 rounded-2xl hover:bg-emerald-500"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-4 text-lg bg-indigo-600 rounded-2xl hover:bg-indigo-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-lg border border-gray-500 rounded-2xl"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div className="bg-gray-900 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-6">
              Key Highlights
            </h3>
            <ul className="space-y-4 text-xl text-gray-300">
              <li>• React.js & modern JavaScript</li>
              <li>• Responsive UI with Tailwind CSS</li>
              <li>• REST API integration</li>
              <li>• Git & GitHub collaboration</li>
              <li>• Backend basics: PHP, SQL</li>
            </ul>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-32">
          <h3 className="text-5xl font-bold mb-12">
            Skills
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-xl">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold mb-4">
                Frontend
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold mb-4">
                Backend
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>PHP</li>
                <li>SQL / MySQL</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold mb-4">
                Tools
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-32">
          <h3 className="text-5xl font-bold mb-12">
            Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-gray-900 rounded-3xl p-10"
              >
                <h4 className="text-3xl font-semibold">
                  {p.title}
                </h4>
                <p className="mt-4 text-xl text-gray-300">
                  {p.desc}
                </p>

                {p.screenshots && (
                  <ScreenshotCarousel images={p.screenshots} />
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 text-sm bg-gray-800 text-indigo-400 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
         <section id="contact" className="mt-24">
          <h3 className="text-4xl font-bold mb-8">
            Contact
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nigamrhyme@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition"
            >
              <Mail className="mb-3" />
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-400">
                nigamrhyme@gmail.com
              </p>
            </a>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition"
            >
              <Github className="mb-3" />
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-gray-400">
                github.com/{GITHUB_USERNAME}
              </p>
            </a>
          </div>
        </section>

      </main>

      <footer className="text-center py-10 text-lg text-gray-400">
        © {new Date().getFullYear()} Rhyme Nigam
      </footer>
    </div>
  );
}
