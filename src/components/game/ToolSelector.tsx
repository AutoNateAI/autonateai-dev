import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tool } from './types';

interface ToolSelectorProps {
  equippedTools: Tool[];
  onToolSelect: (tool: Tool) => void;
  coins: number;
  aiMastery: number;
}

// Sample tools for the game
const availableTools: Tool[] = [
  // Legacy Tools (Blue)
  {
    id: 'manual_search',
    name: 'Manual Search',
    type: 'legacy',
    category: 'literature',
    cost: 0,
    icon: '📚',
    description: 'Traditional literature search methods',
    effectiveness: { paper_avalanche: 1, grant_gremlin: 0.5, data_beast: 0.5, deadline_dragon: 0.3 },
    speedMultiplier: 1,
    energyCost: 20
  },
  {
    id: 'spreadsheet',
    name: 'Spreadsheet',
    type: 'legacy',
    category: 'data',
    cost: 0,
    icon: '📊',
    description: 'Basic data analysis with spreadsheets',
    effectiveness: { paper_avalanche: 0.3, grant_gremlin: 0.5, data_beast: 1, deadline_dragon: 0.5 },
    speedMultiplier: 1,
    energyCost: 25
  },
  {
    id: 'citation_manager',
    name: 'Citation Manager',
    type: 'legacy',
    category: 'literature',
    cost: 5,
    icon: '📑',
    description: 'Organize references and citations',
    effectiveness: { paper_avalanche: 1.5, grant_gremlin: 0.8, data_beast: 0.3, deadline_dragon: 0.7 },
    speedMultiplier: 1.2,
    energyCost: 15
  },

  // Hybrid Tools (Purple)
  {
    id: 'search_api',
    name: 'Search API',
    type: 'hybrid',
    category: 'literature',
    cost: 15,
    icon: '🔍',
    description: 'API-powered search tools',
    effectiveness: { paper_avalanche: 2, grant_gremlin: 1, data_beast: 0.8, deadline_dragon: 1.2 },
    speedMultiplier: 2,
    energyCost: 10
  },
  {
    id: 'data_cleaner',
    name: 'Data Cleaner',
    type: 'hybrid',
    category: 'data',
    cost: 20,
    icon: '🧹',
    description: 'Automated data cleaning tools',
    effectiveness: { paper_avalanche: 0.5, grant_gremlin: 1, data_beast: 2.5, deadline_dragon: 1 },
    speedMultiplier: 2.5,
    energyCost: 8
  },
  {
    id: 'auto_formatter',
    name: 'Auto Formatter',
    type: 'hybrid',
    category: 'grant',
    cost: 12,
    icon: '📝',
    description: 'Automated document formatting',
    effectiveness: { paper_avalanche: 0.8, grant_gremlin: 2, data_beast: 0.5, deadline_dragon: 1.5 },
    speedMultiplier: 2,
    energyCost: 10
  },

  // AI Tools (Gold)
  {
    id: 'lit_review_ai',
    name: 'Lit Review AI',
    type: 'ai',
    category: 'literature',
    cost: 50,
    icon: '🤖',
    description: 'AI-powered literature analysis',
    effectiveness: { paper_avalanche: 5, grant_gremlin: 1.5, data_beast: 1, deadline_dragon: 2 },
    speedMultiplier: 5,
    energyCost: 5
  },
  {
    id: 'data_pipeline_ai',
    name: 'Data Pipeline AI',
    type: 'ai',
    category: 'data',
    cost: 60,
    icon: '🔄',
    description: 'Automated data processing pipeline',
    effectiveness: { paper_avalanche: 0.8, grant_gremlin: 1.2, data_beast: 5, deadline_dragon: 2.5 },
    speedMultiplier: 5,
    energyCost: 3
  },
  {
    id: 'grant_writer_ai',
    name: 'Grant Writer AI',
    type: 'ai',
    category: 'grant',
    cost: 70,
    icon: '✍️',
    description: 'AI-powered grant writing assistant',
    effectiveness: { paper_avalanche: 1, grant_gremlin: 5, data_beast: 1.5, deadline_dragon: 3 },
    speedMultiplier: 5,
    energyCost: 4
  }
];

const ToolSelector: React.FC<ToolSelectorProps> = ({ 
  equippedTools, 
  onToolSelect, 
  coins, 
  aiMastery 
}) => {
  const getToolColor = (type: Tool['type']) => {
    switch (type) {
      case 'legacy': return 'bg-blue-500/20 border-blue-500/50 text-blue-400';
      case 'hybrid': return 'bg-purple-500/20 border-purple-500/50 text-purple-400';
      case 'ai': return 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400';
      default: return 'bg-muted/20 border-muted/50 text-muted-foreground';
    }
  };

  const canAfford = (tool: Tool) => coins >= tool.cost;
  const canUse = (tool: Tool) => {
    if (tool.type === 'ai') {
      return aiMastery >= 30; // Require some AI mastery for AI tools
    }
    if (tool.type === 'hybrid') {
      return aiMastery >= 10; // Require basic AI mastery for hybrid tools
    }
    return true; // Legacy tools always available
  };

  const isEquipped = (tool: Tool) => equippedTools.some(t => t.id === tool.id);

  const handleToolClick = (tool: Tool) => {
    if (canAfford(tool) && canUse(tool)) {
      onToolSelect(tool);
    }
  };

  return (
    <Card className="glass-card h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          🛠️ Tool Shop
        </CardTitle>
        <CardDescription>
          Select up to 3 tools to overcome research obstacles
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Tool Categories */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center p-2 bg-blue-500/10 rounded">
            <div className="font-semibold text-blue-400">Legacy</div>
            <div className="text-muted-foreground">1x Speed</div>
          </div>
          <div className="text-center p-2 bg-purple-500/10 rounded">
            <div className="font-semibold text-purple-400">Hybrid</div>
            <div className="text-muted-foreground">2-3x Speed</div>
          </div>
          <div className="text-center p-2 bg-yellow-500/10 rounded">
            <div className="font-semibold text-yellow-400">AI</div>
            <div className="text-muted-foreground">5x Speed</div>
          </div>
        </div>

        {/* Tools List */}
        <div className="space-y-2 max-h-96 overflow-y-scroll scrollbar-hide">
          {availableTools.map((tool) => {
            const affordable = canAfford(tool);
            const usable = canUse(tool);
            const equipped = isEquipped(tool);
            const available = affordable && usable;

            return (
              <div
                key={tool.id}
                className={`
                  p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${getToolColor(tool.type)}
                  ${equipped ? 'ring-2 ring-primary' : ''}
                  ${available ? 'hover:scale-105 hover:shadow-md' : 'opacity-50 cursor-not-allowed'}
                `}
                onClick={() => handleToolClick(tool)}
                title={
                  !affordable 
                    ? `Need ${tool.cost} coins (have ${coins})` 
                    : !usable 
                    ? `Requires ${tool.type === 'ai' ? '30%' : '10%'} AI mastery (have ${aiMastery.toFixed(0)}%)`
                    : tool.description
                }
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{tool.icon}</span>
                    <span className="font-medium text-sm">{tool.name}</span>
                    {equipped && <Badge variant="secondary" className="text-xs">Equipped</Badge>}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">🪙{tool.cost}</span>
                    <span className="text-xs">⚡{tool.speedMultiplier}x</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground leading-tight">
                  {tool.description}
                </p>

                {/* Effectiveness Indicators */}
                <div className="grid grid-cols-4 gap-1 mt-2">
                  {Object.entries(tool.effectiveness).map(([monsterType, effectiveness]) => {
                    const getMonsterIcon = (type: string) => {
                      switch (type) {
                        case 'paper_avalanche': return '📚';
                        case 'grant_gremlin': return '📝';
                        case 'data_beast': return '📊';
                        case 'deadline_dragon': return '⏰';
                        default: return '❓';
                      }
                    };

                    const effectivenessColor = 
                      effectiveness >= 3 ? 'text-green-400' :
                      effectiveness >= 2 ? 'text-yellow-400' :
                      effectiveness >= 1 ? 'text-orange-400' : 'text-red-400';

                    return (
                      <div key={monsterType} className="text-center">
                        <div className="text-xs">{getMonsterIcon(monsterType)}</div>
                        <div className={`text-[10px] font-mono ${effectivenessColor}`}>
                          {effectiveness.toFixed(1)}x
                        </div>
                      </div>
                    );
                  })}
                </div>

                {!affordable && (
                  <div className="text-xs text-destructive mt-1">
                    Need {tool.cost - coins} more coins
                  </div>
                )}
                
                {!usable && affordable && (
                  <div className="text-xs text-destructive mt-1">
                    Requires {tool.type === 'ai' ? '30%' : '10%'} AI mastery
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Equipped Tools Summary */}
        {equippedTools.length > 0 && (
          <div className="border-t border-border/50 pt-3">
            <div className="text-sm font-medium mb-2">Current Loadout:</div>
            <div className="space-y-1">
              {equippedTools.map((tool) => (
                <div key={tool.id} className="flex items-center justify-between text-xs">
                  <span>{tool.icon} {tool.name}</span>
                  <span className="text-muted-foreground">{tool.speedMultiplier}x</span>
                </div>
              ))}
              <div className="flex items-center justify-between text-xs font-medium pt-1 border-t border-border/30">
                <span>Total Speed:</span>
                <span className="text-primary">
                  {equippedTools.reduce((acc, tool) => acc + tool.speedMultiplier, 0)}x
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ToolSelector;