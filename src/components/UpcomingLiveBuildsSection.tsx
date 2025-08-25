import { Calendar, Users, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface LiveBuild {
  id: string;
  title: string;
  short_description: string;
  scheduled_date: string;
  duration_minutes: number;
  image_url: string;
  current_attendees: number;
  max_attendees?: number;
  tags: string[] | any;
}

const UpcomingLiveBuildsSection = () => {
  const [upcomingBuilds, setUpcomingBuilds] = useState<LiveBuild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingBuilds = async () => {
      try {
        const { data, error } = await supabase
          .from('live_builds')
          .select('id, title, short_description, scheduled_date, duration_minutes, image_url, current_attendees, max_attendees, tags')
          .eq('status', 'upcoming')
          .gte('scheduled_date', new Date().toISOString())
          .order('scheduled_date', { ascending: true })
          .limit(3);

        if (error) {
          console.error('Error fetching upcoming builds:', error);
          return;
        }

        // Process the data to ensure tags is an array
        const processedData = (data || []).map(build => ({
          ...build,
          tags: Array.isArray(build.tags) ? build.tags : []
        }));
        setUpcomingBuilds(processedData);
      } catch (error) {
        console.error('Error fetching upcoming builds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingBuilds();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (upcomingBuilds.length === 0) {
    return null;
  }

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            This Week's{' '}
            <span className="text-gradient">Live Builds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us this week as we build AI-powered business solutions live. Reserve your spot now.
          </p>
        </div>

        {/* Live Builds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {upcomingBuilds.map((build) => (
            <Link
              key={build.id}
              to={`/live-builds/${build.id}`}
              className="block group"
            >
              <div className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 h-full">
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={build.image_url} 
                    alt={build.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Schedule Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                    <Calendar className="w-3 h-3" />
                    {formatDate(build.scheduled_date)}
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {build.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {build.short_description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatTime(build.scheduled_date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {build.current_attendees} registered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link 
            to="/live-builds" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
          >
            View All Live Builds
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingLiveBuildsSection;