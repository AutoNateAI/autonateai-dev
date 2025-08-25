-- Update live build entries with proper image URLs
UPDATE live_builds 
SET image_url = '/live-builds/real-estate-analysis.jpg'
WHERE title = 'Real Estate Market Analysis Platform';

UPDATE live_builds 
SET image_url = '/live-builds/finance-ai-dashboard.jpg'
WHERE title = 'AI Copilot for Finance Teams';

UPDATE live_builds 
SET image_url = '/live-builds/hospitality-optimizer.jpg'
WHERE title = 'Hospitality Operations Optimizer';