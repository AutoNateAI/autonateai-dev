import { MazeCell, Position } from './types';

export const generateMaze = (level: number): MazeCell[][] => {
  const size = 20;
  const maze: MazeCell[][] = [];

  // Initialize maze with ALL PATHS (traversable tiles)
  for (let y = 0; y < size; y++) {
    maze[y] = [];
    for (let x = 0; x < size; x++) {
      maze[y][x] = {
        type: 'path',
        position: { x, y },
        isVisible: true
      };
    }
  }

  // Add exactly 3 coins in safe spots
  const coinSpots = [
    { x: 6, y: 2 }, { x: 10, y: 6 }, { x: 14, y: 10 }
  ];
  coinSpots.forEach(pos => {
    maze[pos.y][pos.x].type = 'coin';
  });

  // Add exactly 1 guide
  maze[6][2] = {
    type: 'guide',
    position: { x: 2, y: 6 },
    isVisible: true
  };

  // Add exactly 2 monsters
  const monsterSpots = [{ x: 6, y: 10 }, { x: 14, y: 6 }];
  monsterSpots.forEach((pos, index) => {
    maze[pos.y][pos.x] = {
      type: 'monster',
      position: pos,
      isVisible: true,
      content: {
        id: `monster_${index}`,
        name: 'Research Obstacle',
        type: index === 0 ? 'paper_avalanche' : 'data_beast',
        position: pos,
        health: 100,
        energyDrain: 30,
        description: 'A research challenge',
        icon: index === 0 ? '📚' : '📊'
      }
    };
  });

  // Add exactly 1 exit portal
  maze[18][18] = {
    type: 'portal',
    position: { x: 18, y: 18 },
    isVisible: true,
    content: {
      id: 'exit_portal',
      name: 'Exit Portal',
      type: 'regular',
      position: { x: 18, y: 18 },
      requiredMastery: 0,
      isVisible: true,
      icon: '🌀'
    }
  };

  return maze;
};