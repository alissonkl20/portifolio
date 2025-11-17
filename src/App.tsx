import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { User, Github, Rocket, Mail, Linkedin, Phone, Zap, Cloud, Database, Cpu } from 'lucide-react';
import GitHubStats from './components/GitHubStats';
import Blog from './components/Blog';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const textSecondaryClasses = 'text-gray-700';

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
    <Router>
      <div className="min-h-screen theme-transition">
        {/* Header com link para Blog */}
        <header className="w-full flex justify-between items-center px-8 py-6 bg-gradient-to-r from-light-orange to-light-blue shadow-lg fixed top-0 left-0 z-50">
          <div className="font-bold text-2xl text-white">Alisson de Almeida</div>
          <nav className="flex gap-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#tecnologias" className="hover:underline">Tecnologias</a>
            <a href="#projetos" className="hover:underline">Projetos</a>
            <a href="#github" className="hover:underline">GitHub</a>
            <a href="#contato" className="hover:underline">Contato</a>
            <Link to="/blog" className="hover:underline font-bold text-light-orange">Blog</Link>
          </nav>
        </header>

        <div className="pt-24"> {/* Espaço para header fixo */}
          <Routes>
            <Route path="/" element={
              <>
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
                    <div className="w-6 h-10 border-2 border-light-orange rounded-full flex justify-center shadow-lg">
                      <div className="w-1 h-3 bg-light-orange rounded-full mt-2 animate-pulse"></div>
                    </div>
                  </div>
                </header>

                {/* Seção Sobre */}
                <Section id="sobre" title="Sobre Mim" icon={User} ref={setSectionRef('sobre')}>
                  <div className="max-w-4xl mx-auto text-center">
                    <p className={`text-xl leading-relaxed mb-8 ${textSecondaryClasses}`}>
                       <strong>Desenvolvedor Full-Stack</strong> Sou Desenvolvedor Full-Stack com foco em transformar desafios técnicos em soluções digitais eficientes, utilizando código limpo, boas práticas e tecnologias modernas. Com 1 ano e meio de experiência em Desenvolvimento web, atuo na construção de aplicações web completas, sempre buscando entregar desempenho, organização e escalabilidade.

Minha atuação abrange desde a arquitetura e implementação do back-end até a criação de interfaces intuitivas e responsivas no front-end, garantindo uma comunicação fluida entre todas as camadas da aplicação.
                    <br /><br />  
                    <strong>Experiência Profissional</strong>
                    <ul className="list-disc list-inside">
                      <li>Desenvolvimento Full-Stack em projetos freelance, contribuindo para otimização de performance, melhorias estruturais e maior manutenibilidade do código.</li>
                      <li>Criação de interfaces web responsivas, elevando a experiência do usuário e garantindo acessibilidade em diferentes dispositivos.</li>
                      <li>Implementação e manutenção de APIs RESTful, assegurando integrações eficientes e seguras entre front-end e back-end.</li>
                    </ul>
                  </p>

                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center hover:scale-105 transition-transform">
                      <Zap className="mx-auto mb-4 text-light-orange" size={40} />
                      <h3 className="text-xl font-bold mb-2">Rápido</h3>
                      <p className={textSecondaryClasses}>Desenvolvimento ágil e eficiente</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center hover:scale-105 transition-transform">
                      <Cloud className="mx-auto mb-4 text-light-blue" size={40} />
                      <h3 className="text-xl font-bold mb-2">Moderno</h3>
                        <p className={textSecondaryClasses}>Tecnologias atualizadas</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center hover:scale-105 transition-transform">
                        <Database className="mx-auto mb-4 text-light-orange" size={40} />
                        <h3 className="text-xl font-bold mb-2">Robusto</h3>
                        <p className={textSecondaryClasses}>Soluções escaláveis</p>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Seção Tecnologias */}
                <Section id="tecnologias" title="Tecnologias" icon={Cpu} ref={setSectionRef('tecnologias')}>
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                      {technologies.map((tech, index) => (
                        <div
                          key={tech.name}
                          className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center hover:scale-105 group"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                            {tech.icon}
                          </div>
                          <div className="font-bold group-hover:text-light-orange transition-colors">
                            {tech.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Section>

                {/* Seção GitHub */}
                <section id="github" ref={setSectionRef('github')}>
                  <GitHubStats darkMode={false} />
                </section>

                {/* Seção Contato */}
                <Section id="contato" title="Contato" icon={Mail} ref={setSectionRef('contato')}>
                  <div className="max-w-4xl mx-auto text-center">
                    <p className={`text-xl mb-8 ${textSecondaryClasses}`}>
                      Estou aberto a oportunidades remotas, híbridas e presenciais, projetos colaborativos em que eu possa continuar evoluindo tecnicamente e contribuir com soluções digitais de impacto.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <a href="mailto:almeidadeoliveiraalisson04@gmail.com" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                        <Mail className="group-hover:scale-110 transition-transform" size={20} />
                        E-mail
                      </a>
                      <a href="https://www.linkedin.com/in/alisson-almeida-de-oliveira-3406bb347/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-light-orange to-light-blue hover:scale-105 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
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
                <footer className="py-12 px-4 text-center relative overflow-hidden bg-gradient-to-br from-light-blue to-light-orange text-white">
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-light-orange bg-clip-text text-transparent">
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

                    <div className="flex justify-center gap-4 text-gray-900 mb-4 bg-gradient-to-r from-white to-light-orange bg-clip-text text-transparent">
                      <span>🚀 Sempre buscando próximo desafio</span>
                    </div>
                  </div>
                </footer>
              </>
            } />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Componente de Seção Reutilizável
const Section = React.forwardRef<HTMLElement, {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}>(({ id, title, icon: Icon, children }, ref) => {
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
      className={`py-20 px-4 transition-all duration-1000 bg-light-bg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Icon className="text-light-orange w-9 h-9" />
          <h2 className="text-4xl font-bold text-gray-900">
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