import React, { useState, useEffect } from 'react';
import { GameState, Position, Monster, MazeCell } from './types';
import { generateMaze } from './mazeGenerator';

interface GameBoardProps {
  gameState: GameState;
  onMove: (direction: 'up' | 'down' | 'left' | 'right') => void;
  onMonsterEncounter: (monster: Monster) => void;
  cameraPosition: { x: number; y: number };
}

const GameBoard: React.FC<GameBoardProps> = ({ gameState, onMove, onMonsterEncounter, cameraPosition }) => {
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
    
    let cellContent = '';
    let cellClass = 'w-6 h-6 border border-border/30 flex items-center justify-center text-xs font-bold relative transition-all duration-200';

    // Render all cells clearly
    switch (cell.type) {
      case 'wall':
        cellClass += ' bg-muted text-muted-foreground';
        cellContent = '⬛';
        break;
      case 'path':
        cellClass += ' bg-background hover:bg-accent/20 border-border/50';
        cellContent = '';
        break;
      case 'coin':
        cellClass += ' bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 border-yellow-300';
        cellContent = '🪙';
        break;
      case 'monster':
        cellClass += ' bg-red-100 dark:bg-red-900/30 text-red-600 animate-pulse border-red-300';
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
        cellClass += ' bg-blue-100 dark:bg-blue-900/30 text-blue-600 animate-pulse border-blue-300';
        cellContent = '🌀';
        break;
      case 'tool':
        cellClass += ' bg-green-100 dark:bg-green-900/30 text-green-600 border-green-300';
        cellContent = '🔧';
        break;
      case 'guide':
        cellClass += ' bg-purple-100 dark:bg-purple-900/30 text-purple-600 animate-pulse border-purple-300';
        cellContent = '🧙‍♂️';
        break;
    }

    if (isPlayer) {
      cellClass += ' ring-2 ring-primary bg-primary/30 z-10 relative';
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

    // Calculate visible area (10x10 viewport)
    const visibleStartX = cameraPosition.x;
    const visibleEndX = Math.min(20, cameraPosition.x + 10);
    const visibleStartY = cameraPosition.y;
    const visibleEndY = Math.min(20, cameraPosition.y + 10);

    return (
      <div className="w-full h-full flex flex-col">
        {/* Game Board with Camera View */}
        <div 
          className="flex-1 glass-card p-2 rounded-xl bg-gradient-to-br from-background/80 to-primary/5 border border-primary/20"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          style={{ touchAction: 'none' }}
        >
          <div className="grid grid-cols-10 gap-0 border border-border/30 rounded-lg overflow-hidden w-full h-full">
            {maze.slice(visibleStartY, visibleEndY).map((row, rowIndex) =>
              row.slice(visibleStartX, visibleEndX).map((cell, colIndex) => 
                renderCell(cell, visibleStartY + rowIndex, visibleStartX + colIndex)
              )
            )}
          </div>
        </div>

        {/* Movement Controls for Mobile */}
        <div className="block md:hidden mt-4 glass-card p-4 rounded-lg">
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
        <div className="hidden md:block text-sm text-muted-foreground text-center mt-2">
          Use arrow keys or WASD to move • Click and drag for touch controls
        </div>
      </div>
    );
};

export default GameBoard;