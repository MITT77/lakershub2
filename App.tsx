import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlayerCard } from './components/PlayerCard';
import { HERO_IMAGE_URL, PLAYERS } from './constants';
import { Activity, Users, Home as HomeIcon } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      {/* Main Content Container with padding for fixed header and footer */}
      <main className="flex-grow pt-16 pb-16">
        
        {/* HOME SECTION */}
        <section 
          id="home" 
          className="relative h-screen flex items-center justify-center bg-gray-900"
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
          >
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-lakers-black via-transparent to-black/40"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <div className="mb-4 inline-flex items-center justify-center p-3 bg-lakers-gold rounded-full bg-opacity-90 shadow-lg animate-bounce">
              <HomeIcon className="w-8 h-8 text-lakers-purple" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
              LAKERS <span className="text-lakers-gold">NATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-widest uppercase">
              Bem-vindo à Crypto.com Arena
            </p>
          </div>
        </section>

        {/* JOGADORES SECTION */}
        <section id="jogadores" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-10 h-10 text-lakers-purple" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-lakers-purple uppercase tracking-tight">
                O Big <span className="text-lakers-gold">Three</span>
              </h2>
              <div className="w-24 h-2 bg-lakers-gold mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PLAYERS.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </section>

        {/* ESTATISTICAS SECTION */}
        <section id="estatisticas" className="py-24 bg-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Activity className="w-10 h-10 text-lakers-purple" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                Estatísticas da Temporada
              </h2>
              <p className="text-gray-500 mt-2">Médias por jogo</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-lakers-purple">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                        Jogador
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                        Pontos (PPG)
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                        Rebotes (RPG)
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                        Assistências (APG)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {PLAYERS.map((player) => (
                      <tr key={player.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded-full object-cover bg-gray-100" src={player.imageUrl} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">{player.name}</div>
                              <div className="text-xs text-gray-500">{player.position.split('(')[0]}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {player.stats.ppg}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-700 font-medium">
                          {player.stats.rpg}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-700 font-medium">
                          {player.stats.apg}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <div className="p-6 bg-lakers-purple rounded-xl text-white shadow-lg">
                 <p className="text-lg font-medium">
                   "O talento vence jogos, mas o trabalho em equipe e a inteligência vencem campeonatos."
                 </p>
                 <p className="mt-2 text-lakers-gold font-bold">- Michael Jordan (Citação Motivacional)</p>
               </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
