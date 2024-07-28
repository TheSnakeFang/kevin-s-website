const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const sitemapUrls = [
  { url: '/', changefreq: 'monthly', priority: 1 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/project/trueplan', changefreq: 'monthly', priority: 0.7 },
  { url: '/project/voluntutors', changefreq: 'monthly', priority: 0.7 },
  { url: '/project/project-helping-hands', changefreq: 'monthly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: 'https://kevinfang.tech' });

sitemapUrls.forEach(item => {
  stream.write(item);
});

stream.end();

streamToPromise(stream)
  .then(data => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
  });