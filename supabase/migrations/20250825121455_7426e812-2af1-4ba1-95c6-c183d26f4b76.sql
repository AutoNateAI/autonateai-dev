-- Insert three new upcoming live builds for this week
INSERT INTO live_builds (
  title,
  description,
  short_description,
  scheduled_date,
  duration_minutes,
  status,
  calendly_url,
  tags,
  content,
  image_url
) VALUES 
(
  'AI-Powered Customer Intelligence Platform',
  'Watch us build a comprehensive customer intelligence platform that transforms scattered customer data into actionable business insights. We''ll integrate CRM data, social media signals, and behavioral analytics to create a 360-degree view of your customers with AI-powered predictions.',
  'Build an AI customer intelligence platform with 360-degree insights and predictive analytics for better business decisions.',
  '2025-08-26 19:00:00+00',
  75,
  'upcoming',
  'https://calendly.com/autonate-ai/live-build-customer-intelligence',
  '["Customer Intelligence", "CRM Integration", "Predictive Analytics", "Business Intelligence"]',
  'This session will cover advanced customer data integration, AI-powered sentiment analysis, predictive customer lifetime value modeling, and automated insight generation. Perfect for business leaders looking to leverage their customer data for competitive advantage.',
  '/live-builds/customer-intelligence.jpg'
),
(
  'Automated Business Process Optimizer',
  'Experience how we design and build an intelligent business process automation system that identifies bottlenecks, optimizes workflows, and provides real-time efficiency insights. Transform your operations from reactive to predictive.',
  'Create an intelligent process automation system that optimizes workflows and eliminates operational bottlenecks.',
  '2025-08-27 19:00:00+00',
  80,
  'upcoming',
  'https://calendly.com/autonate-ai/live-build-process-optimizer',
  '["Process Automation", "Workflow Optimization", "Business Intelligence", "Operational Efficiency"]',
  'We''ll demonstrate advanced workflow analysis, bottleneck identification algorithms, automated process optimization, and real-time performance dashboards. Essential for executives seeking operational excellence.',
  '/live-builds/process-optimizer.jpg'
),
(
  'AI-Driven Market Research Platform',
  'Join us as we construct a sophisticated market research platform that automatically gathers competitive intelligence, analyzes market trends, and generates strategic insights. Make data-driven decisions with confidence.',
  'Build an AI market research platform with competitive intelligence and automated trend analysis.',
  '2025-08-28 19:00:00+00',
  70,
  'upcoming',
  'https://calendly.com/autonate-ai/live-build-market-research',
  '["Market Research", "Competitive Intelligence", "Trend Analysis", "Strategic Planning"]',
  'This live build covers automated data collection, competitive analysis frameworks, trend prediction models, and strategic insight generation. Ideal for directors and executives in strategic planning roles.',
  '/live-builds/market-research.jpg'
);