import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  read_time: string;
  slug: string;
  created_at: string;
  hero_image: string | null;
  hero_image_alt: string | null;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, excerpt, category, author, read_time, slug, created_at, hero_image, hero_image_alt')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching blogs:', error);
          return;
        }

        setBlogPosts(data || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Latest from Our{' '}
            <span className="text-gradient">Research Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic insights from building AI solutions for business leaders. Discover proven frameworks and cutting-edge techniques to transform your operations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="block lg:hidden mb-16">
        {/* Mobile Scrollable Row */}
        <div className="flex gap-6 overflow-x-auto pb-4 px-4 -mx-4 snap-x snap-mandatory">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="flex-shrink-0 w-80 snap-start group"
            >
              <article className="glass-card p-6 group-hover:scale-105 transition-all duration-500 h-full">
                {/* Blog Thumbnail */}
                {post.hero_image && (
                  <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={post.hero_image} 
                      alt={post.hero_image_alt || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Meta Information Top */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.read_time}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="text-primary group-hover:text-primary/80 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <article className="glass-card p-6 group-hover:scale-105 transition-all duration-500">
                {/* Blog Thumbnail */}
                {post.hero_image && (
                  <div className="aspect-video mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={post.hero_image} 
                      alt={post.hero_image_alt || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Meta Information Top */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.read_time}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="text-primary group-hover:text-primary/80 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Blog CTA */}
        <div className="text-center">
          <Link to="/blogs" className="btn-primary text-lg px-8 py-4 flex items-center justify-center max-w-sm mx-auto">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;