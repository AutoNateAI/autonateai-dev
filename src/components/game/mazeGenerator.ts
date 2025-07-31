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

  // Create main pathways
  // Horizontal paths
  for (let x = 1; x < size - 1; x += 2) {
    for (let y = 1; y < size; y += 4) {
      createPath(x, y);
      createPath(x, y + 1);
    }
  }

  // Vertical paths
  for (let y = 1; y < size - 1; y += 2) {
    for (let x = 1; x < size; x += 4) {
      createPath(x, y);
      createPath(x + 1, y);
    }
  }

  // Create connecting paths
  const connections = [
    [3, 3], [7, 3], [11, 3], [15, 3],
    [1, 7], [5, 7], [9, 7], [13, 7], [17, 7],
    [3, 11], [7, 11], [11, 11], [15, 11],
    [1, 15], [5, 15], [9, 15], [13, 15], [17, 15]
  ];

  connections.forEach(([x, y]) => createPath(x, y));

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