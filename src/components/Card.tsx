import { GitFork, ExternalLink, Eye } from "lucide-react";
import { useState, useEffect } from "react";

interface CardItem {
  id: number;
  title: string;
  description: string;
  mediaUrl: string;
  externalLink?: string;
  technologies?: string[];
  longDescription?: string;
  status?: 'active' | 'completed' | 'development' | 'disabled';
}

function Card() {
  const cards: CardItem[] = [
    {
      id: 1,
      title: "Whaticket SaaS",
      description: "Sistema completo de atendimento via WhatsApp",
      longDescription: "Solução SaaS para atendimento ao cliente com múltiplos canais, dashboard administrativo e relatórios em tempo real.",
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp2N253MzI3b2g4d3Rxa3B5NGsydGV6anVpNnFoNjFnMW5mNmY5biZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/6KirhLJyR7oMcwgJQk/giphy.gif",
      externalLink: "https://app.servidoratendezap.click/login",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Socket.io"],
      status: 'disabled'
    },
    {
      id: 2,
      title: "Automação RPA",
      description: "Automação de processos de folha salarial",
      longDescription: "Sistema de automação robótica para fechamento de folha de pagamento com integração de sistemas legados.",
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHlqcmlhb3cxZ2VmZ3JvbDg2NGx1bW9lczVza2pvZzV1cXNwcnhmdyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/UmWpVKOvNEv6CHVtl7/giphy.gif",
      externalLink: "https://github.com/alissonkl20/rpa_folha_salarial.git",
      technologies: ["Python", "Selenium", "Pandas", "Automation"],
      status: 'completed'
    },
    {
      id: 3,
      title: "Gerenciador de Estoque",
      description: "Sistema completo de gestão de inventário",
      longDescription: "Plataforma web para controle de estoque com relatórios, alertas e integração com fornecedores.",
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp2N253MzI3b2g4d3Rxa3B5NGsydGV6anVpNnFoNjFnMW5mNmY5biZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Ll22OhMLAlVDb8UQWe/giphy.gif",
      externalLink: "https://flask-food-app.onrender.com/login?next=%2F",
      technologies: ["Flask", "Python", "HTML", "CSS", "SQLite"],
      status: 'disabled'
    },
    {
      id: 4,
      title: "Cardápio Digital",
      description: "Plataforma interativa para padarias",
      longDescription: "Cardápio digital com sistema de pedidos online, carrinho de compras e integração com delivery.",
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp2N253MzI3b2g4d3Rxa3B5NGsydGV6anVpNnFoNjFnMW5mNmY5biZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/cmCEsJZHYBPels360q/giphy.gif",
      externalLink: "https://cardapio-web-sage.vercel.app/",
      technologies: ["Spring Boot", "React", "MySQL", "Tailwind"],
      status: 'development'
    },
    {
      id: 5,
      title: "API RESTful",
      description: "API escalável para e-commerce",
      longDescription: "API RESTful com autenticação JWT, documentação Swagger e testes automatizados.",
      mediaUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWd2ODJsejFhMmo3NmdjbHR6NmdoM2txeWcxNnJmOTA4dHFtcm13ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S9d8XB557e8phGLBVS/giphy.gif",
      externalLink: "https://github.com/alissonkl20/api-ecommerce",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      status: 'disabled'
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Painel administrativo com métricas",
      longDescription: "Dashboard interativo com gráficos, métricas em tempo real e exportação de relatórios.",
      mediaUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJsOWFkYTJ0NXdrdXlnZ2RxZGR1MWYyOTg4cGd5a2JyMTM1dzRmNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GghGKaZ8JeHJx0apQC/giphy.gif",
      externalLink: "https://github.com/alissonkl20/dashboard-analytics",
      technologies: ["React", "Chart.js", "TypeScript", "API"],
      status: 'disabled'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card) => (
        <CardContent key={card.id} card={card} />
      ))}
    </div>
  );
}

function CardContent({ card }: { card: CardItem }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const isVideo = card.mediaUrl.match(/\.(mp4|webm)$/i);

  useEffect(() => {
    const media = new Image();
    media.src = card.mediaUrl;
    media.onload = () => setIsLoaded(true);
  }, [card.mediaUrl]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'development': return 'bg-yellow-500';
      case 'completed': return 'bg-light-blue dark:bg-dark-red';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo';
      case 'development': return 'Desenvolvimento';
      case 'completed': return 'Concluído';
      default: return 'Indisponível';
    }
  };

  const content = (
    <div 
      className="group relative h-96 overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-card hover:shadow-xl transform transition-all duration-500 card-hover"
      onMouseEnter={() => {
        setShowDescription(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowDescription(false);
        setIsHovered(false);
      }}
    >
      {/* Status Badge */}
      <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-white text-xs font-bold ${getStatusColor(card.status || 'active')} backdrop-blur-sm`}>
        {getStatusText(card.status || 'active')}
      </div>

      {/* Indicador de carregamento */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-light-orange dark:border-dark-red"></div>
        </div>
      )}
      
      {/* Mídia */}
      {isVideo ? (
        <video
          src={card.mediaUrl}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        <img
          src={card.mediaUrl}
          alt={card.title}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className={`transform transition-all duration-500 ${
          showDescription ? 'translate-y-0' : 'translate-y-8'
        }`}>
          
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-light-orange dark:text-dark-red transition-colors">
              {card.title}
            </h3>
            <span className="text-xs opacity-70">#{String(card.id).padStart(2, "0")}</span>
          </div>

          <p className="text-sm opacity-90 mb-3 line-clamp-2">
            {showDescription ? card.longDescription : card.description}
          </p>

          {showDescription && card.technologies && (
            <div className="flex flex-wrap gap-1 mb-3">
              {card.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-light-blue/80 dark:bg-dark-red/80 text-white px-2 py-1 rounded text-xs backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between pt-2 border-t border-white/20">
            <div className="flex items-center gap-4 text-xs opacity-70">
              {card.externalLink && (
                <>
                  <div className="flex items-center gap-1">
                    <Eye size={12} />
                    <span>Demo</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={12} />
                    <span>Code</span>
                  </div>
                </>
              )}
            </div>
            
            {card.externalLink && (
              <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return card.externalLink ? (
    <a 
      href={card.externalLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block focus:outline-none focus:ring-4 focus:ring-light-orange/50 dark:focus:ring-dark-red/50 rounded-xl transition-transform duration-300 hover:scale-105"
    >
      {content}
    </a>
  ) : (
    <div className="focus:outline-none focus:ring-4 focus:ring-light-orange/50 dark:focus:ring-dark-red/50 rounded-xl">
      {content}
    </div>
  );
}

export default Card;