import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

interface CardItem {
  id: number;
  title: string;
  description: string;
  mediaUrl: string; // pode ser imagem, GIF ou vídeo
  hoverColor: string;
  externalLink?: string;
}

interface CardContentProps {
  readonly card: CardItem;
}

function Card() {
  const cards: CardItem[] = [
    {
      id: 1,
      title: "Whaticket Saas",
      description: "Implementei transcrição de audio fronte-end e back-end.",
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp2N253MzI3b2g4d3Rxa3B5NGsydGV6anVpNnFoNjFnMW5mNmY5biZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/6KirhLJyR7oMcwgJQk/giphy.gif",
      hoverColor: "group-hover:text-orange-500",
      externalLink: "https://app.servidoratendezap.click/login"
    },
    {
      id: 2,
      title: "RPA",
      description: "Payroll closing automation.",
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHlqcmlhb3cxZ2VmZ3JvbDg2NGx1bW9lczVza2pvZzV1cXNwcnhmdyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/UmWpVKOvNEv6CHVtl7/giphy.gif",
      hoverColor: "group-hover:text-indigo-400",
      externalLink: "https://github.com/alissonkl20/rpa_folha_salarial.git"
    },
    {
      id: 3,
      title: "Gerenciador de estoque",
      description: "Aplicativo para gerenciar estoque de produtos.",
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp2N253MzI3b2g4d3Rxa3B5NGsydGV6anVpNnFoNjFnMW5mNmY5biZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Ll22OhMLAlVDb8UQWe/giphy.gif",
      hoverColor: "group-hover:text-cyan-400",
      externalLink: "https://flask-food-app.onrender.com/login?next=%2F"
    },
    {
      id: 4,
      title: "Cardápio Web",
      description: "Cardapio digital interativo para panificadora.",
      // Certifique-se de que este GIF está hospedado em um local acessível
      mediaUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXp2N253MzI3b2g4d3Rxa3B5NGsydGV6anVpNnFoNjFnMW5mNmY5biZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/cmCEsJZHYBPels360q/giphy.gif", // Substitua pela URL real do seu GIF
      hoverColor: "group-hover:text-red-500",
      externalLink: "https://cardapio-web-sage.vercel.app/"
    }
  ];

  return (
    <section className="min-h-screen w-full bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen py-16">
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full m-auto px-6">
          {cards.map((card) => (
            <li key={card.id}>
              {card.externalLink ? (
                <a
                  href={card.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Visit ${card.title}`}
                >
                  <CardContent card={card} />
                </a>
              ) : (
                <CardContent card={card} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CardContent({ card }: CardContentProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Detecta o tipo de mídia
  const isVideo = card.mediaUrl.match(/\.(mp4|webm)$/i);
  const isGif = card.mediaUrl.match(/\.(gif)$/i);

  // Pré-carrega a mídia
  useEffect(() => {
    const media = new Image();
    media.src = card.mediaUrl;
    media.onload = () => setIsLoaded(true);
  }, [card.mediaUrl]);

  return (
    <div className="mx-auto shadow-xl min-h-[28rem] h-full relative border-8 border-black dark:border-neutral-800 transform duration-500 hover:-translate-y-6 group rounded-xl overflow-hidden">
      {/* Indicador de carregamento */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-neutral-800">
          <div className="animate-pulse text-gray-500">Carregando...</div>
        </div>
      )}
      
      {/* Vídeo, GIF ou imagem */}
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
          className={`absolute top-0 left-0 w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          // Para GIFs, adicionamos controles de reprodução
          {...(isGif && {
            onClick: (e) => {
              // Pausa/play no clique para GIFs
              const img = e.target as HTMLImageElement;
              if (img.src.includes(".gif")) {
                const currentSrc = img.src;
                img.src = "";
                setTimeout(() => {
                  img.src = currentSrc;
                }, 10);
              }
            },
            style: { cursor: "pointer" }
          })}
        />
      )}

      {/* Overlay */}
      <div className="bg-black/70 dark:bg-neutral-900/80 relative h-full flex flex-col justify-end group-hover:bg-opacity-60 transition-all duration-300 rounded-xl">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h2
              className={`text-white dark:text-neutral-100 mt-2 text-xl mb-5 transform translate-y-10 uppercase group-hover:translate-y-0 duration-300 font-bold ${card.hoverColor}`}
            >
              {String(card.id).padStart(2, "0")}⏤ {card.title}
            </h2>
            {card.externalLink && (
              <ExternalLink className="text-white group-hover:text-cyan-400 transform translate-y-10 group-hover:translate-y-0 duration-300" />
            )}
          </div>
          <p className="opacity-0 text-white dark:text-neutral-200 text-lg group-hover:opacity-90 transform duration-500">
            {card.description}
          </p>
          {/* Indicador para GIFs */}
          {isGif && (
            <div className="opacity-0 group-hover:opacity-100 transform duration-500 text-xs text-white/70 mt-2">
              Clique no GIF para recarregar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;