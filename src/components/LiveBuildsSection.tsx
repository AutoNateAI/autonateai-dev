import { Calendar, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import liveBuildsImage from '../assets/live-builds-development.jpg';

const LiveBuildsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See It{' '}
            <span className="text-gradient">Live</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We build in the open.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Every week, we go live to show how AI + critical thinking can solve real business problems 
            in under an hour. From concept to working tool, we demonstrate what's possible — transparently.
          </p>
          
          {/* Live Builds Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={liveBuildsImage} 
              alt="Live development sessions"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Live Builds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 group hover:scale-105 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Live Build Calendar</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              See our upcoming live builds, reserve your spot, and watch us solve real business 
              problems in real-time using AI and critical thinking frameworks.
            </p>
            <Link 
              to="/live-builds" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View Calendar
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="glass-card p-8 group hover:scale-105 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Join the Next Session</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experience firsthand how we transform complex business challenges into working 
              AI-integrated solutions. No black boxes, no smoke and mirrors.
            </p>
            <Link 
              to="/live-builds" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Reserve Spot
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/live-builds" className="btn-primary text-lg px-8 py-4">
            View the Live Build Calendar
          </Link>
          <Link to="/live-builds" className="btn-glass text-lg px-8 py-4">
            Join the Next Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiveBuildsSection;