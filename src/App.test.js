import puppeteer from "puppeteer";

const APP = "http://localhost:3000/";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe("Add word to vocabulary list", () => {
  test("word bundle added to vocabulary list", async () => {
    await page.goto(APP);
    await clickByText(page, "Expand Word List");
    const rowCount = (await page.$$(".MuiListItem-container")).length;
    await clickByText(page, "add");
    await page.click("input[id=englishWordField]");
    await page.type("input[id=englishWordField]", "Hello");
    await page.click("input[id=germanWordField]");
    await page.type("input[id=germanWordField]", "Hallo");
    await clickByText(page, "ADD");
    await clickByText(page, "BACK");
    const rowCountAfterAdd = (await page.$$(".MuiListItem-container")).length;
    expect(rowCountAfterAdd).toEqual(rowCount + 1);
  }, 16000);
});

const escapeXpathString = str => {
  const splitedQuotes = str.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};

const clickByText = async (page, text) => {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(
    `//span[contains(text(), ${escapedText})]`
  );

  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error(`Link not found: ${text}`);
  }
};
