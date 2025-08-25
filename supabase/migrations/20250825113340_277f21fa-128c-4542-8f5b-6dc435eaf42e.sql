-- Update live builds with stock images
UPDATE live_builds 
SET image_url = '/src/assets/real-estate-analysis.jpg'
WHERE title = 'Real Estate Market Analysis Platform';

UPDATE live_builds 
SET image_url = '/src/assets/finance-ai-dashboard.jpg'
WHERE title = 'AI Copilot for Finance Teams';

UPDATE live_builds 
SET image_url = '/src/assets/hospitality-optimizer.jpg'
WHERE title = 'Hospitality Operations Optimizer';