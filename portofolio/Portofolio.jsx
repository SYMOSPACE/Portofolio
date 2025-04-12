export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="p-6 text-center border-b border-gray-700">
        {/* 👤 Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/your-photo.jpg" // ← Replace this with your actual image path
            alt="Watene"
            className="w-32 h-32 rounded-full border-4 border-gray-700 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold">Watene's Portfolio</h1>
        <p className="text-gray-400">
          Web Dev | Digital Marketing | Cybersecurity | Game Dev | Web3
        </p>
      </header>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-300">
          I’m a versatile developer and digital professional with a passion for
          creating engaging user experiences, building secure and scalable
          solutions, and marketing digital products that connect.
        </p>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded-lg bg-gray-900">
            <h3 className="text-xl font-semibold">Web Dev Portfolio Site</h3>
            <p className="text-gray-400">
              React-based responsive portfolio showcasing skills and experience.
            </p>
          </li>
          <li className="border p-4 rounded-lg bg-gray-900">
            <h3 className="text-xl font-semibold">Cyber Awareness Quiz App</h3>
            <p className="text-gray-400">
              Gamified quiz for teaching security fundamentals to beginners.
            </p>
          </li>
          <li className="border p-4 rounded-lg bg-gray-900">
            <h3 className="text-xl font-semibold">Web3 NFT Gallery</h3>
            <p className="text-gray-400">
              Interactive gallery for showcasing NFTs using Solidity and React.
            </p>
          </li>
        </ul>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <span>HTML/CSS/JS</span>
          <span>React & Next.js</span>
          <span>Solidity & Web3</span>
          <span>SEO & Analytics</span>
          <span>Cybersecurity Basics</span>
          <span>Game Development (Unity)</span>
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-400 mb-2">Reach out via your favorite platform:</p>
        <ul className="flex gap-4 flex-wrap">
          <li>
            <a
              href="https://github.com/yourusername"
              className="hover:underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              className="hover:underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:youremail@example.com"
              className="hover:underline text-blue-400"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourusername"
              className="hover:underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>

      <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Watene. All rights reserved.
      </footer>
    </div>
  );
}
