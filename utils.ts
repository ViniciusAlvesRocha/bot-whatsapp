import fs from 'fs';

const getPhoneNumbers = (): string[] => {
    let data: string = fs.readFileSync('./people.csv', "utf-8");
    return data.split('\n').map(line => line.match(/[\d\+]{8,}/)).filter((match) => match != null).map(number => number !== null ? number[0] : '+00 00 00000-0000');
  };

const cleanSearchInput = async (page: any) => {
    await page.evaluate(() => {
        eval(`document.querySelector('[data-testid="chat-list-search"]').innerText = '';`)
    });
};


export {
    getPhoneNumbers,
    cleanSearchInput,
}