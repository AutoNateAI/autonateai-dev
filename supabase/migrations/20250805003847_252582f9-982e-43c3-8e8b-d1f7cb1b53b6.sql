UPDATE products 
SET 
  price = '$497',
  description = 'Revolutionary literature review system combining NotebookLM workflows with advanced concept visualization. Transform chaotic research into organized insights with our step-by-step wizard, interactive concept graphs, and AI-powered prompt library.',
  features = '[
    "13-Step NotebookLM Workflow Creator & Wizard",
    "AI-Powered Prompts for Each Research Phase", 
    "Interactive Concept Graph Visualization",
    "Project-to-Source Hierarchical Mapping",
    "Multi-Select Concept-to-Insight Generation",
    "Path Highlighting for Insight Traceability",
    "Comprehensive Prompt Library & Management",
    "Source Metadata Organization System",
    "Knowledge Gap Identification Tools",
    "Hypothesis-Concept Relationship Tracking",
    "NotebookLM Integration Templates",
    "Research Insight Dashboard"
  ]'::jsonb,
  benefits = '[
    "Reduce literature review time by 75%",
    "Visualize complex concept relationships instantly", 
    "Track insights from source to conclusion",
    "Never lose track of important research connections",
    "Generate insights from multiple concepts seamlessly",
    "Organize hundreds of sources systematically",
    "Extract maximum value from NotebookLM",
    "Build robust theoretical frameworks faster",
    "Identify research gaps with precision",
    "Create publication-ready concept maps"
  ]'::jsonb,
  tagline = 'NotebookLM-Powered Literature Review Mastery'
WHERE slug = 'lit-review-ai'