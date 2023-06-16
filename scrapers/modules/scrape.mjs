/*
  File: scrape.mjs
  Author: Kor Dwarshuis
  Created: 2023-03-16
  Updated: -
  Description: Scrape websites using puppeteer.
*/


import puppeteer from 'puppeteer';
import createOutput from './createOutput.mjs';
import writeToFile from './writeToFile.mjs';
import fs from 'fs';

export default async function scrape(config, customScrape) {
    const browser = await puppeteer.launch();// for production
    // const browser = await puppeteer.launch({ headless: false });// for testing
    const page = await browser.newPage();
    // Set a custom user agent header
    await page.setUserAgent('KERISSE-Web-of-Trust-Scraper');
    // Iterate over each URL in the sitemap and create an array of entries for each URL
    const entries = [];

    // Iterate over each URL in the sitemap and create an array of entries for each URL
    // console.log('Indexing pages...');
    for (const url of config.sitemap.urlset.url) {// for production
        // for (const url of config.sitemap.urlset.url.slice(150, 163)) {// for testing
        const pageUrl = url.loc[0];
        // console.log(`Indexing ${pageUrl}`);

        try {
            // Navigate to the page URL and process the page content using the specified function
            await page.goto(pageUrl);
            const scraped = await customScrape(page, config.domQueryForContent, pageUrl);

            let output = createOutput({
                siteName: config.siteName,
                source: config.source,
                author: config.author,
                pageUrl: pageUrl,
                mainContent: scraped.mainContent,
                hierarchyLvl0: scraped.hierarchyLevel0,
                hierarchyLvl1: scraped.hierarchyLevel1,
                hierarchyLvl2: scraped.hierarchyLevel2,
                hierarchyLvl3: scraped.hierarchyLevel3,
                knowledgeLevel: scraped.knowledgeLevel,
                type: scraped.type,
                creationDate: scraped.creationDate,
                pageTitle: scraped.pageTitle,
                firstHeadingBeforeElements: scraped.firstHeadingBeforeElements
            });

            output.forEach((entry) => {
                entries.push(entry);
            });
            // console.log('output: ', output);

            // Log the page URL to a log file and to a markdown file
            fs.appendFileSync('scrapers/logs/scraped.log', `Scraped: ${pageUrl}\n`);
            fs.appendFileSync('docs/overview/Indexed in KERISSE.md', `${pageUrl}\n\n`);

        } catch (err) {
            console.error(`Error processing page ${pageUrl}: ${err}`);
            fs.appendFileSync('scrapers/logs/error.log', `Error processing page ${pageUrl}: ${err}\n`);
        }
    }
    writeToFile(entries, config.destinationFile);

    // await new Promise(resolve => setTimeout(resolve, 1000000000)); // For testing: Delay the script termination

    await browser.close();
}