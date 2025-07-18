import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How We Used Our Data Pipeline to Discover Novel Correlations in Climate Data",
      excerpt: "A detailed walkthrough of how our workflow system enabled efficient analysis of complex climate datasets, leading to breakthrough discoveries.",
      category: "Case Studies",
      date: "July 18, 2025",
      author: "Dr. Maria Santos",
      readTime: "8 min read",
      slug: "climate-data-correlations"
    },
    {
      title: "5 Ways AI Can Enhance Your Literature Review Process",
      excerpt: "Practical strategies to leverage AI tools for more efficient and thorough literature reviews without compromising academic rigor.",
      category: "Tutorials", 
      date: "July 15, 2025",
      author: "Dr. James Wilson",
      readTime: "6 min read",
      slug: "ai-enhance-lit-review"
    },
    {
      title: "Grant Writing Trends: What Funders Are Looking For in 2025",
      excerpt: "Our analysis of recent grant awards reveals shifting priorities across major funding agencies and actionable insights for researchers.",
      category: "Research",
      date: "July 12, 2025", 
      author: "Dr. Sarah Chen",
      readTime: "10 min read",
      slug: "grant-trends-2025"
    }
  ];

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
            Insights, strategies, and research for AI-augmented academic workflows.
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
                    {post.date}
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
          <Link to="/blog" className="btn-primary text-lg px-8 py-4">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;