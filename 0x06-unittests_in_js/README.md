# 0x06. Unittests in JS

## About 
- Using `Mocha` to develop test suites
- Using assertion libraries `Node` and `Chai`
- Presenting long test suites.
- When and how to use spies, stubs and hooks.
- Unit testings with Async functions.
- Writing integration tests with a small node server.

## Tasks
0. Unittest with `mocha` test framework and node's `assertion` library.
    - Files:
        - [package.json](package.json)
        - [0-calcul.js](0-calcul.js)
        - [0-calcul.test.js](0-calcul.test.js)

1. Combined `mocha` descriptions.
    - Files:
        - [1-calcul.js](1-calcul.js)
        - [1-calcul.test.js](1-calcul.test.js)

2. Basic testing with `chai` assertion library.
    - Files:
        - [2-calcul_chai.js](2-calcul_chai.js)
        - [2-calcul_chai.test.js](2-calcul_chai.test.js)

3. Testing with `sinon` spies.
    - Files:
        - [utils.js](utils.js)
        - [3-payment.js](3-payment.js)
        - [3-payment.test.js](3-payment.test.js)

4. Testing with `sinon` stubs.
    - Files:
        - [4-payment.js](4-payment.js)
        - [4-payment.test.js](4-payment.test.js)

5. Testing with `sinon` hooks.
    - Files:
        - [5-payment.js](5-payment.js)
        - [5-payment.test.js](5-payment.test.js)

6. Testing asynchronous function and promises.
    - Files:
        - [6-payment_token.js](6-payment_token.js)
        - [6-payment_token.test.js](6-payment_token.test.js)

7. Skipping tests in `mocha`.
    - Files: [7-skip.test.js](7-skip.test.js)

8. Basic integration tests of minimal `express` server.
    - Routes:
        - `GET /`: returns home page.
    - Files:
        - [8-api/package.json](8-api/package.json)
        - [8-api/api.js](8-api/api.js)
        - [8-api/api.test.js](8-api/api.test.js)

9. Regex integration testing of minimal `express` server.
    - Routes:
        - `GET /`: returns home page.
        - `GET /cart/:id`: returns payment methods for cart id.
    - Files:
        - [api/api.js](api/api.js)
        - [9-api/api.test.js](9-api/api.test.js)
        - [9-api/package.js](9-api/package.js)

10. Deep equality and post integration testing of minimal `express` server.
    - Routes:
        - `GET /`: returns home page.
        - `GET /cart/:id`: returns payment methods for cart id.
        - `GET /available_payments`: returns available payment methods.
        - `GET /login`: returns login message (form parameter: `userName`)
    - Files:
        - [10-api/api.js](10-api/api.js)
        - [10-api/api.test.js](10-api/api.test.js)
        - [10-api/package.json](10-api/package.json)
