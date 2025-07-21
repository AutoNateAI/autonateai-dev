import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  read_time: string;
  slug: string;
  featured: boolean;
  published: boolean;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      // Fetch the main blog post
      const { data: postData, error: postError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (postError) throw postError;
      setPost(postData);

      // Fetch related posts (same category, exclude current post)
      const { data: relatedData, error: relatedError } = await supabase
        .from('blogs')
        .select('*')
        .eq('category', postData.category)
        .eq('published', true)
        .neq('id', postData.id)
        .limit(3);

      if (relatedError) throw relatedError;
      setRelatedPosts(relatedData || []);
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMarkdownContent = (content: string) => {
    // Simple markdown rendering for headers and paragraphs
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-bold mb-6 text-foreground">{line.substring(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-semibold mt-8 mb-4 text-foreground">{line.substring(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3 text-foreground">{line.substring(4)}</h3>;
        } else if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 mb-2 text-muted-foreground list-disc">{line.substring(2)}</li>;
        } else if (line.match(/^\d+\. /)) {
          return <li key={index} className="ml-6 mb-2 text-muted-foreground list-decimal">{line.substring(line.indexOf('. ') + 2)}</li>;
        } else if (line.startsWith('*') && line.endsWith('*')) {
          return <p key={index} className="italic text-muted-foreground mb-4">{line.slice(1, -1)}</p>;
        } else if (line.trim() === '') {
          return <br key={index} />;
        } else {
          // Handle bold text
          const boldRegex = /\*\*(.*?)\*\*/g;
          const processedLine = line.replace(boldRegex, '<strong>$1</strong>');
          return <p key={index} className="mb-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />;
        }
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div className="text-lg leading-relaxed">
              {renderMarkdownContent(post.content)}
            </div>
          </article>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="block group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="glass-card p-6 h-full hover:shadow-lg transition-all duration-300">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.read_time}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;