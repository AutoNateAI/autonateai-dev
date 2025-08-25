import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, ArrowLeft, ExternalLink, Play, Tag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import realEstateImg from '../assets/real-estate-analysis.jpg';
import financeImg from '../assets/finance-ai-dashboard.jpg';
import hospitalityImg from '../assets/hospitality-optimizer.jpg';

interface LiveBuild {
  id: string;
  title: string;
  description: string;
  short_description: string | null;
  scheduled_date: string;
  duration_minutes: number | null;
  max_attendees: number | null;
  current_attendees: number | null;
  status: string;
  calendly_url: string | null;
  replay_url: string | null;
  image_url: string | null;
  tags: string[];
  content: string | null;
  created_at: string;
}

const LiveBuildDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [liveBuild, setLiveBuild] = useState<LiveBuild | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      fetchLiveBuild(id);
    }
  }, [id]);

  const fetchLiveBuild = async (buildId: string) => {
    try {
      const { data, error } = await supabase
        .from('live_builds')
        .select('*')
        .eq('id', buildId)
        .eq('is_published', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          throw error;
        }
        return;
      }

      setLiveBuild({
        ...data,
        tags: Array.isArray(data.tags) ? data.tags.filter((tag): tag is string => typeof tag === 'string') : [],
        duration_minutes: data.duration_minutes || 60,
        current_attendees: data.current_attendees || 0
      });
    } catch (error) {
      console.error('Error fetching live build:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !liveBuild) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Live Build Not Found</h1>
          <p className="text-muted-foreground mb-8">The live build you're looking for doesn't exist or has been removed.</p>
          <Link to="/live-builds" className="btn-primary">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Live Builds
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const now = new Date();
  const buildDate = new Date(liveBuild.scheduled_date);
  const isUpcoming = buildDate > now;
  const isCompleted = buildDate <= now;

  // Function to get stock image based on title
  const getStockImage = (title: string) => {
    if (title.includes('Real Estate')) return realEstateImg;
    if (title.includes('Finance') || title.includes('Copilot')) return financeImg;
    if (title.includes('Hospitality')) return hospitalityImg;
    return realEstateImg; // fallback
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Back Button */}
      <section className="pt-32 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/live-builds"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Live Builds
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Badge */}
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              isUpcoming ? 'bg-blue-500/10 text-blue-500' : 
              isCompleted ? 'bg-gray-500/10 text-gray-500' : 'bg-green-500/10 text-green-500'
            }`}>
              {isUpcoming ? 'Upcoming Live Build' : isCompleted ? 'Completed Live Build' : 'Live Now'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {liveBuild.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {format(new Date(liveBuild.scheduled_date), 'EEEE, MMMM dd, yyyy • h:mm a')}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {liveBuild.duration_minutes} minutes
            </div>
            {liveBuild.max_attendees && (
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {liveBuild.current_attendees} / {liveBuild.max_attendees} attendees
              </div>
            )}
          </div>

          {/* Tags */}
          {liveBuild.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {liveBuild.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Image */}
          <div className="aspect-video mb-8 rounded-2xl overflow-hidden">
            <img 
              src={liveBuild.image_url || getStockImage(liveBuild.title)} 
              alt={liveBuild.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {isUpcoming && liveBuild.calendly_url && (
              <a
                href={liveBuild.calendly_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Reserve Your Spot
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            
            {isCompleted && liveBuild.replay_url && (
              <a
                href={liveBuild.replay_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Watch Replay
                <Play className="w-5 h-5" />
              </a>
            )}

            <Link
              to="/contact"
              className="btn-glass text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              Request Custom Build
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">About This Live Build</h2>
            
            {/* Short Description */}
            {liveBuild.short_description && (
              <div className="mb-6 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-muted-foreground">{liveBuild.short_description}</p>
              </div>
            )}

            {/* Full Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {liveBuild.description}
              </p>
            </div>

            {/* Additional Content */}
            {liveBuild.content && (
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {liveBuild.content}
                  </p>
                </div>
              </div>
            )}

            {/* What to Expect */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold">Live Building</h4>
                      <p className="text-muted-foreground text-sm">Watch us build from scratch in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold">Interactive Q&A</h4>
                      <p className="text-muted-foreground text-sm">Ask questions and get answers live</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold">Technical Insights</h4>
                      <p className="text-muted-foreground text-sm">Learn our thinking process and methodology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</span>
                    <div>
                      <h4 className="font-semibold">Working Solution</h4>
                      <p className="text-muted-foreground text-sm">See a complete, functional tool by the end</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiveBuildDetail;