import createInput from '../modules/createInput.mjs';
import scrape from '../modules/scrape.mjs';
import extractMainContent from '../modules/extractMainContent.mjs';

const config = {
    sitemap: await createInput({
        sourceType: 'remoteXMLsitemap',
        sourcePath: 'https://essif-lab.github.io/framework/sitemap.xml',
    }),
    siteName: 'eSSIF-Lab',
    source: 'eSSIF-Lab',
    destinationFile: 'scrapers/output/eSSIF-Lab.json',
    domQueryForContent: 'article .markdown p, article .markdown h1, article .markdown h2, article .markdown h3, article .markdown h4, article .markdown h5, article .markdown h6, article .markdown li'
}

async function customScrape(page, domQueryForContent, pageUrl) {
    const mainContent = await extractMainContent(page, domQueryForContent);

    let pageTitle;

    pageTitle = await page.$eval('article header h1', (element) => {
        element.textContent.trim()
    });

    // const hierarchyLevels = await page.$$eval('.breadcrumbs__link', (nodes) =>
    //   nodes.map((node) => node.textContent.trim())
    // );


    let all = {};
    all.mainContent = mainContent;
    all.pageTitle = pageTitle;
    return all;
}
export default async function () {
    scrape(config, customScrape);
};