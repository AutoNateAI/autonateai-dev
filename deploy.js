// Simple GitHub Pages deploy script
// This script will handle creating the required files for proper GitHub Pages deployment

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the dist folder if it doesn't exist yet
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

// Create .nojekyll file (prevents GitHub from ignoring files that start with underscore)
fs.writeFileSync(path.join(distPath, '.nojekyll'), '');

// Copy CNAME file to dist directory for custom domain
const sourceCNAME = path.join(__dirname, 'public', 'CNAME');
if (fs.existsSync(sourceCNAME)) {
  fs.copyFileSync(sourceCNAME, path.join(distPath, 'CNAME'));
  console.log('Copied CNAME file to dist directory');
}

// Create a simple redirect index.html in case it's missing
const redirectHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url=./index.html" />
    <title>AutoNate AI</title>
  </head>
  <body>
    <p>Redirecting to main page...</p>
    <script>
      window.location.href = './index.html';
    </script>
  </body>
</html>`;

// Make sure original index.html exists
if (!fs.existsSync(path.join(distPath, 'index.html'))) {
  console.error('Warning: index.html not found in dist folder. Build may have failed.');
}

// Copy 404.html that will redirect back to index for SPA routing
fs.writeFileSync(path.join(distPath, '404.html'), `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AutoNate AI</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License - https://github.com/rafgraph/spa-github-pages
      // For custom domain, set pathSegmentsToKeep to 0
      var pathSegmentsToKeep = 0;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>`);

console.log('GitHub Pages deployment files created successfully!');
