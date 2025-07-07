import  { useState } from 'react';
import { Code2, Briefcase, User, GraduationCap, Moon, Sun } from 'lucide-react';
import Card from './components/Card';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const sectionClasses = darkMode 
    ? 'bg-[#1C1C1C] text-white' 
    : 'bg-white text-gray-900';
  
  const textSecondaryClasses = darkMode
    ? 'text-gray-300'
    : 'text-gray-700';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#1C1C1C]' : 'bg-gray-100'}`}>
      <button
        onClick={toggleDarkMode}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full 
          ${darkMode ? 'bg-[#232323] hover:bg-[#333333]' : 'bg-gray-200 hover:bg-gray-300'}
          border border-gray-300 dark:border-gray-700 transition-colors`}
        aria-label="Alternar tema"
      >
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
      </button>

      <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#1C1C1C] to-purple-900 text-white overflow-hidden">
  <div className="absolute inset-0 w-full h-full pointer-events-none">
    <video
      autoPlay
      loop
      muted
      playsInline
      src='/assets/skye.mp4'
      className="w-full h-full object-cover opacity-70"
      preload="auto"
    />
  </div>
  
  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Alisson de Almeida de Oliveira</h1>
    <p className="text-lg md:text-3xl text-gray-200 mb-8">Desenvolvedor Full-Stack</p>
    <div className="flex justify-center gap-4 flex-wrap">
      {/* Seus botões ou links aqui */}
    </div>
  </div>
</header>

      <section id="sobre" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Sobre Mim</h2>
          </div>
          <p className={`text-lg ${textSecondaryClasses} leading-relaxed`}>
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes, buscando inovar com ideias facilitadoras para o Desenvolvimento de software.

          </p>
        </div>
      </section>

      <section id="experiencia" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Experiência</h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <p className={textSecondaryClasses}>2024</p>
              <p className={`mt-2 ${textSecondaryClasses}`}>
                Desenvolvedor Full-Stack com habilidade de compreensão e comunicação ágil, sempre buscando adquirir experiência e atender as demandas do mercado.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Desenvolvedor Full-Stack</h3>
              <p className={textSecondaryClasses}>2024</p>
              <p className={`mt-2 ${textSecondaryClasses}`}>
             Trabalhei como Desenvolvedor Full-Stack no projeto WhaticketSaas, uma solução SaaS para atendimento ao
              cliente via WhatsApp, desenvolvendo tanto o Back-end quanto o Front-end da aplicação.
              <br />
              <br />
              Utilizando tecnologias como Node.js, Express, React, PostgreSQL, MUI e TypeScript, implementei funcionalidade de transcrição de áudio e criei sessão de armazenamento do token.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Desenvolvedor Full-Stack</h3>
              <p className={textSecondaryClasses}>2025</p>
              <p className={`mt-2 ${textSecondaryClasses}`}>
                Criei um cardápio web para uma padaria, permitindo que os clientes visualizassem os produtos disponíveis e realizassem pedidos online.
                <br />
                <br />
                Utilizando tecnologias como React, Tailwind, Spring-Boot 21 e PostgreSQL.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Desenvolvedor Back-end Freelancer</h3>
              <p className={textSecondaryClasses}>2025</p>
              <p className={`mt-2 ${textSecondaryClasses}`}>
                Atuei como como desenvolvedor freelancer, para bot do discord, onde aprimorei funcionalidades de moderação e integração com APIs externas.
                <br />
                <br />
                Utilizei javascript, Node.js e Discord.js .
              </p>
            </div>
          </div>
        </div>
      </section>

<section id="projetos" className={`py-20 px-4 ${sectionClasses}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="text-blue-600" size={28} />
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : ''}`}>Projetos</h2>
        </div>
        <div className="grid grid-cols-1 mx:grid-cols-2 gap-8">
          <Card 
          />
        </div>
      </div>
    </section>

      <section id="educacao" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Educação</h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Tecnologo</h3>
              <p className={textSecondaryClasses}>Centro Universitário - Católica de Santa Catarina em Jaraguá do Sul</p>
              <p className={textSecondaryClasses}>Análise Desenvolvimento de Sistemas</p>
            </div>
          </div>
        </div>
      </section>

      <section id="redes-sociais" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
        <h2 className="text-3xl font-bold">Redes Sociais</h2>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
        <a
          href="https://www.linkedin.com/in/alisson-almeida-de-oliveira-3406bb347/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-lg"
        >
          <svg width="24" height="24" fill="currentColor" className="inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/aliss_onspace/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors text-lg"
        >
          <svg width="24" height="24" fill="currentColor" className="inline"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.77-.23-1.42-.54-2.07-1.19-.65-.65-.96-1.3-1.19-2.07-.23-.76-.412-1.71-.47-2.99C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.76-.23 1.71-.412 2.99-.47C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.82.31 4.06.54c-.77.23-1.42.54-2.07 1.19-.65.65-.96 1.3-1.19 2.07-.23.76-.412 1.71-.47 2.99C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.23.47 2.99.23.77.54 1.42 1.19 2.07.65.65 1.3.96 2.07 1.19.76.23 1.71.412 2.99.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.23-.24 2.99-.47.77-.23 1.42-.54 2.07-1.19.65-.65.96-1.3 1.19-2.07.23-.76.412-1.71.47-2.99.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.24-2.23-.47-2.99-.23-.77-.54-1.42-1.19-2.07-.65-.65-1.3-.96-2.07-1.19-.76-.23-1.71-.412-2.99-.47C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
          Instagram
        </a>
        <a
          href="https://wa.me/5547999420574"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors text-lg"
        >
          <svg width="24" height="24" fill="currentColor" className="inline" viewBox="0 0 32 32"><path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41l-1.84 6.72a1.33 1.33 0 0 0 1.63 1.63l6.72-1.84a12.74 12.74 0 0 0 6.41 1.74c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-2.02 0-4.01-.53-5.74-1.54l-.41-.24-4.01 1.1 1.1-4.01-.24-.41a10.7 10.7 0 1 1 9.3 5.1zm6.01-7.38c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.15-.68.16-.16.33-.42.5-.63.17-.22.22-.38.33-.63.11-.25.06-.47-.03-.64-.09-.17-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.38-.3.3-1.15 1.12-1.15 2.73 0 1.61 1.18 3.17 1.34 3.39.16.22 2.32 3.54 5.63 4.83.79.34 1.41.54 1.89.69.79.25 1.51.22 2.08.13.64-.1 1.95-.8 2.23-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z"/></svg>
          WhatsApp
        </a>
        <a
          href="https://github.com/alissonkl20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors text-lg"
        >
          <svg width="24" height="24" fill="currentColor" className="inline" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub
        </a>
          </div>
        </div>
      </section>

      <footer className={`bg-gray-900 text-white py-8 ${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alisson de A de Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;