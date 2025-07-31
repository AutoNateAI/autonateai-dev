import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GameState, Tool } from './types';

interface GameHUDProps {
  gameState: GameState;
  onPause: () => void;
  onToolSelect: (tool: Tool) => void;
}

const GameHUD: React.FC<GameHUDProps> = ({ gameState, onPause, onToolSelect }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const energyPercentage = (gameState.energy / 300) * 100;
  const timeWarning = gameState.timeRemaining < 120; // Warning when less than 2 minutes

  return (
    <div className="glass-card border-b border-border/50 p-4">
      {/* Main HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        {/* Left Side - Energy & AI Mastery */}
        <div className="flex items-center gap-4">
          {/* Energy */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">⚡ Energy:</span>
            <div className="w-24">
              <Progress 
                value={energyPercentage} 
                className={`h-2 ${energyPercentage < 20 ? 'bg-destructive/20' : 'bg-muted'}`}
              />
            </div>
            <span className={`text-sm font-mono ${energyPercentage < 20 ? 'text-destructive' : 'text-muted-foreground'}`}>
              {gameState.energy}/300
            </span>
          </div>

          {/* AI Mastery */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">🤖 AI Mastery:</span>
            <div className="w-20">
              <Progress 
                value={gameState.aiMastery} 
                className="h-2 bg-muted"
              />
            </div>
            <span className="text-sm font-mono text-muted-foreground">
              {gameState.aiMastery.toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Center - Timer */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">⏱️ Time:</span>
          <Badge 
            variant={timeWarning ? "destructive" : "secondary"}
            className={`font-mono text-lg px-3 py-1 ${timeWarning ? 'animate-pulse' : ''}`}
          >
            {formatTime(gameState.timeRemaining)}
          </Badge>
        </div>

        {/* Right Side - Coins & Controls */}
        <div className="flex items-center gap-4">
          {/* Coins */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">🪙 Coins:</span>
            <Badge variant="outline" className="font-mono">
              {gameState.coins}
            </Badge>
          </div>

          {/* Pause Button */}
          <Button
            onClick={onPause}
            variant="outline"
            size="sm"
            className="glass-card hover:glass-glow"
          >
            {gameState.isPaused ? '▶️ Resume' : '⏸️ Pause'}
          </Button>
        </div>
      </div>

      {/* Equipped Tools */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">🔧 Equipped Tools:</span>
        <div className="flex gap-2">
          {Array.from({ length: 3 }, (_, index) => {
            const tool = gameState.equippedTools[index];
            return (
              <div
                key={index}
                className={`
                  w-12 h-12 rounded-lg border-2 flex items-center justify-center text-lg
                  ${tool 
                    ? `bg-${tool.type === 'ai' ? 'primary' : tool.type === 'hybrid' ? 'secondary' : 'accent'}/20 
                       border-${tool.type === 'ai' ? 'primary' : tool.type === 'hybrid' ? 'secondary' : 'accent'}/50
                       hover:bg-${tool.type === 'ai' ? 'primary' : tool.type === 'hybrid' ? 'secondary' : 'accent'}/30` 
                    : 'bg-muted/20 border-muted/50'
                  }
                  transition-all duration-200 cursor-pointer
                `}
                title={tool ? `${tool.name} (${tool.type})` : 'Empty Slot'}
              >
                {tool ? tool.icon : '⭕'}
              </div>
            );
          })}
        </div>
        
        {/* Tool Effectiveness Indicator */}
        {gameState.equippedTools.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Speed:</span>
            <Badge variant="secondary" className="text-xs">
              {gameState.equippedTools.reduce((acc, tool) => acc + tool.speedMultiplier, 0)}x
            </Badge>
          </div>
        )}
      </div>

      {/* Current Level Indicator */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">📍 Current Area:</span>
          <Badge variant="outline">
            {gameState.currentLevel === 1 && '📚 Literature Review Labyrinth'}
            {gameState.currentLevel === 2 && '📝 Grant Writing Gauntlet'}
            {gameState.currentLevel === 3 && '📊 Data Analysis Dungeon'}
          </Badge>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-xs">
            📝 Notes
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            ℹ️ Help
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameHUD;