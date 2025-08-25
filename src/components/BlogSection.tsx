import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
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
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, excerpt, category, author, read_time, slug, created_at')
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
            Real insights from our team building AI-powered research tools. Learn how to accelerate your academic work with proven strategies and cutting-edge techniques.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.created_at)}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog CTA */}
        <div className="text-center">
          <Link to="/blog" className="btn-primary text-lg px-8 py-4 flex items-center justify-center max-w-sm mx-auto">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;