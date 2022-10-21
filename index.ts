import puppeteer from 'puppeteer';
import {getPhoneNumbers, cleanSearchInput} from './utils';

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome',
        slowMo: 50,
    });
  const page = await browser.newPage();

  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
  
  await page.goto('https://web.whatsapp.com/');

  await page.waitForNavigation();

  const numbers = getPhoneNumbers();

    for(let i = 0; i < numbers.length; i += 1) {
        await cleanSearchInput(page);
        await page.type('[data-testid="chat-list-search"]', numbers[i]);

        try {
            // SELECT ELEMENT AND CLICK
            await page.click('[data-testid="cell-frame-container"]')

            // EXECUTE KEY FROM KEYBOARD
            await page.keyboard.press("Enter");

            // TYPE CONTENT "Boa noite." IN ELEMENT OF DOM(INPUT)
            await page.type('[class="selectable-text copyable-text"]', 'Boa noite.');

            await page.click('[data-icon="send"]');
        } catch(e) {
            console.log("Number ", numbers[i], " not found");
        }
    };

    // CLOSE THE BROWSER
    await browser.close();
})();

