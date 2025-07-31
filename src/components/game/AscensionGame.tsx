import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import GameBoard from './GameBoard';
import GameHUD from './GameHUD';
import ToolSelector from './ToolSelector';
import GameResults from './GameResults';
import { GameState, Position, Tool, Monster, Portal } from './types';

const AscensionGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    isCompleted: false,
    isPaused: false,
    currentLevel: 1,
    playerPosition: { x: 1, y: 1 },
    energy: 300,
    aiMastery: 0,
    coins: 0,
    timeRemaining: 600, // 10 minutes
    equippedTools: [],
    visibleArea: { startX: 0, startY: 0, endX: 10, endY: 10 },
    collectedData: {
      toolSelections: [],
      pathChoices: [],
      monsterEncounters: [],
      portalUsage: [],
      timeSpent: 0
    }
  });

  const [gameStarted, setGameStarted] = useState(false);

  // Game timer
  useEffect(() => {
    if (!gameState.isPlaying || gameState.isPaused || gameState.timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeRemaining <= 1) {
          return { ...prev, timeRemaining: 0, isPlaying: false, isCompleted: true };
        }
        return { 
          ...prev, 
          timeRemaining: prev.timeRemaining - 1,
          collectedData: {
            ...prev.collectedData,
            timeSpent: prev.collectedData.timeSpent + 1
          }
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isPlaying, gameState.isPaused, gameState.timeRemaining]);

  const startGame = useCallback(() => {
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
        timeSpent: 0
      }
    }));
    setGameStarted(true);
  }, []);

  const pauseGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  const movePlayer = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (!gameState.isPlaying || gameState.isPaused) return;

    setGameState(prev => {
      const newPosition = { ...prev.playerPosition };
      
      // Calculate new position (tile-by-tile movement)
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

      // Only move if position actually changed (simple bounds check only)
      if (newPosition.x === prev.playerPosition.x && newPosition.y === prev.playerPosition.y) {
        return prev; // No movement (hit boundary)
      }

      // Record path choice
      const pathChoice = {
        from: prev.playerPosition,
        to: newPosition,
        timestamp: Date.now()
      };

      return {
        ...prev,
        playerPosition: newPosition,
        collectedData: {
          ...prev.collectedData,
          pathChoices: [...prev.collectedData.pathChoices, pathChoice]
        }
      };
    });
  }, [gameState.isPlaying, gameState.isPaused]);

  const selectTool = useCallback((tool: Tool) => {
    if (!gameState.isPlaying) return;

    setGameState(prev => {
      const newTools = [...prev.equippedTools];
      
      // If tool is already equipped, remove it
      const existingIndex = newTools.findIndex(t => t.id === tool.id);
      if (existingIndex >= 0) {
        newTools.splice(existingIndex, 1);
      } else if (newTools.length < 3) {
        // Add tool if there's space
        newTools.push(tool);
      } else {
        // Replace the first tool if at capacity
        newTools[0] = tool;
      }

      // Record tool selection
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

  const handleMonsterEncounter = useCallback((monster: Monster) => {
    if (!gameState.isPlaying) return;

    // Simple encounter resolution - can be expanded
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

      switch (e.key.toLowerCase()) {
        case 'arrowup':
        case 'w':
          e.preventDefault();
          movePlayer('up');
          break;
        case 'arrowdown':
        case 's':
          e.preventDefault();
          movePlayer('down');
          break;
        case 'arrowleft':
        case 'a':
          e.preventDefault();
          movePlayer('left');
          break;
        case 'arrowright':
        case 'd':
          e.preventDefault();
          movePlayer('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer, gameState.isPlaying, gameState.isPaused]);

  if (gameState.isCompleted) {
    return <GameResults gameData={gameState.collectedData} onRestart={startGame} />;
  }

  if (!gameStarted) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-6xl mb-4">🧬</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Begin Your Ascension?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You're about to enter a research workflow simulation where every decision matters. 
            Navigate through three themed areas: Literature Review, Grant Writing, and Data Analysis. 
            Use AI tools strategically to overcome obstacles and discover your optimal research workflow.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="glass-card p-4">
              <h3 className="font-semibold mb-2">🎮 Controls</h3>
              <p className="text-sm text-muted-foreground">
                Use arrow keys or WASD to move. Click tools to equip them. Strategic thinking wins!
              </p>
            </div>
            <div className="glass-card p-4">
              <h3 className="font-semibold mb-2">⏱️ Time Limit</h3>
              <p className="text-sm text-muted-foreground">
                10 minutes to complete the challenge. Use AI tools to multiply your speed!
              </p>
            </div>
          </div>

          <Button 
            onClick={startGame} 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            🚀 Start Ascension Protocol
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-background/50 to-primary/5 relative">
      {/* Game HUD */}
      <GameHUD 
        gameState={gameState}
        onPause={pauseGame}
        onToolSelect={selectTool}
      />

      {/* Main Game Area */}
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Game Board */}
        <div className="flex-1 min-h-[500px]">
          <GameBoard
            gameState={gameState}
            onMove={movePlayer}
            onMonsterEncounter={handleMonsterEncounter}
          />
        </div>

        {/* Tool Selector - Mobile: Below, Desktop: Right side */}
        <div className="lg:w-80">
          <ToolSelector
            equippedTools={gameState.equippedTools}
            onToolSelect={selectTool}
            coins={gameState.coins}
            aiMastery={gameState.aiMastery}
          />
        </div>
      </div>

      {/* Pause Overlay */}
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
};

export default AscensionGame;