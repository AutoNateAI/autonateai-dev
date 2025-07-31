import { MazeCell, Position } from './types';

export const generateMaze = (level: number): MazeCell[][] => {
  const size = 20;
  const maze: MazeCell[][] = [];

  // Initialize maze with walls first
  for (let y = 0; y < size; y++) {
    maze[y] = [];
    for (let x = 0; x < size; x++) {
      maze[y][x] = {
        type: 'wall',
        position: { x, y },
        isVisible: true
      };
    }
  }

  // Create paths to form a maze pattern
  const createPath = (x: number, y: number) => {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      maze[y][x] = {
        type: 'path',
        position: { x, y },
        isVisible: true
      };
    }
  };

  // Create a guaranteed path from start (1,1) to end (18,18)
  // Main horizontal corridors
  for (let x = 1; x <= 18; x++) {
    createPath(x, 1); // Top corridor
    createPath(x, 9); // Middle corridor  
    createPath(x, 18); // Bottom corridor
  }

  // Main vertical corridors
  for (let y = 1; y <= 18; y++) {
    createPath(1, y); // Left corridor
    createPath(9, y); // Middle corridor
    createPath(18, y); // Right corridor
  }

  // Additional cross paths to create maze complexity
  const crossPaths = [
    [5, 5], [5, 6], [5, 7], [5, 8], [5, 9],
    [13, 5], [13, 6], [13, 7], [13, 8], [13, 9],
    [3, 13], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9, 13],
    [11, 13], [12, 13], [13, 13], [14, 13], [15, 13], [16, 13]
  ];

  crossPaths.forEach(([x, y]) => createPath(x, y));

  // Ensure start and end positions are paths
  createPath(1, 1); // Start position
  createPath(18, 18); // End position

  // Add exactly 3 coins in safe path spots
  const coinSpots = [
    { x: 3, y: 3 }, { x: 9, y: 7 }, { x: 15, y: 11 }
  ];
  coinSpots.forEach(pos => {
    if (maze[pos.y][pos.x].type === 'path') {
      maze[pos.y][pos.x].type = 'coin';
    }
  });

  // Add exactly 1 guide
  maze[7][7] = {
    type: 'guide',
    position: { x: 7, y: 7 },
    isVisible: true
  };

  // Add exactly 2 monsters on path spots
  const monsterSpots = [{ x: 5, y: 7 }, { x: 13, y: 15 }];
  monsterSpots.forEach((pos, index) => {
    if (maze[pos.y][pos.x].type === 'path') {
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
    }
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