# module.exports & require

### What is a module?

-   A module is a encapsulated units of code that can be reused across different parts of an application.
-   Every individual javascript file can be considered as a module.
-   Types of modules in Node.js
    -   **Built-in modules**
        -   These modules come pre-packaged with Node.js and provide access to core functionalities like file system operations (fs), network communication (http), and more.
    -   **Local Modules**
        -   These are modules you create yourself within your project. They can be used to organize code into smaller, manageable units.
    -   **Third-party modules**
        -   These are modules created by other developers and shared through the Node Package Manager (NPM).

### Why modules are required?

-   Using Node.js only one file (entry file) can be run at a time.
-   Writing all the code in a single file makes code dirty.
-   Code can be maintained clean by extracting various functionalities into different files called modules.
-   These modules can be imported into one another.
-   Benefits of using modules
    -   **Code reusability**: Write code once and use it in multiple projects.
    -   **Maintainability**: Break down complex code into smaller, manageable units.
    -   **Collaboration**: Multiple developers can work on different modules simultaneously.
    -   **Organization**: Structure your code logically, making it easier to understand.

### How to use a module?

-   To use a module, you need to import it using the `require()` function.
-   This function returns a reference to the module's exports, which can be functions, objects, or variables.
-   By simply importing modules using `require()` will not provide access to their module's variables and functions because modules protect their variables and functions from leaking.
-   Inorder to access variables and functions from a module they need to be exported from that module. Check here for [more](../Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md#how-variables-and-functions-became-private-in-a-module-when-imported-using-require)

```js
const fs = require('fs'); // Importing the built-in 'fs' module
```

### How to create a module?

-   Simply create a JavaScript file and define what you want to export using the `module.exports` object.

```js
// myModule.js
function greet(name) {
    console.log(`Hello, ${name}!`);
}

module.exports = greet;
```

```js
const greet = require('./myModule'); // Import the local module

greet('Dhamareshwar'); // Output: Hello, John!
```

**NOTE:**

-   While importing local modules, either absolute path or relative path should be provided to `require()` function.
-   While using node_modules, only the module name should be provided.
-   if you wanted to export mutiple variables or functions, simply wrap them in an object.
-   By default `modules.exports` is an empty object.
-   By default Node.js uses commonjs modules. To use ES Modules declare `type: 'module'` in `package.json`.

```json
// package.json
{
    "type": "module"
}
```

### Grouping modules together

-   For better organization, modules with related functionalities can be placed inside a folder and add index file to specify exports, which inturn becomes a module.
-   i.e., in the below case `add.js` and `subtract.js` kept together to form a `math` module which provides the utilities to add and substract.

```
|\_ math
    |\_ add.js
    |\_ subtract.js
    |\_ index.js
|\_ app.js
```

```js
// calculate/index.js
const add = require('./add');
const subtract = require('./subtract');

module.exports = {
    add,
    subtract,
};
```

```js
// app.js
const { add, subtract } from './math';
```

### CommonJS Modules Vs ES Modules

|        | Common Js                 | ES Modules     |
| ------ | ------------------------- | -------------- |
| alias  | cjs                       | mjs            |
| syntax | require(), module.exports | import, export |
|        | Older way                 | Newer way      |
|        | Synchronous               | can be Async   |
|        | non strict mode           | strict mode    |

**ES Modules Syntax**

```js
// myModule.js
function greet(name) {
    console.log(`Hello, ${name}!`);
}

export greet;
```

```js
import { greet } from './myModule';

greet(`Dhamareshwar`);
```

# Appendix

### Default export Vs Named export

-   In ES Modules syntax, there are two main ways to export values: default exports, used for a single export per file/module, and named exports, allowing multiple exports per file/module.

```js
// add.js
function add(op1, op2) {
    return op1 + op2;
}

export default add;
```

```js
// index.js
import add from './add.js';
import subtract from './subtract.js';

export { add, subtract };
```

```js
// app.js
import { add, subtract } from './math';
```

**NOTE:**

-   Carefully observe the syntax difference between default and named exports.
-   A file/module can have only one default export, but it can have multiple named exports as needed.
-   If you are importing both default & named exports in a single line default export must be provided first and then named exports.

```js
import React, { useStet, useEffect } from 'react';
```

|                                                                                              |                               |                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PREV: Chapter 02 - JS on Server](../Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md) | [Back to index](../README.md) | [NEXT: Chapter 05 - Diving into the Node.js github repo](../Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md) |
