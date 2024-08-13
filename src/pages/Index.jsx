import React from 'react';
import { ArrowDown, Github, Twitter } from 'lucide-react';

const Index = () => {
  return (
    <div className="bg-[#1B4332] text-white min-h-screen">
      <header className="bg-[#2D6A4F] py-4 px-8 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold">AGI Europe</h1>
        <nav>
          <a href="#about" className="mx-2 hover:text-[#74C69D]">About</a>
          <a href="#pros-cons" className="mx-2 hover:text-[#74C69D]">Pros & Cons</a>
          <a href="#projects" className="mx-2 hover:text-[#74C69D]">Projects</a>
          <a href="#contact" className="mx-2 hover:text-[#74C69D]">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-5xl font-bold mb-4">Building AGI in Europe</h2>
          <p className="text-xl mb-8">Revolutionizing AI + UX with gpt-engineer and more!</p>
          <ArrowDown className="animate-bounce w-8 h-8" />
        </section>

        <section id="about" className="py-16 px-8 bg-[#2D6A4F]">
          <h2 className="text-4xl font-bold mb-8 text-center">About the Founder</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">Previously worked at CERN and Sana Labs, and founded a 2x top YC company.</p>
            <p className="mb-4">Passionate about AI + UX experiments and reducing barriers to build.</p>
            <div className="flex justify-center space-x-4 mt-8">
              <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#74C69D]">
                <Twitter className="mr-2" /> Follow on Twitter
              </a>
              <a href="https://github.com/AntonOsika" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#74C69D]">
                <Github className="mr-2" /> GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="pros-cons" className="py-16 px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Pros & Cons of Investing</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="bg-[#2D6A4F] p-6 rounded-lg shadow-lg w-full md:w-[calc(50%-1rem)]">
              <h3 className="text-2xl font-bold mb-4">Pros</h3>
              <ul className="list-disc list-inside">
                <li>Innovative AI technology with potential for high growth</li>
                <li>Experienced founder with background in top tech companies</li>
                <li>Open-source projects with growing community support</li>
                <li>Focus on reducing barriers to software development</li>
                <li>Potential for disrupting the AI and software engineering industries</li>
              </ul>
            </div>
            <div className="bg-[#2D6A4F] p-6 rounded-lg shadow-lg w-full md:w-[calc(50%-1rem)]">
              <h3 className="text-2xl font-bold mb-4">Cons</h3>
              <ul className="list-disc list-inside">
                <li>Highly competitive AI market with rapid changes</li>
                <li>Potential regulatory challenges in the AI space</li>
                <li>Dependency on large language models and their providers</li>
                <li>Need for continuous innovation to stay relevant</li>
                <li>Potential ethical concerns surrounding AI development</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 px-8 bg-[#2D6A4F]">
          <h2 className="text-4xl font-bold mb-8 text-center">Notable Projects</h2>
          <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="bg-[#1B4332] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">gpt-engineer</h3>
              <p className="mb-4">An AI-powered tool that generates entire codebases from a single prompt, revolutionizing the software development process.</p>
              <a href="https://github.com/AntonOsika/gpt-engineer" target="_blank" rel="noopener noreferrer" className="text-[#74C69D] hover:underline">Learn More</a>
            </div>
            <div className="bg-[#1B4332] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">gpt-engineer App</h3>
              <p className="mb-4">A user-friendly application that allows anyone to build and deploy web apps using plain English instructions.</p>
              <a href="https://gptengineer.app/" target="_blank" rel="noopener noreferrer" className="text-[#74C69D] hover:underline">Try It Out</a>
            </div>
          </div>
        </section>

        <section id="goofy" className="py-16 px-8 bg-[#1B4332] text-center">
          <h2 className="text-4xl font-bold mb-8">The Lighter Side of AI</h2>
          <p className="text-xl mb-4">Why did the AI go to therapy?</p>
          <p className="text-2xl font-bold mb-8">It had too many deep learning issues! 🤖😂</p>
          <img src="https://media.giphy.com/media/3o7TKUM3IgJBX2as9O/giphy.gif" alt="Funny robot gif" className="mx-auto rounded-lg shadow-lg" />
        </section>

        <section id="contact" className="py-16 px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded bg-[#2D6A4F] text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded bg-[#2D6A4F] text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full p-2 rounded bg-[#2D6A4F] text-white" required></textarea>
            </div>
            <button type="submit" className="bg-[#74C69D] text-[#1B4332] py-2 px-4 rounded hover:bg-[#52B788]">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-[#2D6A4F] py-8 px-8 text-center">
        <p>&copy; 2024 AGI Europe. All rights reserved.</p>
        <p className="mt-2">Built with 🤖❤️ and probably some help from gpt-engineer</p>
      </footer>
    </div>
  );
};

export default Index;
