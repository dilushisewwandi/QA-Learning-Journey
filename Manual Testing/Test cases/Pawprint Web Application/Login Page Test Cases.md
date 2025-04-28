# Login Page - Manual Test Cases

## Valid Details

- **Test Case ID:** TC_LOGIN_01
- **Module:** Login
- **Test Case Description:** Login with valid details
- **Test Steps:** 
  - Fill all required fields properly and click the login button.
- **Test Data:** 
  - userID: 54
  - password: User16Test
- **Expected Results:**
  - Login successful.
  - Display success message: "Login successful!".
  - Navigate to the Distributor Panel.
- **Actual Result:**
  - Success message: "Login successfull!".
  - User navigated to the distributor panel.
- **Status (Pass/Fail):** Pass
- **Notes:** 

---

## Invalid userID

- **Test Case ID:** TC_LOGIN_02
- **Module:** Login
- **Test Case Description:** Login with invalid user ID
- **Test Steps:** 
  - Fill all required fields correctly except with an incorrect user ID and click login.
- **Test Data:** 
  - userID: 40
  - password: User16Test
- **Expected Results:**
  - Login failed.
  - Display error message: "Login failed: Incorrect user ID or password.".
  - User remains on the same page.
- **Actual Result:**
  - Login failed.
  - Error message: "Login failed: Incorrect password."
  - User remained on the same page.
- **Status (Pass/Fail):** Pass
- **Notes:** 
  - Consider improving the error message to specify whether the issue is with the userID.

---

## Invalid Password

- **Test Case ID:** TC_LOGIN_03
- **Module:** Login
- **Test Case Description:** Login with invalid password
- **Test Steps:** 
  - Fill all required fields with correct user ID and incorrect password, then click login.
- **Test Data:** 
  - userID: 43
  - password: User15test
- **Expected Results:**
  - Login failed.
  - Display error message: "Login failed: Incorrect user ID or password.".
  - User remains on the same page.
- **Actual Result:**
  - Login failed.
  - Error message: "Login failed: Incorrect password."
  - User remained on the same page.
- **Status (Pass/Fail):** Pass
- **Notes:** 
  - Could improve error handling to not reveal whether ID or password is wrong (for better security).

---

## Required Fields Missing

- **Test Case ID:** TC_LOGIN_04
- **Module:** Login
- **Test Case Description:** Login with required fields empty
- **Test Steps:** 
  - Click login button without filling anything.
- **Test Data:** 
  - userID: (empty)
  - password: (empty)
- **Expected Results:**
  - Validation errors shown below each input field (e.g., "User ID is required", "Password is required").
  - Login should fail.
  - Stay on the same page.
- **Actual Result:**
  - Error validation message displayed for each input field.
  - Login failed.
  - User remained on the same page.
- **Status (Pass/Fail):** Pass
- **Notes:** 
  - Error messages could be improved to be more user-friendly.
