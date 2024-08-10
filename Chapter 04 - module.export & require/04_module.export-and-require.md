# module.exports & require

### What is a module?

-   A module is a encapsulated units of code that can be reused across different parts of an application.
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
-   By simply importing modules using `require` will not provide access to their modules variables and functions because modules protect their variables and functions from leaking.
-   Inorder to access variables and functions from a module they need to be exported from that module.

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

-   While importing local modules, either absolute path or relative path should be provided to `require` function.
-   While using node_modules, only the module name should be provided.
-   if you wanted to export mutiple variables or functions, simply wrap them in an object.
-   By default `modules.exports` is an empty object.

### Grouping modules together

-   For better organization, modules with related functionalities can be placed inside a folder and add index file to specify exports.

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
| syntax | module.exports, require() | import, export |
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

### Default export Vs Named export

[Back to index](../README.md)
