UPDATE products 
SET testimonials = '[
  {
    "content": "Cut my literature review time from weeks to days. The AI caught patterns I would have missed.",
    "name": "Academic Researcher",
    "role": "University Professor"
  },
  {
    "content": "This tool saved my dissertation. The comprehensive analysis was exactly what I needed.",
    "name": "Graduate Student", 
    "role": "PhD Candidate"
  }
]'::jsonb
WHERE slug = 'lit-review-ai'