# Password Field Bug Reports

---

## Bug ID: BUG_SIGN_001
**Title**: No error message for short password on Signup page  
**Module**: Signup Page  
**Steps to Reproduce**:
1. Go to Signup page
2. Enter password: `1234`
3. Click signup button and submit the form  
**Expected Result**: Error: “Password must be at least 6/8 characters”  
**Actual Result**: Form submitted without error  
**Severity**: High  
**Notes**: Reproduced on Chrome, mobile view

---

## Bug ID: BUG_SIGN_002
**Title**: No error message for password without uppercase letter on signup  
**Module**: Signup Page  
**Steps to Reproduce**:
1. Go to Signup page
2. Enter password: `test123`
3. Click signup button and submit the form  
**Expected Result**: Error: “Password must contain at least one uppercase letter”  
**Actual Result**: Form submitted without error  
**Severity**: High  
**Notes**: Reproduced on Chrome, mobile view

---

## Bug ID: BUG_SIGN_003
**Title**: No error message for weak password on signup  
**Module**: Signup Page  
**Steps to Reproduce**:
1. Go to Signup page
2. Enter password: `abcdefgh`
3. Click signup button and submit the form  
**Expected Result**: Error: “Password must contain letters and numbers”  
**Actual Result**: Form submitted without error  
**Severity**: High  
**Notes**: Reproduced on Chrome, mobile view
