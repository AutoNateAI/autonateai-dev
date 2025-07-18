import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      title: "How We Used Our Data Pipeline to Discover Novel Correlations in Climate Data",
      excerpt: "A detailed walkthrough of how our workflow system enabled efficient analysis of complex climate datasets, leading to breakthrough discoveries in climate pattern analysis.",
      category: "Case Studies",
      date: "July 18, 2025",
      author: "Dr. Maria Santos",
      readTime: "8 min read",
      slug: "climate-data-correlations",
      featured: true
    },
    {
      title: "5 Ways AI Can Enhance Your Literature Review Process",
      excerpt: "Practical strategies to leverage AI tools for more efficient and thorough literature reviews without compromising academic rigor or missing key insights.",
      category: "Tutorials", 
      date: "July 15, 2025",
      author: "Dr. James Wilson",
      readTime: "6 min read",
      slug: "ai-enhance-lit-review",
      featured: false
    },
    {
      title: "Grant Writing Trends: What Funders Are Looking For in 2025",
      excerpt: "Our analysis of recent grant awards reveals shifting priorities across major funding agencies and provides actionable insights for researchers.",
      category: "Research",
      date: "July 12, 2025", 
      author: "Dr. Sarah Chen",
      readTime: "10 min read",
      slug: "grant-trends-2025",
      featured: false
    },
    {
      title: "Case Study: How We Secured a $250K Grant Using Our Own System",
      excerpt: "Follow our step-by-step journey using the AI Grant Drafting Assistant to secure significant funding for our latest research initiative.",
      category: "Case Studies",
      date: "July 10, 2025",
      author: "AutoNateAI Team",
      readTime: "12 min read",
      slug: "grant-success-story",
      featured: false
    },
    {
      title: "Prompt Engineering for Academic Research: A Beginner's Guide",
      excerpt: "Learn the fundamentals of crafting effective prompts for AI tools in research contexts, with examples and best practices.",
      category: "Tutorials",
      date: "July 8, 2025",
      author: "Dr. Marcus Johnson",
      readTime: "7 min read",
      slug: "prompt-engineering-basics",
      featured: false
    },
    {
      title: "The Future of Research Workflows: AI Integration Trends",
      excerpt: "Exploring emerging trends in AI-assisted research and what they mean for the future of academic productivity.",
      category: "Research",
      date: "July 5, 2025",
      author: "Dr. Emily Rodriguez",
      readTime: "9 min read",
      slug: "future-research-workflows",
      featured: false
    }
  ];

  const categories = ["All", "Case Studies", "Tutorials", "Research", "Expert Perspectives"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
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
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Ad Space - Featured Article */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center border-r border-border/20">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Advertisement</div>
                    <div className="text-lg font-semibold text-primary">Your Ad Here</div>
                    <div className="text-sm text-muted-foreground mt-2">728x300 Featured Spot</div>
                  </div>
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
                      {featuredPost.date}
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
            {/* Ad Space - Banner */}
            <div className="hidden lg:block glass-card p-4 border border-border/20">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Advertisement</div>
                <div className="text-sm font-medium text-primary">728x90 Banner</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post, index) => (
                  <article key={index} className="glass-card group hover:scale-105 transition-all duration-500">
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
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium text-sm"
                      >
                        Read Article
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Ad Space - Sidebar */}
              <div className="glass-card p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Advertisement</div>
                <div className="text-lg font-semibold text-primary mb-2">Your Ad Here</div>
                <div className="text-sm text-muted-foreground">300x250 Sidebar</div>
                <div className="mt-4 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg"></div>
              </div>

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
                    <Link
                      key={category}
                      to={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                      className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ad Space - Second Sidebar */}
              <div className="glass-card p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Advertisement</div>
                <div className="text-lg font-semibold text-primary mb-2">Your Ad Here</div>
                <div className="text-sm text-muted-foreground">300x600 Sidebar</div>
                <div className="mt-4 h-48 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;