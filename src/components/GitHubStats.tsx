import React, { useState, useEffect } from 'react';
import { Users, FolderOpen, GitCommit, Code } from 'lucide-react';

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

function GitHubStats({ darkMode }: { darkMode: boolean }) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const contributions = 103;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const statsResponse = await fetch('https://api.github.com/users/alissonkl20');
        const statsData = await statsResponse.json();
        setStats(statsData);
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className={`py-20 text-center ${darkMode ? 'text-white' : 'text-gray-700'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-lg">Carregando dados do GitHub...</p>
      </div>
    );
  }

  return (
    <div className={`py-20 px-4 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          🌌 Meu Universo no GitHub
        </h2>
        
        {/* Estatísticas Gerais */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <StatCard
              icon={Users}
              value={stats.followers}
              label="Seguidores"
              color="blue"
              darkMode={darkMode}
              delay={0}
            />
            
            <StatCard
              icon={Users}
              value={stats.following}
              label="Seguindo"
              color="green"
              darkMode={darkMode}
              delay={100}
            />
            
            <StatCard
              icon={FolderOpen}
              value={stats.public_repos}
              label="Repositórios"
              color="purple"
              darkMode={darkMode}
              delay={200}
            />
            
            <StatCard
              icon={GitCommit}
              value={contributions}
              label="Contribuições"
              color="yellow"
              darkMode={darkMode}
              delay={300}
            />
          </div>
        )}

        {/* Gráfico de Atividade (Simulado) */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            📈 Atividade Recente
          </h3>
          <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-end justify-between h-32 mb-4">
              {[30, 45, 60, 35, 70, 55, 80, 65, 40, 75, 50, 90].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 mx-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t transition-all duration-500 hover:opacity-80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="text-center text-gray-300">
              Últimos 12 meses de contribuições
            </div>
          </div>
        </div>

        {/* Linguagens Mais Usadas */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            💻 Linguagens em Foco
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { language: 'JavaScript', percentage: 40, color: 'from-yellow-400 to-yellow-600' },
              { language: 'TypeScript', percentage: 25, color: 'from-blue-600 to-blue-800' },
              { language: 'Python', percentage: 15, color: 'from-green-500 to-blue-500' },
              { language: 'Java', percentage: 15, color: 'from-red-500 to-red-700' },
              { language: 'HTML/CSS', percentage: 5, color: 'from-orange-500 to-pink-500' }
            ].map((lang, index) => (
              <LanguageCard 
                key={lang.language}
                language={lang.language}
                percentage={lang.percentage}
                color={lang.color}
                darkMode={darkMode}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <a
            href="https://github.com/alissonkl20"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            <Code size={24} />
            Explorar Perfil Completo no GitHub
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para estatísticas
function StatCard({ 
  icon: Icon, 
  value, 
  label, 
  color, 
  darkMode,
  delay 
}: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: number;
  label: string;
  color: string;
  darkMode: boolean;
  delay: number;
}) {
  const colorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
    yellow: 'text-yellow-400'
  };

  return (
    <div 
      className={`text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className={`mx-auto mb-3 ${colorClasses[color as keyof typeof colorClasses]} w-9 h-9`} />
      <div className="text-3xl font-bold mb-1">{value}+</div>
      <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{label}</div>
    </div>
  );
}

// Componente auxiliar para linguagens
function LanguageCard({ language, percentage, color, darkMode, delay }: { 
  language: string; 
  percentage: number; 
  color: string;
  darkMode: boolean;
  delay: number;
}) {
  return (
    <div 
      className={`p-4 rounded-xl bg-white dark:bg-gray-800 text-center transform hover:scale-105 transition-all duration-300`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {percentage}%
      </div>
      <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
        {language}
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <div 
          className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Ícone ExternalLink
function ExternalLinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  );
}

export default GitHubStats;