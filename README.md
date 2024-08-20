# E-commerce Automation Suite

## Overview

This project is an automation testing suite designed to perform end-to-end testing on an e-commerce platform. The suite includes tests for navigating the website, searching for specific products (T-shirts and jackets), and adding items to the cart. The tests are implemented using [Playwright](https://playwright.dev/), a powerful automation tool, and are designed to run in a Docker container for consistent environments.

## Project Structure

- **`tests/`**: Contains all the test files.
  - `navigation.test.js`: Test for navigating through the website.
  - `search.test.js`: Test for searching products like T-shirts and jackets.
  - `cart.test.js`: Test for adding items to the cart.
- **`data/`**: Contains JSON files used as data sources for tests.
  - `searchData.json`: JSON file with details of products (e.g., T-shirts and jackets) to be searched.
- **`Dockerfile`**: Docker configuration to containerize the Playwright environment.
- **`package.json`**: Manages dependencies and scripts.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/omarkhayalx/webTechnologyAssessment.git
```
### 2. Clone the Repository
bun i

npx playwright install

npx playwright test

### 3.Using Docker

docker build -t vercel-store-testing-bun

docker run -t vercel-store-testing-bun


-### LICENSE--

You can now copy and paste this content directly into your `README.md` file.





