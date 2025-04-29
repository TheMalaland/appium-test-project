# Appium Test Project

This project contains automated tests for mobile applications using **Appium** and **WebdriverIO**. The tests are designed to interact with native Android applications, such as the Play Store, and perform actions like searching for apps and validating results.

---

## Features

- Automates interactions with native Android apps.
- Uses `UiSelector` for precise element selection.
- Includes validations for key functionalities.
- Automatically returns to the home screen before starting tests.
- Generates detailed reports using **Allure** and **JUnit**.

---

## Prerequisites

Before running the tests, ensure the following:

- **Node.js** is installed on your machine.
- **Appium** is installed globally or as a project dependency.
- **Android SDK** and **ADB** are properly configured.
- A connected Android device or emulator is available.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheMalaland/appium-test-project.git
   cd appium-test-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Appium server:
   ```bash
   appium
   ```

---

## Project Structure

- **`test/specs/`**: Contains the test scripts.
- **`test/pageobjects/`**: Implements the Page Object Model (POM) for organizing interactions with app screens.
- **`wdio.conf.js`**: WebdriverIO configuration file.
- **`allure-results/`**: Directory where Allure test results are stored.
- **`junit-results/`**: Directory where JUnit XML reports are stored.

---

## Running Tests

1. Start the Appium server:
   ```bash
   appium
   ```

2. Run the tests:
   ```bash
   npx wdio run wdio.conf.ts
   ```

---

## Generating Reports

### **Allure Report**
1. Generate the report:
   ```bash
   npx allure generate ./allure-results --clean -o ./allure-report
   ```

2. Open the report in your browser:
   ```bash
   npx allure open ./allure-report
   ```

### **JUnit Report**
JUnit reports are automatically generated in the `./junit-results` directory after running the tests. These reports are in XML format and can be integrated with CI/CD tools like Jenkins or GitLab CI.

---

## Dependencies

To install all required dependencies for this project, run:
```bash
npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/appium-service @wdio/allure-reporter @wdio/junit-reporter ts-node typescript
```

---

## Contributing

If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch and open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

If you have any questions or need assistance, feel free to open an issue in the repository or contact the project maintainer.