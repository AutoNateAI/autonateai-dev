import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Social media crawler user agents
const crawlerUserAgents = [
  'facebookexternalhit',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'TelegramBot',
  'SkypeUriPreview',
  'SlackBot',
  'DiscordBot',
  'GoogleBot',
  'bingbot',
  'applebot'
];

function isCrawler(userAgent: string): boolean {
  if (!userAgent) return false;
  return crawlerUserAgents.some(crawler => 
    userAgent.toLowerCase().includes(crawler.toLowerCase())
  );
}

function generateHtml(title: string, description: string, imageUrl: string, url: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="${url}" />
    
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    
    <!-- Redirect to React app for human users -->
    <script>
      setTimeout(() => {
        window.location.href = '${url}';
      }, 100);
    </script>
  </head>
  <body>
    <h1>${title}</h1>
    <p>${description}</p>
    <p>Redirecting to AutoNateAI...</p>
  </body>
</html>`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const userAgent = req.headers.get('user-agent') || '';
    const path = url.pathname;
    
    console.log(`Request for path: ${path}, User-Agent: ${userAgent}`);

    // Only handle crawler requests
    if (!isCrawler(userAgent)) {
      return new Response('Not a crawler', {
        status: 200,
        headers: corsHeaders
      });
    }

    let linkPreview: any = null;
    let baseUrl = 'https://autonateai.github.io/autonateai-dev';

    // Try to find specific link preview first
    const { data: existingPreview } = await supabase
      .from('link_previews')
      .select('*')
      .eq('page_path', path)
      .single();

    if (existingPreview) {
      linkPreview = existingPreview;
    } else {
      // Handle dynamic routes
      if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        const { data: blog } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (blog) {
          linkPreview = {
            title: `${blog.title} | AutoNateAI Blog`,
            description: blog.excerpt,
            image_url: blog.hero_image || `${baseUrl}/lovable-uploads/e5e6f6bc-5528-492d-876a-45dc0f831b5d.png`
          };
        }
      } else if (path.startsWith('/products/')) {
        const slug = path.replace('/products/', '');
        const { data: product } = await supabase
          .from('products')
          .select('*')
          .eq('slug', slug)
          .eq('is_active', true)
          .single();

        if (product) {
          // Get primary product image
          const { data: productImage } = await supabase
            .from('product_images')
            .select('image_url')
            .eq('product_id', product.id)
            .eq('is_primary', true)
            .single();

          linkPreview = {
            title: `${product.title} | AutoNateAI`,
            description: product.description,
            image_url: productImage?.image_url || `${baseUrl}/lovable-uploads/e5e6f6bc-5528-492d-876a-45dc0f831b5d.png`
          };
        }
      }
    }

    // Fallback to homepage preview
    if (!linkPreview) {
      const { data: homepagePreview } = await supabase
        .from('link_previews')
        .select('*')
        .eq('page_path', '/')
        .single();

      linkPreview = homepagePreview || {
        title: 'AutoNateAI - Transform Your Research Process with AI-Augmented Digital Guides',
        description: 'Empower your research with cutting-edge AI workflow management systems. AutoNateAI helps researchers achieve better results faster through intelligent grant writing, literature review, and data pipeline automation.',
        image_url: 'https://autonateai.github.io/autonateai-dev/lovable-uploads/e5e6f6bc-5528-492d-876a-45dc0f831b5d.png'
      };
    }

    // Ensure image URL is absolute
    let imageUrl = linkPreview.image_url;
    if (imageUrl && !imageUrl.startsWith('http')) {
      imageUrl = baseUrl + imageUrl;
    }

    const html = generateHtml(
      linkPreview.title,
      linkPreview.description,
      imageUrl,
      `${baseUrl}${path}`
    );

    return new Response(html, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html',
      },
    });

  } catch (error) {
    console.error('Error in link-preview-handler function:', error);
    
    // Return fallback HTML for crawlers even on error
    const fallbackHtml = generateHtml(
      'AutoNateAI - AI-Powered Research Workflows',
      'Transform your research process with AI-augmented digital guides.',
      'https://wnxqzeftghgdfcdmdlgw.supabase.co/storage/v1/object/public/generated-images/e5e6f6bc-5528-492d-876a-45dc0f831b5d.png',
      'https://your-domain.com'
    );

    return new Response(fallbackHtml, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html',
      },
    });
  }
});