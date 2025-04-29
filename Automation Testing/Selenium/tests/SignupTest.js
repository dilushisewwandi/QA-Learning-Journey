const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Signup Page Automation Tests', function () {
  let driver;

  // Longer timeout for slow machines
  this.timeout(30000);

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

    // 🆕 Add this afterEach block here 👇
    afterEach(async function () {
      if (this.currentTest.state === 'failed') {
        let screenshot = await driver.takeScreenshot();
        fs.writeFileSync('error_screenshot.png', screenshot, 'base64');
        console.log("🚨 Screenshot captured for failed test!");
      }
    });

  it('TC_SIGN_01 - Signup with valid details', async () => {
    await driver.get('http://localhost:3000/signup');
  
    const randomUsername = 'User' + Date.now(); // 👈 dynamic username
    const randomEmail = 'user' + Date.now() + '@example.com'; // 👈 dynamic email
  
    // Step 1: Click "Get Started" button
    await driver.findElement(By.className('signup-btn')).click();
  
    // Step 2: Fill form
    await driver.findElement(By.name('username')).sendKeys(randomUsername);
    await driver.findElement(By.name('email')).sendKeys(randomEmail);
    await driver.findElement(By.name('password')).sendKeys('Test1234');
  
    // Step 3: Select role
    const roleDropdown = await driver.findElement(By.name('role'));
    await roleDropdown.click();
    await roleDropdown.findElement(By.xpath("//option[. = 'Adopter']")).click();
  
    // Step 4: Submit the form
    await driver.findElement(By.className('submit-btn')).click();
  
    // Step 5: Handle success alert
    try {
      await driver.wait(until.alertIsPresent(), 10000); // 🔥 Increased from 5000 to 10000
      let alert = await driver.switchTo().alert();
      let alertText = await alert.getText();
      assert.ok(alertText.includes('Registration successful'), "Alert text does not match expected success message");
      await alert.accept(); // Accept alert
    } catch (err) {
    assert.fail("Success alert not found after signup");
    }

  
    // 🆕 Step 6: Now check if it navigated to login page
    await driver.wait(until.urlContains('/login'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.ok(currentUrl.includes('/login'), "Did not navigate to login page");
  
    console.log("TC_SIGN_01 Passed Successfully ✅");
  });

//   const { Builder, By, Key, until } = require('selenium-webdriver');
// const assert = require('assert');

// describe('Signup Automation Tests', () => {
//   let driver;

//   before(async () => {
//     driver = await new Builder().forBrowser('chrome').build();
//   });

//   after(async () => {
//     await driver.quit();
//   });

  it('TC_SIGN_02 - Signup with invalid Email format', async () => {
    await driver.get('http://localhost:3000/signup');

    // Step 1: Click "Get Started" button
    await driver.findElement(By.className('signup-btn')).click();

    // Step 2: Fill form
    await driver.findElement(By.name('username')).sendKeys('User12');
    await driver.findElement(By.name('email')).sendKeys('userexample.com'); // (Corrected 'email' field name)
    await driver.findElement(By.name('password')).sendKeys('Testuser12');

    // Step 3: Select role
    const roleDropdown = await driver.findElement(By.name('role'));
    await roleDropdown.click();
    await roleDropdown.findElement(By.xpath("//option[. = 'Adopter']")).click();

    // Step 4: Submit the form
    await driver.findElement(By.className('submit-btn')).click();

    // 🧠 Step 5: Handle browser validation or check URL stay

    // Sleep a bit to let browser validation appear
    await driver.sleep(1000);

    // Capture current URL
    const currentUrl = await driver.getCurrentUrl();

    // Assert that the user is still on signup page (form not submitted)
    assert.ok(currentUrl.includes('/signup'), "Form submitted even with invalid email ❌");

    // 🆕 Optional: Capture and log browser validation message
    const emailField = await driver.findElement(By.name('email'));
    const validationMessage = await emailField.getAttribute('validationMessage');
    console.log('Validation Message:', validationMessage);

    // Optional check: Ensure '@' is mentioned in validation message
    assert.ok(validationMessage.includes('@'), "Validation message does not mention '@'");

    console.log("✅ TC_SIGN_02 Passed Successfully!");
  });
});



/*minimal version
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Signup Automation - Invalid Email', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('TC_SIGN_02 - Signup with invalid Email format', async () => {
    await driver.get('http://localhost:3000/signup');

    await driver.findElement(By.className('signup-btn')).click();
    await driver.findElement(By.name('username')).sendKeys('User12');
    await driver.findElement(By.name('email')).sendKeys('userexample.com');
    await driver.findElement(By.name('password')).sendKeys('Testuser12');

    const roleDropdown = await driver.findElement(By.name('role'));
    await roleDropdown.findElement(By.xpath("//option[. = 'Adopter']")).click();

    await driver.findElement(By.className('submit-btn')).click();

    // Small wait for validation
    await driver.sleep(500);

    // Confirm user stays on signup page
    const currentUrl = await driver.getCurrentUrl();
    assert.ok(currentUrl.includes('/signup'), "User navigated away with invalid email");

    console.log("✅ TC_SIGN_02 Passed!");
  });
});

*/
it('TC_SIGN_03 - Signup with already registered email', async () => {
  await driver.get('http://localhost:3000/signup'); // Go to signup page

  // Step 1: Click "Get Started" button
  await driver.findElement(By.className('signup-btn')).click();

  // Step 2: Fill form with existing email
  await driver.findElement(By.name('username')).sendKeys('ExistingUser');
  await driver.findElement(By.name('email')).sendKeys('user@example.com'); // 👈 already used email
  await driver.findElement(By.name('password')).sendKeys('Test1234');

  // Step 3: Select role
  const roleDropdown = await driver.findElement(By.name('role'));
  await roleDropdown.click();
  await roleDropdown.findElement(By.xpath("//option[. = 'Adopter']")).click();

  // Step 4: Submit form
  await driver.findElement(By.className('submit-btn')).click();

  // Step 5: Handle error alert
  try {
    await driver.wait(until.alertIsPresent(), 10000); // Wait for alert
    let alert = await driver.switchTo().alert();
    let alertText = await alert.getText();
    console.log('Alert text:', alertText); // Log alert text
    assert.ok(alertText.includes('Registration failed: User already exists'), "Error alert text does not match expected");

    await alert.accept(); // Close alert
  } catch (err) {
    assert.fail("Error alert not found after trying to signup with existing email");
  }

  // Step 6: Verify still on signup page (URL should contain "/signup")
  const currentUrl = await driver.getCurrentUrl();
  assert.ok(currentUrl.includes('/signup'), "Not remained on signup page after error");

  console.log("TC_SIGN_03 Passed Successfully ✅");
});

