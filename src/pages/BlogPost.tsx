import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    const lines = content.split('\n');
    const renderedContent: JSX.Element[] = [];
    let currentHeadingLevel = 0;
    let headingCount = { h1: 0, h2: 0, h3: 0, h4: 0 };

    lines.forEach((line, index) => {
      let element: JSX.Element | null = null;
      
      if (line.startsWith('# ')) {
        headingCount.h1++;
        currentHeadingLevel = 1;
        element = <h1 key={index} className="text-4xl font-bold mb-6 text-foreground">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        headingCount.h2++;
        currentHeadingLevel = 2;
        element = <h2 key={index} className="text-3xl font-semibold mt-8 mb-4 text-foreground">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        headingCount.h3++;
        currentHeadingLevel = 3;
        element = <h3 key={index} className="text-2xl font-semibold mt-6 mb-3 text-foreground">{line.substring(4)}</h3>;
      } else if (line.startsWith('#### ')) {
        headingCount.h4++;
        currentHeadingLevel = 4;
        element = <h4 key={index} className="text-xl font-semibold mt-4 mb-2 text-foreground">{line.substring(5)}</h4>;
      } else if (line.startsWith('- ')) {
        element = <li key={index} className="ml-6 mb-2 text-muted-foreground list-disc">{line.substring(2)}</li>;
      } else if (line.match(/^\d+\. /)) {
        element = <li key={index} className="ml-6 mb-2 text-muted-foreground list-decimal">{line.substring(line.indexOf('. ') + 2)}</li>;
      } else if (line.startsWith('*') && line.endsWith('*')) {
        element = <p key={index} className="italic text-muted-foreground mb-4">{line.slice(1, -1)}</p>;
      } else if (line.trim() === '') {
        element = <br key={index} />;
      } else {
        const boldRegex = /\*\*(.*?)\*\*/g;
        const processedLine = line.replace(boldRegex, '<strong>$1</strong>');
        element = <p key={index} className="mb-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />;
      }

      if (element) {
        renderedContent.push(element);
        
        // Insert content images after specific headings
        const positionKey = `after_heading_${currentHeadingLevel}`;
        const imageForPosition = contentImages.find(img => 
          img.position === positionKey && 
          headingCount[`h${currentHeadingLevel}` as keyof typeof headingCount] === 1
        );
        
        if (imageForPosition && (line.startsWith('#') || line.startsWith('##') || line.startsWith('###') || line.startsWith('####'))) {
          renderedContent.push(
            <div key={`image-${index}`} className="my-8">
              <img 
                src={imageForPosition.url} 
                alt={imageForPosition.alt}
                className="w-full rounded-lg shadow-lg"
              />
              {imageForPosition.caption && (
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {imageForPosition.caption}
                </p>
              )}
            </div>
          );
        }
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
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img 
                src={post.hero_image} 
                alt={post.hero_image_alt || post.title}
                className="w-full h-64 md:h-80 object-cover"
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
            
            {/* Sidebar with Ads */}
            <div className="lg:col-span-1 space-y-8">
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

      {/* Banner Ad */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <AdSpace 
            position="banner" 
            category={post.category}
            blogSlug={post.slug}
          />
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