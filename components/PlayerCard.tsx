import React from 'react';
import { Player } from '../types';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-100">
      <div className="relative h-64 bg-gradient-to-b from-gray-100 to-white flex items-end justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-lakers-purple opacity-5"></div>
        <img 
          src={player.imageUrl} 
          alt={player.name} 
          className="h-full object-contain relative z-10 drop-shadow-xl"
        />
      </div>
      <div className="p-6 text-center border-t-4 border-lakers-gold">
        <h3 className="text-2xl font-black text-lakers-purple mb-1 uppercase tracking-tight">{player.name}</h3>
        <p className="text-sm font-bold text-lakers-gold mb-2">{player.position}</p>
        <div className="inline-block bg-gray-100 rounded-full px-4 py-1">
          <span className="text-gray-600 font-medium text-sm">Altura: {player.height}</span>
        </div>
      </div>
    </div>
  );
};
