import React, { useState, useEffect, useRef } from 'react';
import { Code2, User, Moon, Sun, Github, Rocket, Mail, Linkedin, Phone, Zap, Cloud, Database, Cpu } from 'lucide-react';
import Card from './components/Card';
import GitHubStats from './components/GitHubStats';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const textSecondaryClasses = darkMode
    ? 'text-gray-300'
    : 'text-gray-700';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const technologies = [
    { name: 'JavaScript', icon: '🚀', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-red-700' },
    { name: 'Spring Boot', icon: '🌱', color: 'from-green-400 to-green-600' },
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
    { name: 'Flask', icon: '🔥', color: 'from-gray-400 to-gray-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-800' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-300 to-blue-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-400' },
    { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Vite', icon: '⚡', color: 'from-purple-400 to-purple-600' },
  ];

  return (
    <div className={`min-h-screen theme-transition ${darkMode ? 'dark' : ''}`}>
      {/* Botão Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-light-orange to-light-blue dark:from-dark-red dark:to-dark-red text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Alternar tema"
      >
        {darkMode ? <Sun className="text-yellow-300" size={24} /> : <Moon className="text-white" size={24} />}
      </button>

      {/* Navegação Flutuante */}
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {['home', 'sobre', 'tecnologias', 'projetos', 'github', 'contato'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`block w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
              activeSection === section 
                ? 'bg-light-orange dark:bg-dark-red shadow-lg shadow-light-orange/50 dark:shadow-dark-red/50 scale-150' 
                : 'bg-gray-400 hover:bg-light-blue dark:hover:bg-dark-red'
            }`}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </nav>

        {/* Header Hero */}
      <header 
        id="home" 
        ref={setSectionRef('home')}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden"
      >
        {/* Efeito de Partículas */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Vídeo de Fundo */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            src='/assets/res.mp4'
            className="w-full h-full object-cover opacity-80"
            preload="auto"
          />
        </div>

        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Alisson de Almeida
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent font-bold">
            🚀 Desenvolvedor Full-Stack
          </div>


          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#projetos"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Rocket className="group-hover:rotate-45 transition-transform" size={20} />
              Explorar Projetos
            </a>
            <a
              href="#github"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Github className="group-hover:scale-110 transition-transform" size={20} />
              Ver GitHub
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-light-orange dark:border-dark-red rounded-full flex justify-center shadow-lg">
            <div className="w-1 h-3 bg-light-orange dark:bg-dark-red rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Seção Sobre */}
      <Section id="sobre" title="Sobre Mim" icon={User} darkMode={darkMode} ref={setSectionRef('sobre')}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`text-xl leading-relaxed mb-8 ${textSecondaryClasses}`}>
            ✨ <strong>Desenvolvedor Full-Stack</strong> com habilidade de compreensão e comunicação ágil, 
            sempre buscando adquirir experiência e atender as demandas do mercado. 
            Explorando o universo do código, um commit por vez! 🚀
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center hover:scale-105 transition-transform">
              <Zap className="mx-auto mb-4 text-light-orange dark:text-dark-red" size={40} />
              <h3 className="text-xl font-bold mb-2">Rápido</h3>
              <p className={textSecondaryClasses}>Desenvolvimento ágil e eficiente</p>
            </div>
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center hover:scale-105 transition-transform">
              <Cloud className="mx-auto mb-4 text-light-blue dark:text-dark-red" size={40} />
              <h3 className="text-xl font-bold mb-2">Moderno</h3>
              <p className={textSecondaryClasses}>Tecnologias atualizadas</p>
            </div>
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center hover:scale-105 transition-transform">
              <Database className="mx-auto mb-4 text-light-orange dark:text-dark-red" size={40} />
              <h3 className="text-xl font-bold mb-2">Robusto</h3>
              <p className={textSecondaryClasses}>Soluções escaláveis</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Seção Tecnologias */}
      <Section id="tecnologias" title="Tecnologias" icon={Cpu} darkMode={darkMode} ref={setSectionRef('tecnologias')}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="font-bold group-hover:text-light-orange dark:group-hover:text-dark-red transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Seção Projetos */}
      <Section id="projetos" title="Projetos Recentes" icon={Code2} darkMode={darkMode} ref={setSectionRef('projetos')}>
        <Card />
      </Section>

      {/* Seção GitHub */}
      <section id="github" ref={setSectionRef('github')}>
        <GitHubStats darkMode={darkMode} />
      </section>

      {/* Seção Contato */}
      <Section id="contato" title="Contato" icon={Mail} darkMode={darkMode} ref={setSectionRef('contato')}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`text-xl mb-8 ${textSecondaryClasses}`}>
            Pronto para levar seu projeto ao próximo nível? Vamos conversar! 🚀
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href="mailto:almeidadeoliveiraalisson04@gmail.com" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Mail className="group-hover:scale-110 transition-transform" size={20} />
              E-mail
            </a>
            <a href="https://www.linkedin.com/in/alisson-almeida-de-oliveira-3406bb347/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-light-orange to-light-blue dark:from-dark-red dark:to-dark-red hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <Linkedin className="group-hover:scale-110 transition-transform" size={20} />
              LinkedIn
            </a>
            <a href="https://wa.me/5546999420574" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="group-hover:scale-110 transition-transform" size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center relative overflow-hidden bg-gradient-to-br from-light-blue to-light-orange dark:from-dark-bg dark:to-dark-bg text-white">
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-light-orange dark:from-white dark:to-dark-red bg-clip-text text-transparent">
            ✨ "Explorando o universo do código, um commit por vez!" ✨
          </h3>

          <p className="text-light-bg mb-6 text-lg">
            ⭐️ <strong>Obrigado pela visita!</strong> ⭐️
          </p>

          <div className="flex justify-center gap-6 flex-wrap text-light-bg mb-4">
            <span>© {new Date().getFullYear()} Alisson de A de Oliveira</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
          </div>

          <div className="flex justify-center gap-4 text-gray-900 mb-4 bg-gradient-to-r from-white to-light-orange dark:from-white dark:to-dark-red bg-clip-text text-transparent">
            <span>🚀 Sempre buscando próximo desafio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente de Seção Reutilizável
const Section = React.forwardRef<HTMLElement, {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  darkMode: boolean;
}>(({ id, title, icon: Icon, children, darkMode }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        darkMode ? 'bg-dark-bg' : 'bg-light-bg'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Icon className={`${darkMode ? 'text-dark-red' : 'text-light-orange'} w-9 h-9`} />
          <h2 className={`text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default App;