import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AscensionGame from '../components/game/AscensionGame';

const AscensionProtocol = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="w-full px-4 pt-20 pb-4">
        <div className="w-full">
          {/* Game Container */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
            <AscensionGame />
          </div>

          {/* Game Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="text-lg font-semibold mb-2">Navigate & Explore</h3>
              <p className="text-sm text-muted-foreground">
                Explore research-themed mazes and discover optimal paths through complex workflows
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Tools</h3>
              <p className="text-sm text-muted-foreground">
                Learn how AI tools can multiply your effectiveness and streamline research processes
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Personal Insights</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized recommendations based on your gameplay and research style
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AscensionProtocol;