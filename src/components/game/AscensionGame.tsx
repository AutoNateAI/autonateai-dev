import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import GameBoard from './GameBoard';
import GameHUD from './GameHUD';
import ToolSelector from './ToolSelector';
import GameResults from './GameResults';
import { generateMaze } from './mazeGenerator';
import { GameState, Position, Tool, Monster, Portal, MazeCell } from './types';

interface AscensionGameProps {
  onGameStateChange?: (gameStarted: boolean) => void;
}

const AscensionGame: React.FC<AscensionGameProps> = ({ onGameStateChange }) => {
  // ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL LOGIC TO PREVENT HOOK ERRORS
  
  // Separate timer state to prevent unnecessary re-renders
  const [timeRemaining, setTimeRemaining] = useState(600);
  
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    isCompleted: false,
    isPaused: false,
    currentLevel: 1,
    playerPosition: { x: 1, y: 1 },
    energy: 300,
    aiMastery: 0,
    coins: 0,
    timeRemaining: 600,
    equippedTools: [],
    visibleArea: { startX: 0, startY: 0, endX: 10, endY: 10 },
      collectedData: {
        toolSelections: [],
        pathChoices: [],
        monsterEncounters: [],
        portalUsage: [],
        timeSpent: 0,
        collectedCoins: []
      }
  });

  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [maze, setMaze] = useState<MazeCell[][]>([]);

  // Game timer - separate from main game state to prevent re-renders
  useEffect(() => {
    if (!gameState.isPlaying || gameState.isPaused || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setGameState(current => ({ ...current, isPlaying: false, isCompleted: true, timeRemaining: 0 }));
          return 0;
        }
        setGameState(current => ({
          ...current,
          timeRemaining: prev - 1,
          collectedData: {
            ...current.collectedData,
            timeSpent: current.collectedData.timeSpent + 1
          }
        }));
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isPlaying, gameState.isPaused, timeRemaining]);

  // Generate maze when level changes
  useEffect(() => {
    const newMaze = generateMaze(gameState.currentLevel);
    setMaze(newMaze);
  }, [gameState.currentLevel]);

  const startGame = useCallback(() => {
    setTimeRemaining(600);
    setGameState(prev => ({
      ...prev,
      isPlaying: true,
      isCompleted: false,
      playerPosition: { x: 1, y: 1 },
      energy: 300,
      aiMastery: 0,
      coins: 0,
      timeRemaining: 600,
      currentLevel: 1,
      equippedTools: [],
      collectedData: {
        toolSelections: [],
        pathChoices: [],
        monsterEncounters: [],
        portalUsage: [],
        timeSpent: 0,
        collectedCoins: []
      }
    }));
    setGameStarted(true);
    onGameStateChange?.(true);
  }, [onGameStateChange]);

  const pauseGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  const movePlayer = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (!gameState.isPlaying || gameState.isPaused) return;

    setGameState(prev => {
      const newPosition = { ...prev.playerPosition };
      
      switch (direction) {
        case 'up':
          newPosition.y = Math.max(0, newPosition.y - 1);
          break;
        case 'down':
          newPosition.y = Math.min(19, newPosition.y + 1);
          break;
        case 'left':
          newPosition.x = Math.max(0, newPosition.x - 1);
          break;
        case 'right':
          newPosition.x = Math.min(19, newPosition.x + 1);
          break;
      }

      if (maze.length > 0 && maze[newPosition.y] && maze[newPosition.y][newPosition.x]) {
        const targetCell = maze[newPosition.y][newPosition.x];
        if (targetCell.type === 'wall') {
          return prev;
        }
      }

      if (newPosition.x === prev.playerPosition.x && newPosition.y === prev.playerPosition.y) {
        return prev;
      }

      let newCoins = prev.coins;
      let newIsCompleted = prev.isCompleted;
      let newCollectedCoins = [...prev.collectedData.collectedCoins || []];
      
      if (maze.length > 0 && maze[newPosition.y] && maze[newPosition.y][newPosition.x]) {
        const targetCell = maze[newPosition.y][newPosition.x];
        if (targetCell.type === 'coin') {
          const coinKey = `${newPosition.x}-${newPosition.y}`;
          if (!newCollectedCoins.includes(coinKey)) {
            newCoins += 1;
            newCollectedCoins.push(coinKey);
            
            setTimeout(() => {
              setGameState(currentState => ({
                ...currentState,
                collectedData: {
                  ...currentState.collectedData,
                  collectedCoins: currentState.collectedData.collectedCoins?.filter(c => c !== coinKey) || []
                }
              }));
            }, 5000);
          }
        } else if (targetCell.type === 'portal') {
          newIsCompleted = true;
        }
      }

      setCameraPosition({
        x: Math.max(0, Math.min(10, newPosition.x - 5)),
        y: Math.max(0, Math.min(10, newPosition.y - 5))
      });

      const pathChoice = {
        from: prev.playerPosition,
        to: newPosition,
        timestamp: Date.now()
      };

      return {
        ...prev,
        playerPosition: newPosition,
        coins: newCoins,
        isCompleted: newIsCompleted,
        isPlaying: !newIsCompleted,
        collectedData: {
          ...prev.collectedData,
          pathChoices: [...prev.collectedData.pathChoices, pathChoice],
          collectedCoins: newCollectedCoins
        }
      };
    });
  }, [gameState.isPlaying, gameState.isPaused, maze]);

  const selectTool = useCallback((tool: Tool) => {
    if (!gameState.isPlaying) return;

    setGameState(prev => {
      const newTools = [...prev.equippedTools];
      
      const existingIndex = newTools.findIndex(t => t.id === tool.id);
      if (existingIndex >= 0) {
        newTools.splice(existingIndex, 1);
      } else if (newTools.length < 3) {
        newTools.push(tool);
      } else {
        newTools[0] = tool;
      }

      const toolSelection = {
        toolId: tool.id,
        toolType: tool.type,
        position: prev.playerPosition,
        timestamp: Date.now()
      };

      return {
        ...prev,
        equippedTools: newTools,
        collectedData: {
          ...prev.collectedData,
          toolSelections: [...prev.collectedData.toolSelections, toolSelection]
        }
      };
    });
  }, [gameState.isPlaying]);

  const generateNewBoard = useCallback(() => {
    if (!gameState.isPlaying) return;
    
    const newMaze = generateMaze(gameState.currentLevel);
    setMaze(newMaze);
    
    // Reset player to start position
    setGameState(prev => ({
      ...prev,
      playerPosition: { x: 1, y: 1 }
    }));
    
    setCameraPosition({ x: 0, y: 0 });
  }, [gameState.isPlaying, gameState.currentLevel]);

  const handleMonsterEncounter = useCallback((monster: Monster) => {
    if (!gameState.isPlaying) return;

    const effectiveness = gameState.equippedTools.reduce((acc, tool) => {
      return acc + (tool.effectiveness[monster.type] || 1);
    }, 1);

    const energyCost = Math.max(10, 50 - (effectiveness * 10));
    const aiMasteryGain = Math.min(5, effectiveness);

    setGameState(prev => {
      const encounter = {
        monsterId: monster.id,
        monsterType: monster.type,
        toolsUsed: prev.equippedTools.map(t => t.id),
        effectiveness,
        energyCost,
        position: prev.playerPosition,
        timestamp: Date.now()
      };

      return {
        ...prev,
        energy: Math.max(0, prev.energy - energyCost),
        aiMastery: Math.min(100, prev.aiMastery + aiMasteryGain),
        collectedData: {
          ...prev.collectedData,
          monsterEncounters: [...prev.collectedData.monsterEncounters, encounter]
        }
      };
    });
  }, [gameState.isPlaying, gameState.equippedTools]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameState.isPlaying || gameState.isPaused) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          movePlayer('up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          movePlayer('down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          movePlayer('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          movePlayer('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer, gameState.isPlaying, gameState.isPaused]);

  // Memoize tool selector props to prevent re-renders
  const toolSelectorProps = useMemo(() => ({
    equippedTools: gameState.equippedTools,
    coins: gameState.coins,
    aiMastery: gameState.aiMastery
  }), [gameState.equippedTools, gameState.coins, gameState.aiMastery]);

  // CONDITIONAL RENDERING AFTER ALL HOOKS TO PREVENT HOOK RULE VIOLATIONS
  if (gameState.isCompleted) {
    return <GameResults gameData={gameState.collectedData} onRestart={startGame} />;
  }

  if (!gameStarted) {
    return (
      <div className="h-[500px] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="text-4xl mb-3">🧬</div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ascension Protocol
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Navigate the research workflow maze. Discover how AI tools can transform your productivity 
            and efficiency as you solve puzzles, overcome obstacles, and ascend to research mastery.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Navigate through three themed areas: Literature Review, Grant Writing, and Data Analysis. 
            Use AI tools strategically to overcome obstacles and discover your optimal research workflow.
          </p>
          
          <div className="grid grid-cols-2 gap-3 my-6">
            <div className="glass-card p-3">
              <h3 className="font-semibold mb-1 text-sm">🎮 Controls</h3>
              <p className="text-xs text-muted-foreground">
                Arrow keys or WASD to move. Strategic thinking wins!
              </p>
            </div>
            <div className="glass-card p-3">
              <h3 className="font-semibold mb-1 text-sm">⏱️ Time Limit</h3>
              <p className="text-xs text-muted-foreground">
                10 minutes to complete the challenge!
              </p>
            </div>
          </div>

          <Button 
            onClick={startGame} 
            size="lg" 
            className="text-base px-6 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            🚀 Start Ascension Protocol
          </Button>
        </div>
      </div>
    );
  }

  const GameContent = () => (
    <div className="bg-gradient-to-br from-background/50 to-primary/5 relative h-full">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 p-2 lg:p-4 h-full">
        {/* Mobile Tool Shop - compact version at top */}
        <div className="lg:hidden">
          <div className="glass-card p-2 rounded-lg">
            <ToolSelector
              equippedTools={toolSelectorProps.equippedTools}
              onToolSelect={selectTool}
              coins={toolSelectorProps.coins}
              aiMastery={toolSelectorProps.aiMastery}
            />
          </div>
        </div>

        <div className="flex-1 flex items-start justify-center min-w-0">
          <div className="w-full max-w-[640px] h-full flex flex-col">
            <GameBoard
              gameState={gameState}
              onMove={movePlayer}
              onMonsterEncounter={handleMonsterEncounter}
              cameraPosition={cameraPosition}
              maze={maze}
            />
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className="w-80 hidden lg:flex flex-col gap-4 items-start">
          <div className="glass-card p-3 rounded-lg">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>{gameState.energy}/300</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🧠</span>
                <span>{gameState.aiMastery}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🪙</span>
                <span>{gameState.coins}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span>{Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <Button
                  onClick={generateNewBoard}
                  variant="outline"
                  size="sm"
                  className="glass-card flex-1"
                  title="Generate a new solvable board"
                >
                  🔄 New Board
                </Button>
                {!isFullscreen && (
                  <Button
                    onClick={() => setIsFullscreen(true)}
                    variant="outline"
                    size="sm"
                    className="glass-card flex-1"
                  >
                    🔍 Fullscreen
                  </Button>
                )}
                <Button
                  onClick={pauseGame}
                  variant="outline"
                  size="sm"
                  className="glass-card"
                >
                  {gameState.isPaused ? '▶️' : '⏸️'}
                </Button>
              </div>
            </div>
          </div>

          <ToolSelector
            equippedTools={toolSelectorProps.equippedTools}
            onToolSelect={selectTool}
            coins={toolSelectorProps.coins}
            aiMastery={toolSelectorProps.aiMastery}
          />
        </div>
      </div>

      {gameState.isPaused && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Game Paused</h3>
            <Button onClick={pauseGame} size="lg">
              Resume Game
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {!isFullscreen ? (
        <div className="min-h-[700px]">
          <GameContent />
        </div>
      ) : (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="absolute top-4 right-4 z-60">
            <Button
              onClick={() => setIsFullscreen(false)}
              variant="outline"
              size="sm"
              className="glass-card"
            >
              ❌ Exit Fullscreen
            </Button>
          </div>
          <div className="h-full w-full">
            <GameContent />
          </div>
        </div>
      )}
    </>
  );
};

export default AscensionGame;