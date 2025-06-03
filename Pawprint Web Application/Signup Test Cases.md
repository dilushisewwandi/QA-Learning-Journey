# Test Cases for Signup Page

## Valid Signup

**Test Case ID:** TC_SIGN_01  
**Module:** Signup  
**Test Case Description:** Signup with valid details  

### Test Steps
1. Fill all the required fields correctly.

### Test Data
- **Username:** User
- **Email:** user@example.com
- **Password:** Test123
- **Role:** Adopter

### Expected Results
- User is registered successfully.
- Success message: "Registration successful."
- User is redirected to the login page.
- User data is saved in the database.
- JWT token is stored.
- Form fields are cleared.

### Actual Result
- User registered successfully.
- Success message displayed.
- Redirected to the login page.
- User details saved.
- JWT token present in localStorage.

### Status (Pass/Fail)
- Pass

### Notes
- Tested on Chrome Desktop.
- Form cleared after submission.
- JWT token confirmed in browser localStorage.

---

## Invalid Email Format

**Test Case ID:** TC_SIGN_02  
**Module:** Signup  
**Test Case Description:** Signup with invalid email format  

### Test Steps
1. Fill all fields but use an invalid email format.

### Test Data
- **Email:** userexample.com

### Expected Results
- Error message displayed: "Enter a valid email."
- User is not registered.
- The form stays on the signup page.

### Actual Result
- Error message displayed in the email field: "Please include an '@' in the email address. 'userexample.com' is missing an '@'."

### Status (Pass/Fail)
- Pass

### Notes
- Tested on Chrome desktop view.
- Email field used built-in browser validation.
- Error message styling could be improved.

---

## Email Already Used

**Test Case ID:** TC_SIGN_03  
**Module:** Signup  
**Test Case Description:** Signup with already registered email  

### Test Steps
1. Try to signup using an email that already exists.

### Test Data
- **Email:** user@example.com

### Expected Results
- Error message: "Registration failed: User already exists."
- User is not registered again.
- Form remains on page.

### Actual Result
- Error message: "Registration failed: User already exists."
- User is not registered again.
- Form remains on page.

### Status (Pass/Fail)
- Pass

### Notes
- Reproduced multiple times.
- Error consistently shown.
- Backend validation works correctly.

---

## Password Field Test Cases (No confirm password)

### Test Case: Short Password

**Test Case ID:** TC_SIGN_04  
**Module:** Signup  
**Test Case Description:** Signup with short password  

### Test Steps
1. Enter password less than required characters.

### Test Data
- **Password:** 1234

### Expected Results
- Error message: "Password must be at least 6/8 characters."

### Actual Result
- Error message not displayed.
- User registered successfully with short password.
- Navigated to the login page successfully.

### Status (Pass/Fail)
- Fail

### Notes
- Bug logged (BUG_SIGN_01).
- No frontend validation on password length. Needs fix.

---

### Test Case: No Uppercase Letters

**Test Case ID:** TC_SIGN_05  
**Module:** Signup  
**Test Case Description:** Signup with no uppercase letters  

### Test Steps
1. Enter the password without any capital letters.

### Test Data
- **Password:** test1234

### Expected Results
- Error message: "Password must contain at least one uppercase letter."

### Actual Result
- Error message not displayed.
- User registered successfully with no uppercase letter password.
- Navigated to the login page successfully.

### Status (Pass/Fail)
- Fail

### Notes
- Bug logged (BUG_SIGN_002).
- Password rules not enforced in frontend validation.

---

### Test Case: Weak Password

**Test Case ID:** TC_SIGN_06  
**Module:** Signup  
**Test Case Description:** Signup with weak password  

### Test Steps
1. Enter password with only letters or only numbers.

### Test Data
- **Password:** 12345678  
  or  
- **Password:** abcdefgh

### Expected Results
- Error message: "Password must contain letters and numbers."

### Actual Result
- Error message not displayed.
- User registered successfully with weak password.
- Navigated to the login page successfully.

### Status (Pass/Fail)
- Fail

### Notes
- Bug logged (BUG_SIGN_003).
- Password accepted without mixed characters.
- Needs regex update in validation.

---

### Test Case: Strong Password

**Test Case ID:** TC_SIGN_07  
**Module:** Signup  
**Test Case Description:** Signup with strong password  

### Test Steps
1. Enter valid and secure password.

### Test Data
- **Password:** Test@1234

### Expected Results
- Success message: "User registered successfully. Your user id is..."

### Actual Result
- Error message not displayed.
- User registered successfully.
- Success message: "User registered successfully. Your user id is: 44"
- Navigated to the login page successfully.

### Status (Pass/Fail)
- Pass

### Notes
- Password strength validated and accepted.
- Success message showed with user ID.
- Tested in Edge.

---

### Test Case: Special Characters in Password

**Test Case ID:** TC_SIGN_08  
**Module:** Signup  
**Test Case Description:** Signup with special characters in password  

### Test Steps
1. Enter password with `!@#$%^&*`.

### Test Data
- **Password:** Strong!123

### Expected Results
- Registered successfully.
- Password accepted.

### Actual Result
- Error message not displayed.
- User registered successfully.
- Success message: "User registered successfully. Your user id is: 45"
- Navigated to the login page successfully.

### Status (Pass/Fail)
- Pass

### Notes
- Password with special characters accepted.
- Backend did not reject.
- Test passed successfully.

---

## Required Fields Missing

**Test Case ID:** TC_SIGN_09  
**Module:** Signup  
**Test Case Description:** Signup with required fields empty  

### Test Steps
1. Click signup without filling anything.

### Test Data
- None

### Expected Results
- Error messages shown for each empty field: "This field is required."
- Signup fails.
- Form stays on the same page.

### Actual Result
- Error messages displayed for each empty field.
- Signup fails.
- Form stays on the same page.

### Status (Pass/Fail)
- Pass

### Notes
- Tested in Chrome and Edge.
- Validation triggered for each empty field.
- Working as expected.

---

## Signup with Role

**Test Case ID:** TC_SIGN_10  
**Module:** Signup  
**Test Case Description:** Signup with role selection  

### Test Steps
1. Select different roles. (Adopter, Distributor, Vet, Daycare, Admin)

### Test Data
- **Role:** Adopter

### Expected Results
- Successful message with user ID.
- Navigate to the adopter panel.

### Actual Result
- Successful message: "Registration successful. Your user ID is: 48"

### Status (Pass/Fail)
- Pass

### Notes
- Tested for all roles: Adopter, Distributor, Admin, Daycare, Vet.
- Only Adopter verified redirection.
- Others to be tested later.
