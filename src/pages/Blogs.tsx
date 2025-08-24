import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Clock, User, Tag, ArrowRight, Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  read_time: string;
  slug: string;
  hero_image: string | null;
  hero_image_alt: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, searchTerm, selectedCategory]);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setBlogs(data || []);

      // Extract unique categories
      const uniqueCategories = [...new Set(data?.map(blog => blog.category) || [])];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    let filtered = [...blogs];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    setFilteredBlogs(filtered);
  };

  const featuredBlogs = blogs.filter(blog => blog.featured).slice(0, 2);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

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
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Insights, case studies, and deep dives into how AI + critical thinking transforms 
              businesses across industries. Real solutions, real results.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-card p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-background/50 text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-background/50 text-muted-foreground hover:bg-primary/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredBlogs.length > 0 && searchTerm === '' && selectedCategory === 'all' && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredBlogs.map((blog) => (
                <FeaturedBlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm !== '' || selectedCategory !== 'all' ? (
            <h2 className="text-3xl font-bold mb-8">
              {searchTerm ? `Search Results for "${searchTerm}"` : `${selectedCategory} Articles`}
            </h2>
          ) : (
            <h2 className="text-3xl font-bold mb-8">All Articles</h2>
          )}
          
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeaturedBlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`} className="group">
      <div className="glass-card p-0 overflow-hidden group-hover:scale-105 transition-all duration-500">
        {blog.hero_image && (
          <div className="aspect-video">
            <img 
              src={blog.hero_image} 
              alt={blog.hero_image_alt || blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
              {blog.category}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blog.read_time}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              {blog.author}
            </div>
            <div className="text-primary group-hover:text-primary/80 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`} className="group">
      <div className="glass-card p-6 group-hover:scale-105 transition-all duration-500">
        {blog.hero_image && (
          <div className="aspect-video mb-4 rounded-xl overflow-hidden">
            <img 
              src={blog.hero_image} 
              alt={blog.hero_image_alt || blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
            {blog.category}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.read_time}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            {blog.author}
          </div>
          <div className="text-primary group-hover:text-primary/80 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blogs;