import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { GameData } from './types';

interface GameResultsProps {
  gameData: GameData;
  onRestart: () => void;
}

const GameResults: React.FC<GameResultsProps> = ({ gameData, onRestart }) => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate performance metrics
  const calculateMetrics = () => {
    const totalTime = gameData.timeSpent;
    const totalToolSelections = gameData.toolSelections.length;
    const aiToolUsage = gameData.toolSelections.filter(ts => ts.toolType === 'ai').length;
    const hybridToolUsage = gameData.toolSelections.filter(ts => ts.toolType === 'hybrid').length;
    const legacyToolUsage = gameData.toolSelections.filter(ts => ts.toolType === 'legacy').length;
    
    const totalMonsterEncounters = gameData.monsterEncounters.length;
    const successfulEncounters = gameData.monsterEncounters.filter(me => me.effectiveness > 2).length;
    const portalUsage = gameData.portalUsage.length;

    // Research Efficiency Score (0-100)
    const efficiencyScore = Math.min(100, 
      (successfulEncounters / Math.max(1, totalMonsterEncounters)) * 40 +
      (aiToolUsage / Math.max(1, totalToolSelections)) * 30 +
      (portalUsage) * 5 +
      Math.max(0, 25 - (totalTime / 60) * 5) // Time bonus
    );

    // AI Adoption Level (0-100)
    const aiAdoption = Math.min(100,
      (aiToolUsage / Math.max(1, totalToolSelections)) * 60 +
      (hybridToolUsage / Math.max(1, totalToolSelections)) * 30 +
      (gameData.monsterEncounters.filter(me => me.toolsUsed.length > 1).length * 2)
    );

    // Strategic Planning Score (0-100)
    const strategicScore = Math.min(100,
      (portalUsage * 15) +
      (gameData.pathChoices.length > 50 ? 20 : gameData.pathChoices.length * 0.4) +
      (gameData.monsterEncounters.filter(me => me.effectiveness > 3).length * 10)
    );

    return {
      efficiencyScore: Math.round(efficiencyScore),
      aiAdoption: Math.round(aiAdoption),
      strategicScore: Math.round(strategicScore),
      totalTime,
      toolStats: { ai: aiToolUsage, hybrid: hybridToolUsage, legacy: legacyToolUsage },
      encounterStats: { total: totalMonsterEncounters, successful: successfulEncounters }
    };
  };

  const metrics = calculateMetrics();

  // Determine researcher profile
  const getResearcherProfile = () => {
    const { efficiencyScore, aiAdoption, strategicScore } = metrics;
    
    if (aiAdoption >= 70 && efficiencyScore >= 80) {
      return {
        type: 'AI Research Pioneer',
        icon: '🚀',
        description: 'You embrace cutting-edge AI tools and achieve exceptional efficiency',
        recommendations: ['Advanced AI workflow automation', 'Multi-tool integration strategies', 'Thought leadership opportunities']
      };
    } else if (strategicScore >= 70 && efficiencyScore >= 60) {
      return {
        type: 'Strategic Planner',
        icon: '🎯',
        description: 'You excel at long-term planning and optimal resource allocation',
        recommendations: ['Project management AI tools', 'Strategic research frameworks', 'Cross-functional collaboration tools']
      };
    } else if (aiAdoption >= 50 && aiAdoption < 70) {
      return {
        type: 'Pragmatic Adopter',
        icon: '⚖️',
        description: 'You balance traditional methods with selective AI tool adoption',
        recommendations: ['Gradual AI integration plan', 'Hybrid workflow optimization', 'Change management strategies']
      };
    } else if (metrics.toolStats.legacy > metrics.toolStats.ai + metrics.toolStats.hybrid) {
      return {
        type: 'Traditional Researcher',
        icon: '📚',
        description: 'You prefer established methods but could benefit from AI augmentation',
        recommendations: ['AI literacy training', 'Low-risk AI tool trials', 'Peer success stories']
      };
    } else {
      return {
        type: 'Emerging Innovator',
        icon: '🌱',
        description: 'You\'re developing your research optimization skills',
        recommendations: ['Foundational AI tools', 'Structured learning path', 'Mentorship programs']
      };
    }
  };

  const profile = getResearcherProfile();

  const handleEmailSubmit = async () => {
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual implementation
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEmailSubmitted(true);
    } catch (error) {
      console.error('Failed to submit email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[600px] p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Ascension Complete! 🎉
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover your research optimization profile and personalized recommendations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Metrics */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Performance Metrics
            </CardTitle>
            <CardDescription>
              Your research workflow analysis results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Efficiency Score */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Research Efficiency</span>
                <Badge variant="secondary">{metrics.efficiencyScore}/100</Badge>
              </div>
              <Progress value={metrics.efficiencyScore} className="h-2" />
            </div>

            {/* AI Adoption */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">AI Adoption Level</span>
                <Badge variant="secondary">{metrics.aiAdoption}/100</Badge>
              </div>
              <Progress value={metrics.aiAdoption} className="h-2" />
            </div>

            {/* Strategic Planning */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Strategic Planning</span>
                <Badge variant="secondary">{metrics.strategicScore}/100</Badge>
              </div>
              <Progress value={metrics.strategicScore} className="h-2" />
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div className="space-y-2">
                <div className="text-sm font-medium">Tool Usage</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>🤖 AI Tools:</span>
                    <span>{metrics.toolStats.ai}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⚙️ Hybrid Tools:</span>
                    <span>{metrics.toolStats.hybrid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📚 Legacy Tools:</span>
                    <span>{metrics.toolStats.legacy}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Challenge Stats</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Total Encounters:</span>
                    <span>{metrics.encounterStats.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Successful:</span>
                    <span>{metrics.encounterStats.successful}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Spent:</span>
                    <span>{Math.floor(metrics.totalTime / 60)}m {metrics.totalTime % 60}s</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Researcher Profile */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {profile.icon} Researcher Profile
            </CardTitle>
            <CardDescription>
              Your personalized research optimization profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {profile.type}
              </div>
              <p className="text-muted-foreground">
                {profile.description}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3">🎯 Recommended Next Steps:</h4>
              <ul className="space-y-2">
                {profile.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Email Capture */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📧 Get Your Full Report
          </CardTitle>
          <CardDescription>
            Receive detailed insights and personalized AI tool recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!emailSubmitted ? (
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleEmailSubmit}
                disabled={!email.trim() || isSubmitting}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                {isSubmitting ? 'Sending...' : 'Get Report'}
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <div className="text-lg font-medium text-green-600">✅ Report Sent!</div>
              <p className="text-sm text-muted-foreground">
                Check your email for your personalized research optimization report and tool recommendations.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onRestart}
          variant="outline"
          size="lg"
          className="glass-card hover:glass-glow"
        >
          🔄 Try Again
        </Button>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          onClick={() => window.open('/products', '_blank')}
        >
          🛠️ Explore AI Tools
        </Button>
      </div>
    </div>
  );
};

export default GameResults;