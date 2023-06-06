import createInput from '../modules/createInput.mjs';
import importedScrape from '../modules/scrape.mjs';


const config = {
    sitemap: await createInput({
        sourceType: 'localXMLsitemap',
        sourcePath: 'sitemaps/sitemap-kentbull.com.xml',
    }),
    siteName: 'Blogposts',
    destinationFile: 'output/kentbull.com.json',
    domQueryForContent: 'article p'
}


console.log("config.sitemap");
console.log(config.sitemap);

async function process(page, domQueryForContent) {
    const elements = await page.evaluate(
        (domQueryForContent) => {
            // Helper function to find the first heading element preceding the given element
            function findPreviousHeadingElement(element) {
                let previousElement = element.previousElementSibling;
                while (previousElement) {
                    if (isHeadingElement(previousElement)) {
                        return previousElement;
                    }
                    previousElement = previousElement.previousElementSibling;
                }
                return null;
            }

            // Helper function to check if an element is a heading element (h1, h2, h3, etc.)
            function isHeadingElement(element) {
                const tagName = element.tagName.toLowerCase();
                return (
                    tagName.startsWith("h") && tagName.length === 2 && !isNaN(tagName.charAt(1))
                );
            }

            const elements = Array.from(document.querySelectorAll(domQueryForContent));
            return elements.map((el) => {
                const headingElement = findPreviousHeadingElement(el);
                return {
                    text: el.textContent.trim(),
                    tag: el.tagName.toLowerCase(),
                    firstHeadingBeforeElement: headingElement
                        ? headingElement.textContent.trim()
                        : null,
                };
            });
        },
        domQueryForContent
    );

    let pageTitle = await page.$eval('.posttitle', (element) => {
        return element.textContent.trim()
    });

    let all = {};
    all.elements = elements;
    all.pageTitle = pageTitle;
    return all;
}
export default async function scrapeData() {
    importedScrape(config, process);
};