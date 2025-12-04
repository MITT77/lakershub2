export interface Player {
  id: number;
  name: string;
  position: string;
  height: string;
  imageUrl: string;
  stats: {
    ppg: number;
    rpg: number;
    apg: number;
  };
}
