import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  projectLink?: string;
  projectVideo?: string; // URL do vídeo do projeto
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Whaticket SaaS - Sistema de Atendimento WhatsApp Privado",
    date: "2025-8-17",
    content:
      "Atuei como desenvolvedor em um projeto SaaS para atendimento via WhatsApp, com dashboard administrativo, múltiplos canais e relatórios em tempo real. O projeto utiliza React, Node.js, PostgreSQL, TypeScript, MUI, Docker e express.",
    projectLink: "https://app.servidoratendezap.click/login",
  },
  {
    id: 2,
    title: "Ecostoque - Sistema de Gestão de Estoque",
    date: "2025-11-15",
    content:
      "Desenvolvi um sistema Ecostoque - Sistema de Gestão de Estoque onde é possível gerenciar produtos, categorias e controlar o estoque de forma eficiente. usando Flask, PostgreSQL, HTML, CSS e JS.",
    projectLink: "https://flask-food-app.onrender.com",
    projectVideo: "/assets/saas.mp4", 
  },
  {
    id: 3,
    title: "Cardapo Digital - Confeiteira autonoma Privado",
    date: "2025-8-19",
    content:
      "Desenvolvi cardapo digital para uma confeiteira autônoma, permitindo a gestão de pedidos e clientes de forma eficiente. utilizando React, express, typescript, PostgreSQL e tailwind.",
  }
];

function Blog() {
  const [posts] = useState<BlogPost[]>(initialPosts);

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 grid gap-8">
      <button
        onClick={() => window.location.href = "/"}
        className="mb-4 px-3 py-1.5 text-xs sm:text-sm bg-light-orange dark:bg-dark-red text-white rounded-md shadow-md hover:bg-orange-500 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 ease-in-out w-fit"
      >
        Voltar para Home
      </button>
      {posts.map((post) => (
        <article key={post.id} className="bg-gray-300 dark:bg-dark-card p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start">
          <h3 className="text-lg sm:text-2xl font-bold mb-2 text-light-orange dark:text-dark-red break-words">{post.title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-3">{post.date}</p>
          <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base break-words">{post.content}</p>
          {post.projectVideo && (
            <video controls muted className="mb-4 w-full max-w-xs sm:max-w-md mx-auto rounded-lg shadow aspect-video" style={{height: 'auto'}}>
              <source src={post.projectVideo} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          )}
          {post.projectLink && (
            <a
              href={post.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              Ver Projeto
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export default Blog;
