import { MazeCell, Position } from './types';

export const generateMaze = (level: number): MazeCell[][] => {
  const size = 20;
  const maze: MazeCell[][] = [];

  // Initialize maze with walls
  for (let y = 0; y < size; y++) {
    maze[y] = [];
    for (let x = 0; x < size; x++) {
      maze[y][x] = {
        type: 'wall',
        position: { x, y },
        isVisible: false
      };
    }
  }

  // Create paths - ensure both horizontal and vertical movement
  const setPath = (x: number, y: number) => {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      maze[y][x] = {
        type: 'path',
        position: { x, y },
        isVisible: true // Make paths visible by default
      };
    }
  };

  // Create a simple but clear path network
  // Main horizontal corridor
  for (let x = 1; x <= 18; x++) setPath(x, 5);
  for (let x = 1; x <= 18; x++) setPath(x, 10);
  for (let x = 1; x <= 18; x++) setPath(x, 15);
  
  // Main vertical corridors  
  for (let y = 1; y <= 18; y++) setPath(5, y);
  for (let y = 1; y <= 18; y++) setPath(10, y);
  for (let y = 1; y <= 18; y++) setPath(15, y);
  
  // Connecting paths
  for (let x = 1; x <= 5; x++) setPath(x, 3);
  for (let x = 10; x <= 15; x++) setPath(x, 7);
  for (let x = 5; x <= 10; x++) setPath(x, 12);
  for (let y = 15; y <= 18; y++) setPath(7, y);

  // Add coins at visible locations
  const coinPositions = [
    { x: 3, y: 5 }, { x: 7, y: 10 }, { x: 12, y: 5 }, { x: 16, y: 15 },
    { x: 5, y: 8 }, { x: 10, y: 3 }, { x: 15, y: 12 }
  ];
  
  coinPositions.forEach(pos => {
    if (maze[pos.y] && maze[pos.y][pos.x] && maze[pos.y][pos.x].type === 'path') {
      maze[pos.y][pos.x] = {
        type: 'coin',
        position: pos,
        isVisible: true
      };
    }
  });

  // Add guide character at strategic location
  setPath(3, 10); // Ensure path exists
  maze[10][3] = {
    type: 'guide',
    position: { x: 3, y: 10 },
    isVisible: true
  };

  // Add monsters at strategic locations
  const monsterPositions = [
    { x: 8, y: 5 }, { x: 13, y: 10 }, { x: 6, y: 15 }
  ];

  monsterPositions.forEach((pos, index) => {
    setPath(pos.x, pos.y); // Ensure path exists
    maze[pos.y][pos.x] = {
      type: 'monster',
      position: pos,
      isVisible: true,
      content: {
        id: `monster_${index}`,
        name: 'Research Obstacle',
        type: level === 1 ? 'paper_avalanche' : level === 2 ? 'grant_gremlin' : 'data_beast',
        position: pos,
        health: 100,
        energyDrain: 30,
        description: 'A research challenge blocking your path',
        icon: level === 1 ? '📚' : level === 2 ? '📝' : '📊'
      }
    };
  });

  // Add portals with clear visual distinction
  setPath(17, 17); // Exit portal
  maze[17][17] = {
    type: 'portal',
    position: { x: 17, y: 17 },
    isVisible: true,
    content: {
      id: 'exit_portal',
      name: 'Research Gateway',
      type: 'regular',
      position: { x: 17, y: 17 },
      requiredMastery: 0,
      isVisible: true,
      icon: '🌀'
    }
  };

  return maze;
};