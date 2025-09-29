import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, GitFork, TrendingUp, Code, Zap, Trophy, Github } from 'lucide-react';

interface GitHubStats {
  stars: number;
  forks: number;
  contributions: number;
  repositories: number;
  topLanguages: { [key: string]: number };
  streak: {
    current: number;
    longest: number;
  };
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string;
}

function GitHubStats({ darkMode }: { darkMode: boolean }) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const userResponse = await fetch('https://api.github.com/users/alissonkl20');
        if (!userResponse.ok) throw new Error('Erro ao buscar dados do usuário');
        const userData = await userResponse.json();

        const reposResponse = await fetch('https://api.github.com/users/alissonkl20/repos?per_page=100');
        if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios');
        const reposData: GitHubRepo[] = await reposResponse.json();

        const stars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const forks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
        const repositories = userData.public_repos;

        const languageStats: { [key: string]: number } = {};
        reposData.forEach(repo => {
          if (repo.language) {
            languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
          }
        });

        const totalReposWithLanguage = Object.values(languageStats).reduce((acc, count) => acc + count, 0);
        
        const topLanguages = Object.fromEntries(
          Object.entries(languageStats)
            .map(([lang, count]) => [lang, Math.round((count / totalReposWithLanguage) * 100)])
            .sort(([, a], [, b]) => (b as number) - (a as number))
            .slice(0, 5)
        );

        // Mock temporário para contribuições e streak
        const contributions = Math.floor(Math.random() * 200) + 100;
        const currentStreak = Math.floor(Math.random() * 15) + 5;
        const longestStreak = Math.floor(Math.random() * 30) + 15;

        setStats({ 
          stars, 
          forks, 
          contributions, 
          repositories, 
          topLanguages, 
          streak: { current: currentStreak, longest: longestStreak } 
        });
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar estatísticas do GitHub');

        // Dados mockados como fallback
        setStats({
          stars: 45,
          forks: 23,
          contributions: 156,
          repositories: 28,
          topLanguages: { JavaScript: 35, TypeScript: 25, Java: 20, Python: 15, CSS: 5 },
          streak: { current: 12, longest: 28 }
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubStats();
  }, []);

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    } 
  };
  
  const itemVariants = { 
    hidden: { y: 30, opacity: 0 }, 
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6 } 
    } 
  };

  if (loading) {
    return (
      <div className={`flex justify-center items-center py-20 ${
        darkMode ? 'bg-dark-bg' : 'bg-light-bg'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="animate-spin rounded-full h-16 w-16 border-b-2 border-light-orange dark:border-dark-red"
        />
      </div>
    );
  }

  return (
    <section 
      id="github-stats" 
      className={`py-20 px-4 ${
        darkMode ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="inline-flex items-center gap-3 mb-4"
          >
            <Github size={40} className="text-light-orange dark:text-dark-red" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-orange to-light-blue dark:from-dark-red dark:to-dark-red">
              📊 Estatísticas do GitHub
            </h2>
          </motion.div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Minha atividade e contribuições no GitHub
          </p>
          {error && <p className="text-yellow-400 mt-2">{error} (dados mockados sendo exibidos)</p>}
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { 
              icon: Star, 
              label: 'Estrelas', 
              value: stats?.stars || 0, 
              color: 'text-yellow-400', 
              bg: 'from-yellow-500/20 to-yellow-600/20' 
            },
            { 
              icon: GitFork, 
              label: 'Forks', 
              value: stats?.forks || 0, 
              color: 'text-green-400', 
              bg: 'from-green-500/20 to-green-600/20' 
            },
            { 
              icon: TrendingUp, 
              label: 'Contribuições', 
              value: stats?.contributions || 0, 
              color: 'text-light-blue dark:text-dark-red', 
              bg: 'from-light-blue/20 to-light-blue/30 dark:from-dark-red/20 dark:to-dark-red/30' 
            },
            { 
              icon: Code, 
              label: 'Repositórios', 
              value: stats?.repositories || 0, 
              color: 'text-light-orange dark:text-dark-red', 
              bg: 'from-light-orange/20 to-light-orange/30 dark:from-dark-red/20 dark:to-dark-red/30' 
            }
          ].map(stat => (
            <motion.div 
              key={stat.label} 
              variants={itemVariants} 
              whileHover={{ scale: 1.05, y: -5 }} 
              className={`bg-gradient-to-br ${stat.bg} backdrop-blur-sm rounded-xl p-6 border ${
                darkMode ? 'border-gray-700/50 hover:border-white/30' : 'border-gray-300/50 hover:border-gray-400/50'
              } transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                <stat.icon className={stat.color} size={28} />
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.label}
                </h3>
              </div>
              <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Total no GitHub
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Linguagens Mais Usadas */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className={`backdrop-blur-sm rounded-xl p-8 border ${
            darkMode ? 'bg-dark-card border-gray-700/50' : 'bg-white border-gray-300/50'
          } mb-8`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-light-orange dark:text-dark-red" size={32} />
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ⚡ Linguagens Mais Usadas
            </h3>
          </div>
          <div className="space-y-6">
            {stats?.topLanguages && Object.entries(stats.topLanguages).map(([language, percentage]) => (
              <motion.div 
                key={language} 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }} 
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-medium min-w-[120px] ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {language}
                  </span>
                  <div className={`w-48 rounded-full h-3 overflow-hidden ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-300'
                  }`}>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${percentage}%` }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1 }} 
                      className="bg-gradient-to-r from-light-orange to-light-blue dark:from-dark-red dark:to-dark-red h-3 rounded-full" 
                    />
                  </div>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-light-orange to-light-blue dark:from-dark-red dark:to-dark-red bg-clip-text text-transparent">
                  {percentage}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Streak */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="text-center"
        >
          <div className={`inline-flex items-center gap-6 backdrop-blur-sm px-8 py-4 rounded-2xl border ${
            darkMode 
              ? 'bg-gradient-to-r from-dark-red/30 to-dark-red/30 border-dark-red/30' 
              : 'bg-gradient-to-r from-light-orange/20 to-light-blue/20 border-light-orange/30'
          }`}>
            <div className="flex items-center gap-3">
              <Zap className="text-light-orange dark:text-dark-red" size={24} />
              <span className={`font-bold text-lg ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Current Streak: <span className="text-light-orange dark:text-dark-red">{stats?.streak.current} dias</span>
              </span>
            </div>
            <div className={`w-px h-8 ${darkMode ? 'bg-white/30' : 'bg-gray-400/30'}`}></div>
            <div className="flex items-center gap-3">
              <Trophy className="text-light-orange dark:text-dark-red" size={24} />
              <span className={`font-bold text-lg ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Longest Streak: <span className="text-light-orange dark:text-dark-red">{stats?.streak.longest} dias</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHubStats;