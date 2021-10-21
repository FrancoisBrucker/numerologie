
const { By, Key } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

process.env.NODE_ENV = 'test-user-stories'
const db = require('../db')

beforeAll(async () => {
  await db.sequelize.sync()
})

beforeEach(() => {
  require('chromedriver');
  browser = new webdriver.Builder().forBrowser('chrome').build()
})


test('mon prénom', async () => {
  await browser.get("http://127.0.0.1:3000/")

  
  await browser.findElement(By.id("form-input")).sendKeys("François", Key.ENTER)
  
  text = await browser.wait(browser.findElement(By.id("message")).getText(), 5000)

  expect(text).toContain("Des projets, vous en avez toujours en pagaille")

  await browser.get("http://127.0.0.1:3000/static/prenoms.html")
  expect(await browser.findElement(By.css("li")).getText()).toContain("François")
}, 10000)

afterEach(async () => {
  await browser.quit()
})