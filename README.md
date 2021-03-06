# chllng-ptpy

Here we would like to invite you for a small coding challenge. You can find the instruction below:

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. For example, in Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.

There is a group of school children who are currently learning Roman numerals, and your task is to create for them a basic Roman numerals converter that can convert a Roman numeral to and from an integer. Your solution should:

- Include a simple UI for the children to input and receive conversions between Roman numerals and integers;
- Implement a RomanNumerals helper that conforms to the following API:

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

- Be written in either vanilla JavaScript, HTML, and CSS or JSX (React);
- Address any further considerations that you think are appropriate.

We do not require a polished visual design as part of this challenge, but do expect the solution to be robust, intuitive to use, and easily verifiable. Once you have completed the challenge, please submit it via one of the listed methods:

- GitHub repository
- Online code sandbox
- Shared link on Google Drive, DropBox, etc.
- Zip email attachment

The allotted time to complete the challenge is 72 hours.

## Installation

1. Clone repository
    ```shell
    git clone git@github.com:milenvoutchev/chllng-ptpy.git
    ```
1. Install dependencies
    ```shell
    npm install
    ```
1. Run unit tests
    ```shell
    npm run test
    ```
1. Build compiled assets & create dist folder
    ```shell
    npm run dev
    ```
1. Run locally
    ```shell
    npm run serve
    ```
1. Open in browser on http://localhost:5000/

## Notes
- Converter Service can be found in: `src/service/RomanNumerals.js`
- Unit tests are located in `src/service/RomanNumerals.test.js`

