import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, Tag, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

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

const LiveBuilds = () => {
  const [liveBuilds, setLiveBuilds] = useState<LiveBuild[]>([]);
  const [filteredBuilds, setFilteredBuilds] = useState<LiveBuild[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLiveBuilds();
  }, []);

  useEffect(() => {
    filterBuilds();
  }, [liveBuilds, searchTerm, filterStatus, selectedTags]);

  const fetchLiveBuilds = async () => {
    try {
      const { data, error } = await supabase
        .from('live_builds')
        .select('*')
        .eq('is_published', true)
        .order('scheduled_date', { ascending: true });

      if (error) throw error;

      const builds = data.map(build => ({
        ...build,
        tags: Array.isArray(build.tags) ? build.tags.filter((tag): tag is string => typeof tag === 'string') : [],
        duration_minutes: build.duration_minutes || 60,
        current_attendees: build.current_attendees || 0
      }));

      setLiveBuilds(builds);

      // Extract all unique tags
      const tags = new Set<string>();
      builds.forEach(build => {
        build.tags.forEach(tag => tags.add(tag));
      });
      setAllTags(Array.from(tags));
    } catch (error) {
      console.error('Error fetching live builds:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterBuilds = () => {
    let filtered = [...liveBuilds];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(build =>
        build.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        build.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        build.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Status filter
    if (filterStatus !== 'all') {
      const now = new Date();
      filtered = filtered.filter(build => {
        const buildDate = new Date(build.scheduled_date);
        if (filterStatus === 'upcoming') {
          return buildDate > now;
        } else {
          return buildDate <= now;
        }
      });
    }

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(build =>
        selectedTags.some(tag => build.tags.includes(tag))
      );
    }

    setFilteredBuilds(filtered);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getStatusColor = (build: LiveBuild) => {
    const now = new Date();
    const buildDate = new Date(build.scheduled_date);
    
    if (buildDate > now) return 'text-blue-500';
    if (build.status === 'live') return 'text-green-500';
    if (build.status === 'completed') return 'text-gray-500';
    return 'text-red-500';
  };

  const getStatusText = (build: LiveBuild) => {
    const now = new Date();
    const buildDate = new Date(build.scheduled_date);
    
    if (buildDate > now) return 'Upcoming';
    if (build.status === 'live') return 'Live Now';
    if (build.status === 'completed') return 'Completed';
    return 'Cancelled';
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Live Build <span className="text-gradient">Calendar</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Watch us build AI-integrated software solutions live. From concept to working tool, 
              see how critical thinking + intelligent software transforms businesses in real-time.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-card p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search live builds..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex gap-2">
                {['all', 'upcoming', 'completed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status as any)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      filterStatus === status
                        ? 'bg-primary text-white'
                        : 'bg-background/50 text-muted-foreground hover:bg-primary/10'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            {allTags.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-3">Filter by topic:</p>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-primary text-white'
                          : 'bg-background/50 text-muted-foreground hover:bg-primary/10'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Builds Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBuilds.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No live builds found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBuilds.map((build) => (
                <LiveBuildCard key={build.id} build={build} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const LiveBuildCard = ({ build }: { build: LiveBuild }) => {
  const now = new Date();
  const buildDate = new Date(build.scheduled_date);
  const isUpcoming = buildDate > now;
  const isCompleted = buildDate <= now;


  return (
    <Link 
      to={`/live-builds/${build.id}`} 
      className="glass-card p-6 group hover:scale-105 transition-all duration-500 block flex flex-col h-full"
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          isUpcoming ? 'bg-blue-500/10 text-blue-500' : 
          isCompleted ? 'bg-gray-500/10 text-gray-500' : 'bg-green-500/10 text-green-500'
        }`}>
          {isUpcoming ? 'Upcoming' : isCompleted ? 'Completed' : 'Live Now'}
        </span>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-4 h-4" />
          {build.duration_minutes}min
        </div>
      </div>

      {/* Image */}
      <div className="aspect-video mb-4 rounded-xl overflow-hidden">
            <img 
              src={build.image_url || '/placeholder.svg'} 
              alt={build.title}
              className="w-full h-full object-cover"
            />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {build.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {build.short_description || build.description}
      </p>

      {/* Date */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" />
        {format(new Date(build.scheduled_date), 'MMM dd, yyyy • h:mm a')}
      </div>

      {/* Tags */}
      {build.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-6">
          {build.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {build.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{build.tags.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 btn-glass text-sm py-2 px-4 text-center inline-flex items-center justify-center">
          View Details <ArrowRight className="ml-2 w-4 h-4" />
        </div>
        
        {isUpcoming && build.calendly_url && (
          <a
            href={build.calendly_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            Reserve Spot
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        
        {isCompleted && build.replay_url && (
          <a
            href={build.replay_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            Watch Replay
            <Play className="w-4 h-4" />
          </a>
        )}
      </div>
    </Link>
  );
};

export default LiveBuilds;