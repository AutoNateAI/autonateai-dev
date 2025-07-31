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

  // Create paths - single cell at a time for proper maze
  const setPath = (x: number, y: number) => {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      maze[y][x] = {
        type: 'path',
        position: { x, y },
        isVisible: false
      };
    }
  };

  // Create main L-shaped corridor from spawn to exit
  for (let x = 1; x <= 8; x++) setPath(x, 1); // Horizontal top
  for (let y = 1; y <= 8; y++) setPath(8, y); // Vertical down
  for (let x = 8; x <= 15; x++) setPath(x, 8); // Horizontal middle
  for (let y = 8; y <= 15; y++) setPath(15, y); // Vertical down
  for (let x = 15; x <= 18; x++) setPath(x, 15); // Horizontal bottom

  // Create branching paths
  for (let y = 3; y <= 6; y++) setPath(5, y); // Branch 1
  for (let x = 5; x <= 12; x++) setPath(x, 6); // Connect
  for (let y = 6; y <= 12; y++) setPath(12, y); // Branch 2
  for (let x = 3; x <= 7; x++) setPath(x, 12); // Branch 3
  for (let x = 10; x <= 17; x++) setPath(x, 3); // Branch 4

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