# Appium Test Project

This project contains automated tests for mobile applications using **Appium** and **WebdriverIO**. The tests are designed to interact with native Android applications, such as the Play Store, and perform actions like searching for apps and validating results.

## Features

- Automates interactions with native Android apps.
- Uses `UiSelector` for precise element selection.
- Includes validations for search functionality.
- Returns to the home screen after completing tests.

## Prerequisites

- Node.js installed on your machine.
- Appium installed globally or as a dependency.
- Android SDK and ADB configured.
- A connected Android device or emulator.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheMalaland/appium-test-project.git
   cd appium-test-project

2. install dependencies

    Running Tests
    Start the Appium server:

3.  Run the tests:

    Project Structure
    test/specs/: Contains the test scripts.
    wdio.conf.js: WebdriverIO configuration file.

4. to run
    npx wdio run wdio.conf.ts

5. npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/appium-service ts-node typescript