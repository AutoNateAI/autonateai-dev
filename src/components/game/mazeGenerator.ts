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

  // Create basic paths
  const createPath = (startX: number, startY: number, endX: number, endY: number) => {
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        if (x < size && y < size) {
          maze[y][x] = {
            type: 'path',
            position: { x, y },
            isVisible: false
          };
        }
      }
    }
  };

  // Create main corridors
  createPath(1, 1, 18, 1); // Top corridor
  createPath(1, 1, 1, 18); // Left corridor
  createPath(18, 1, 18, 18); // Right corridor
  createPath(1, 18, 18, 18); // Bottom corridor

  // Create internal paths
  createPath(5, 1, 5, 15);
  createPath(10, 1, 10, 15);
  createPath(15, 1, 15, 15);
  createPath(1, 5, 15, 5);
  createPath(1, 10, 15, 10);
  createPath(1, 15, 15, 15);

  // Add coins
  const coinPositions = [
    { x: 3, y: 3 }, { x: 7, y: 7 }, { x: 12, y: 4 }, { x: 16, y: 8 },
    { x: 2, y: 12 }, { x: 8, y: 15 }, { x: 14, y: 12 }
  ];
  
  coinPositions.forEach(pos => {
    if (maze[pos.y] && maze[pos.y][pos.x] && maze[pos.y][pos.x].type === 'path') {
      maze[pos.y][pos.x].type = 'coin';
    }
  });

  // Add monsters based on level
  const monsterPositions = level === 1 ? 
    [{ x: 8, y: 3 }, { x: 13, y: 7 }] :
    level === 2 ?
    [{ x: 6, y: 6 }, { x: 11, y: 11 }, { x: 16, y: 5 }] :
    [{ x: 4, y: 4 }, { x: 9, y: 9 }, { x: 14, y: 14 }, { x: 17, y: 3 }];

  monsterPositions.forEach((pos, index) => {
    if (maze[pos.y] && maze[pos.y][pos.x] && maze[pos.y][pos.x].type === 'path') {
      maze[pos.y][pos.x] = {
        type: 'monster',
        position: pos,
        isVisible: false,
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
    }
  });

  // Add portals
  const portalPositions = [{ x: 17, y: 17 }];
  portalPositions.forEach((pos, index) => {
    if (maze[pos.y] && maze[pos.y][pos.x]) {
      maze[pos.y][pos.x] = {
        type: 'portal',
        position: pos,
        isVisible: false,
        content: {
          id: `portal_${index}`,
          name: 'Research Gateway',
          type: 'regular',
          position: pos,
          requiredMastery: 0,
          isVisible: true,
          icon: '🌀'
        }
      };
    }
  });

  return maze;
};