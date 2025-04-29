// const { Builder, By, until } = require("selenium-webdriver");
// const assert = require("assert");
// const fs = require('fs');

// describe('Login Page Automation Tests', function (){
//     let driver;

//     this.timeout(30000);

//     before(async() => {
//         driver = await new Builder().forBrowser('chrome').build();
//     });

//     after(async() =>{
//         await driver.quit();
//     });

//     afterEach(async function () {
//         if(this.currentTest.state === 'failed'){
//             let screenshot = await driver.takeScreenshot();
//             fs.writeFileSync('error_screenshot.png', screenshot, 'base64');
//             console.log("Screenshot captured for failed test!");
//         }
//     });
// it('TC_LOGIN_01 - Login with valid details', async() =>{
//     await driver.get('http://localhost:3000/login')
  
//     // Step 1: Click "Get Started" button
//     await driver.findElement(By.className('login-button')).click();

//     const randomUserID = 'testUser123'; // Replace with a valid test user ID
//     const randomPassword = 'password123'; // Replace with the corresponding password
  
//     // Step 2: Fill form
//     await driver.findElement(By.name('userID')).sendKeys(randomUserID);
//     await driver.findElement(By.name('password')).sendKeys(randomPassword);
  
//     // Step 3: Submit the form
//     await driver.findElement(By.className('login-button')).click();
  
//     // Step 5: Handle success alert
//     try {
//       await driver.wait(until.alertIsPresent(), 10000); // 🔥 Increased from 5000 to 10000
//       let alert = await driver.switchTo().alert();
//       let alertText = await alert.getText();
//       assert.ok(alertText.includes('Login successful'), "Alert text does not match expected success message");
//       await alert.accept(); // Accept alert
//     } catch (err) {
//     assert.fail("Success alert not found after login");
//     }
  
//     await driver.wait(until.urlContains('/adopterPanel'), 10000); // example
//     let currentUrl = await driver.getCurrentUrl();
//     assert.ok(currentUrl.includes('adopterPanel') || currentUrl.includes('distributorPanel') || currentUrl.includes('daycarePanel') || currentUrl.includes('vetPanel') || currentUrl.includes('admin') , "Redirection to panel failed");

//     console.log("TC_LOGIN_01 Passed Successfully ✅");
  
// })
// })


const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const fs = require('fs');
const mocha = require('mocha');

describe('Login Page Automation Tests', function () {
    this.timeout(20000); // Extend timeout for slower environments

    let driver;

    before(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage'))
            .build();
    });
    

    after(async () => {
        if (driver) await driver.quit();
    });

    it('TC_LOGIN_01 - Login with valid details', async () => {
        try {
            await driver.get('http://localhost:3000/login'); // Update if your login URL is different

            await driver.wait(until.elementLocated(By.name('userID')), 5000);
            await driver.findElement(By.name('userID')).sendKeys('54');

            await driver.wait(until.elementLocated(By.name('password')), 5000);
            await driver.findElement(By.name('password')).sendKeys('User16Test');

            await driver.findElement(By.css('.login-button')).click();

            // Handle the login success alert
            await driver.wait(until.alertIsPresent(), 5000);
            const alert = await driver.switchTo().alert();
            await alert.accept(); // Accept the 'Login successful!' alert

            // Wait for navigation or success element (adjust if needed)
            await driver.wait(until.urlContains('/distributor'), 10000); // adjust for expected role route

            const currentUrl = await driver.getCurrentUrl();
            assert.ok(currentUrl.includes('/distributor')); // adjust if role is different

        } catch (err) {
            // Capture screenshot on failure
            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync('login_test_failure.png', screenshot, 'base64');
            console.error('Screenshot captured for failed test!');
            throw err;
        }
    });

    it('TC_LOGIN_02 - Login with invalid userID', async () => {
        try {
            await driver.get('http://localhost:3000/login'); 

            await driver.wait(until.elementLocated(By.name('userID')), 5000);
            await driver.findElement(By.name('userID')).sendKeys('50');

            await driver.wait(until.elementLocated(By.name('password')), 5000);
            await driver.findElement(By.name('password')).sendKeys('User16Test');

            await driver.findElement(By.css('.login-button')).click();

            // Handle the login success alert
            await driver.wait(until.alertIsPresent(), 5000);
            const alert = await driver.switchTo().alert();
            await alert.accept(); // Accept the 'Login successful!' alert

            // Wait for navigation or success element (adjust if needed)
            await driver.wait(until.urlContains('/distributor'), 10000); // adjust for expected role route

            const currentUrl = await driver.getCurrentUrl();
            assert.ok(currentUrl.includes('/distributor')); // adjust if role is different

        } catch (err) {
            // Capture screenshot on failure
            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync('login_test_failure.png', screenshot, 'base64');
            console.error('Screenshot captured for failed test!');
            throw err;
        }
    });
});
