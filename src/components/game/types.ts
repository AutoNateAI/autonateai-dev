export interface Position {
  x: number;
  y: number;
}

export interface Tool {
  id: string;
  name: string;
  type: 'legacy' | 'hybrid' | 'ai';
  category: 'literature' | 'grant' | 'data' | 'general';
  cost: number;
  icon: string;
  description: string;
  effectiveness: Record<string, number>;
  speedMultiplier: number;
  energyCost: number;
}

export interface Monster {
  id: string;
  name: string;
  type: 'paper_avalanche' | 'grant_gremlin' | 'data_beast' | 'deadline_dragon';
  position: Position;
  health: number;
  energyDrain: number;
  description: string;
  icon: string;
}

export interface Portal {
  id: string;
  name: string;
  type: 'regular' | 'major' | 'time' | 'hidden';
  position: Position;
  destination?: Position;
  requiredMastery: number;
  isVisible: boolean;
  icon: string;
}

export interface GameData {
  toolSelections: Array<{
    toolId: string;
    toolType: string;
    position: Position;
    timestamp: number;
  }>;
  pathChoices: Array<{
    from: Position;
    to: Position;
    timestamp: number;
  }>;
  monsterEncounters: Array<{
    monsterId: string;
    monsterType: string;
    toolsUsed: string[];
    effectiveness: number;
    energyCost: number;
    position: Position;
    timestamp: number;
  }>;
  portalUsage: Array<{
    portalId: string;
    portalType: string;
    position: Position;
    timestamp: number;
  }>;
  timeSpent: number;
}

export interface GameState {
  isPlaying: boolean;
  isCompleted: boolean;
  isPaused: boolean;
  currentLevel: number;
  playerPosition: Position;
  energy: number;
  aiMastery: number;
  coins: number;
  timeRemaining: number;
  equippedTools: Tool[];
  visibleArea: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  collectedData: GameData;
}

export interface MazeCell {
  type: 'wall' | 'path' | 'coin' | 'monster' | 'portal' | 'tool' | 'guide';
  position: Position;
  isVisible: boolean;
  content?: Monster | Portal | Tool;
}

export interface GameLevel {
  id: number;
  name: string;
  theme: string;
  maze: MazeCell[][];
  spawnPoint: Position;
  exitPortal: Position;
  description: string;
}