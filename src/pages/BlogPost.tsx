import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import AdSpace from '@/components/AdSpace';

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
  hero_image?: string;
  hero_image_alt?: string;
  content_images?: ContentImage[];
}

interface ContentImage {
  url: string;
  alt: string;
  caption?: string;
  position: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Include iPad and smaller
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      
      // Transform the data to match our interface
      const transformedPost: BlogPost = {
        ...postData,
        content_images: Array.isArray(postData.content_images) 
          ? (postData.content_images as unknown as ContentImage[])
          : []
      };
      
      setPost(transformedPost);

      // Fetch related posts (same category, exclude current post)
      const { data: relatedData, error: relatedError } = await supabase
        .from('blogs')
        .select('*')
        .eq('category', postData.category)
        .eq('published', true)
        .neq('id', postData.id)
        .limit(3);

      if (relatedError) throw relatedError;
      
      // Transform related posts data
      const transformedRelated: BlogPost[] = (relatedData || []).map(post => ({
        ...post,
        content_images: Array.isArray(post.content_images) 
          ? (post.content_images as unknown as ContentImage[])
          : []
      }));
      
      setRelatedPosts(transformedRelated);
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

  const renderMarkdownContent = (content: string, contentImages: ContentImage[] = []) => {
    // Split content into sections based on headings
    const sections = content.split(/(?=^#{1,4}\s)/m).filter(section => section.trim());
    const renderedContent: JSX.Element[] = [];
    let majorSectionCount = 0; // Only count # and ## headings
    
    sections.forEach((section, index) => {
      // Check if this section starts with a major heading (# or ##)
      const isMajorHeading = section.match(/^#{1,2}\s/);
      
      if (isMajorHeading) {
        majorSectionCount++;
      }
      
      // Add the markdown section
      renderedContent.push(
        <div key={`section-${index}`} className="mb-6 prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>,
              h4: ({ children }) => <h4 className="text-xl font-semibold mb-2 mt-4 text-foreground">{children}</h4>,
              p: ({ children }) => <p className="mb-4 text-foreground leading-relaxed">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              em: ({ children }) => <em className="italic text-foreground">{children}</em>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-foreground">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-foreground">{children}</ol>,
              li: ({ children }) => <li className="mb-1 text-foreground">{children}</li>,
              blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic mb-4 text-muted-foreground">{children}</blockquote>,
              code: ({ children }) => <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
              pre: ({ children }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
            }}
          >
            {section}
          </ReactMarkdown>
        </div>
      );
      
      // Insert mobile ads every 2 major sections (only after major headings)
      // Show after major sections 2, 4, 6, etc.
      if (isMobile && isMajorHeading && majorSectionCount > 1 && majorSectionCount % 2 === 0) {
        renderedContent.push(
          <div key={`mobile-ad-${majorSectionCount}`} className="my-8 lg:hidden w-full relative z-10">
            <AdSpace 
              position="inline" 
              category={post?.category}
              blogSlug={post?.slug}
              className="w-full relative z-10"
            />
          </div>
        );
      }
    });

    return renderedContent;
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
          
          {/* Hero Image */}
          {post.hero_image && (
            <div className="mb-8">
              <img 
                src={post.hero_image} 
                alt={post.hero_image_alt || post.title}
                className="w-full h-auto max-h-96 object-contain rounded-2xl"
              />
            </div>
          )}
          
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                 <div className="text-lg leading-relaxed">
                   {renderMarkdownContent(post.content, post.content_images)}
                   
                   {/* Inline Ad Space within content */}
                   <div className="my-12">
                     <AdSpace 
                       position="inline" 
                       category={post.category}
                       blogSlug={post.slug}
                     />
                   </div>
                 </div>
              </article>
            </div>
            
            {/* Sidebar with Ads - Desktop Only */}
            <div className="lg:col-span-1 space-y-8 hidden lg:block">
              {/* Ad Space - Sidebar */}
              <div className="sticky top-8 space-y-6">
                <AdSpace 
                  position="sidebar" 
                  category={post.category}
                  blogSlug={post.slug}
                />

                {/* Newsletter Signup */}
                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest research insights delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 rounded-lg bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                    />
                    <button type="submit" className="w-full btn-primary py-2 text-sm">
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Second Ad Space */}
                <AdSpace 
                  position="sidebar" 
                  category={post.category}
                  blogSlug={post.slug}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="block group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="glass-card p-6 h-full hover:shadow-lg transition-all duration-300">
                    {relatedPost.hero_image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={relatedPost.hero_image} 
                          alt={relatedPost.hero_image_alt || relatedPost.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
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

      {/* Bottom Ad Space */}
      <div className="container mx-auto px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AdSpace 
            key={`bottom-${post.slug}`}
            position="bottom" 
            category={post.category}
            blogSlug={post.slug}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;