# Sohoz website automaition using Playwright, JS, POM Pattern

## We can automate the following using Playwright: 

* UI Automation - Functional Test Automation 
* API Automation 
* Cross-Browser Testing Automation 
* Responsiveness Testing Automation 

---

### Technology: 

* Automation Framework: Playwright 
* Build tool: npm 
* Bundled Tools: Mocha, Chai
* Language: Javascript 
* Report: Allure,html-report 
* Dependency/Packages:{
   "@playwright/test": "^1.46.1",
   "@types/node": "^22.5.0",
   "allure-playwright": "^3.0.0-beta.10",
   "dotenv": "^16.4.5",
   "rimraf": "^6.0.1"
   } 
* IDE: Visual Studio Code 

---

### Prerequisite:

The following software are required:

1. nodejs : Download and Install Node JS from
   https://nodejs.org/en/download/
2. Install Java 8 or above, Allure Reports require Java 8 or higher.
3. allure commandline : Install allure command line for generating Allure Reports using
   npm install -g allure-commandline

### Installation:

1. Clone the repo: https://github.com/acharjeeauntor/Sohoz-Portal.git
2. Navigate to folder and install npm packages using:
   npm install
3. Collect the .env file from the Project Author and place in the root directory of the project

---

### Usage:

1. To run the test without project script: 
   A. To run test on chrome project: npx playwright test --project chrome
   B. To run test on firefox project: npx playwright test --project firefox
   C. To run test on safari project: npx playwright test --project webkit
   D. To run in debug mode with Playwright Inspector: npx playwright test --debug
   E. To run tests in interactive UI mode, with a built-in watch mode (Preview): npx playwright test --ui
   F. To run tests in headed browsers: npx playwright test --headed 
   G. To run all the tests: npx playwright test 
   H. To run on parallal worker: npx playwright test --workers=3
2. To run the test with project defined script: 
   A. To run test on chrome project: npm run testChrome
   B. To run test on firefox project: npm run testFirefox
   C. To run test on safari project: npm run testSafari
3. To update browser: npm run updateBrowser
4. To open Allure Report: npm run allureReport 
5. To generate & open Allure Report: npm run allureGenerate

---

### Playwright automation features that cover in this project:

1. Secured confidential data through the .env file
2. Test on multiple browser support
3. Parallal test execution support
4. Test on multiple environment (e.g. test, dev, stage, production) support
5. Sesssion Storage and login bypass support
6. Can perform both UI, AIP, Cross-Browser, Responsivness Testing
7. Test data management support
8. Advanced test reporting support including Screenshots, Video, Trace, Chart view for issue investigation
9. Standard test automation design pattern support (POM) 
10. Both headless and headed mode support 

---