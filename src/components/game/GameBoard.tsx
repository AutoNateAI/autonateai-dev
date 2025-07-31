import React, { useState, useEffect } from 'react';
import { GameState, Position, Monster, MazeCell } from './types';
import { generateMaze } from './mazeGenerator';

interface GameBoardProps {
  gameState: GameState;
  onMove: (direction: 'up' | 'down' | 'left' | 'right') => void;
  onMonsterEncounter: (monster: Monster) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ gameState, onMove, onMonsterEncounter }) => {
  const [maze, setMaze] = useState<MazeCell[][]>([]);
  const [dragStart, setDragStart] = useState<Position | null>(null);

  // Generate maze when level changes
  useEffect(() => {
    const newMaze = generateMaze(gameState.currentLevel);
    setMaze(newMaze);
  }, [gameState.currentLevel]);

  // Handle touch/mouse controls
  const handlePointerDown = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDragStart({ x, y });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragStart) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    const deltaX = endX - dragStart.x;
    const deltaY = endY - dragStart.y;
    const threshold = 30; // Minimum swipe distance

    if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        onMove(deltaX > 0 ? 'right' : 'left');
      } else {
        // Vertical swipe
        onMove(deltaY > 0 ? 'down' : 'up');
      }
    }

    setDragStart(null);
  };

  const renderCell = (cell: MazeCell, rowIndex: number, colIndex: number) => {
    const isPlayer = gameState.playerPosition.x === colIndex && gameState.playerPosition.y === rowIndex;
    const isVisible = isPlayer || (
      Math.abs(gameState.playerPosition.x - colIndex) <= 2 && 
      Math.abs(gameState.playerPosition.y - rowIndex) <= 2
    );

    let cellContent = '';
    let cellClass = 'w-8 h-8 border border-border/20 flex items-center justify-center text-xs relative transition-all duration-300';

    if (!isVisible) {
      cellClass += ' bg-muted/50 text-muted-foreground/30';
      cellContent = '▓';
    } else {
      switch (cell.type) {
        case 'wall':
          cellClass += ' bg-muted text-muted-foreground';
          cellContent = '⬛';
          break;
        case 'path':
          cellClass += ' bg-background hover:bg-accent/20';
          cellContent = '';
          break;
        case 'coin':
          cellClass += ' bg-background hover:bg-accent/20 text-yellow-500';
          cellContent = '🪙';
          break;
        case 'monster':
          cellClass += ' bg-destructive/20 text-destructive animate-pulse';
          if (cell.content) {
            const monster = cell.content as Monster;
            switch (monster.type) {
              case 'paper_avalanche':
                cellContent = '📚';
                break;
              case 'grant_gremlin':
                cellContent = '📝';
                break;
              case 'data_beast':
                cellContent = '📊';
                break;
              case 'deadline_dragon':
                cellContent = '⏰';
                break;
            }
          }
          break;
        case 'portal':
          cellClass += ' bg-primary/20 text-primary animate-pulse';
          cellContent = '🌀';
          break;
        case 'tool':
          cellClass += ' bg-accent/20 text-accent';
          cellContent = '🔧';
          break;
        case 'guide':
          cellClass += ' bg-secondary/20 text-secondary animate-pulse';
          cellContent = '🧙‍♂️';
          break;
      }
    }

    if (isPlayer) {
      cellClass += ' ring-2 ring-primary bg-primary/30 animate-pulse z-10 relative';
      cellContent = '🧑‍🔬';
    }

    return (
      <div key={`${rowIndex}-${colIndex}`} className={cellClass}>
        {cellContent}
        {isPlayer && gameState.equippedTools.length > 0 && (
          <div className="absolute -top-1 -right-1 text-[8px]">
            {gameState.equippedTools.length === 3 ? '🤖' : gameState.equippedTools.length === 2 ? '⚙️' : '🔧'}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Game Board */}
      <div 
        className="glass-card p-4 rounded-xl bg-gradient-to-br from-background/80 to-primary/5 border border-primary/20"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        style={{ touchAction: 'none' }}
      >
        <div className="grid grid-cols-20 gap-0 border border-border/30 rounded-lg overflow-hidden">
          {maze.map((row, rowIndex) =>
            row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex))
          )}
        </div>
      </div>

      {/* Movement Controls for Mobile */}
      <div className="block md:hidden glass-card p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-2 w-32 mx-auto">
          <div></div>
          <button
            onClick={() => onMove('up')}
            className="h-10 w-10 glass-card hover:glass-glow flex items-center justify-center text-lg"
            disabled={!gameState.isPlaying || gameState.isPaused}
          >
            ⬆️
          </button>
          <div></div>
          <button
            onClick={() => onMove('left')}
            className="h-10 w-10 glass-card hover:glass-glow flex items-center justify-center text-lg"
            disabled={!gameState.isPlaying || gameState.isPaused}
          >
            ⬅️
          </button>
          <div></div>
          <button
            onClick={() => onMove('right')}
            className="h-10 w-10 glass-card hover:glass-glow flex items-center justify-center text-lg"
            disabled={!gameState.isPlaying || gameState.isPaused}
          >
            ➡️
          </button>
          <div></div>
          <button
            onClick={() => onMove('down')}
            className="h-10 w-10 glass-card hover:glass-glow flex items-center justify-center text-lg"
            disabled={!gameState.isPlaying || gameState.isPaused}
          >
            ⬇️
          </button>
          <div></div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Tap to move or swipe on the maze
        </p>
      </div>

      {/* Desktop Controls Hint */}
      <div className="hidden md:block text-sm text-muted-foreground text-center">
        Use arrow keys or WASD to move • Click and drag for touch controls
      </div>
    </div>
  );
};

export default GameBoard;