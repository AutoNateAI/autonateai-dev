import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import EmailPopup from '@/components/EmailPopup';
import { useEmailPopup } from '@/hooks/useEmailPopup';
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
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { showPopup, closePopup } = useEmailPopup();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform the data to match our interface
      const transformedPosts: BlogPost[] = (data || []).map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        author: post.author,
        read_time: post.read_time,
        slug: post.slug,
        featured: post.featured,
        published: post.published,
        created_at: post.created_at,
        hero_image: post.hero_image,
        hero_image_alt: post.hero_image_alt
      }));
      
      setBlogPosts(transformedPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", "Case Studies", "Tutorials", "Research", "Expert Perspectives"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading blog posts...</p>
          </div>
        </div>
        <Footer />
        <EmailPopup isOpen={showPopup} onClose={closePopup} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Research <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Insights, strategies, and research for AI-augmented academic workflows. 
              Our blog showcases both our team's research using our workflow tools and 
              practical insights for researchers looking to optimize their processes.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 mb-12">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted/20 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Ad Space Above */}
            <div className="mb-8">
              <div className="text-xs text-muted-foreground mb-2 text-center">Advertisement</div>
              <AdSpace 
                position="featured" 
                category={featuredPost.category}
              />
            </div>

            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Post Hero Image */}
                <div className="relative overflow-hidden">
                  {featuredPost.hero_image ? (
                    <img 
                      src={featuredPost.hero_image} 
                      alt={featuredPost.hero_image_alt || featuredPost.title}
                      className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                      <div className="text-center">
                        <Tag className="w-12 h-12 text-primary/60 mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">Featured Article</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                    <Tag className="w-3 h-3" />
                    {featuredPost.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.created_at)}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "All" ? "Recent Posts" : selectedCategory}
            </h2>
            {/* Banner Ad Space */}
            <div className="hidden lg:block">
              <AdSpace position="banner" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="block group hover:scale-[1.02] transition-all duration-300"
                  >
                    <article className="glass-card h-full">
                      {post.hero_image && (
                        <div className="h-48 overflow-hidden rounded-t-xl">
                          <img 
                            src={post.hero_image} 
                            alt={post.hero_image_alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </div>
                        
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.created_at)}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div>{post.read_time}</div>
                        </div>

                        <div className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium text-sm">
                          Read Article
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Ad Space - Sidebar */}
              <AdSpace position="sidebar" />

              {/* Newsletter Signup */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4">Subscribe for Updates</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get research insights delivered to your inbox. No spam, just valuable content.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                  />
                  <button type="submit" className="w-full btn-primary py-2 text-sm">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="block text-muted-foreground hover:text-primary transition-colors text-sm w-full text-left"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Second Ad Space */}
              <AdSpace position="sidebar" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EmailPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
};

export default Blog;