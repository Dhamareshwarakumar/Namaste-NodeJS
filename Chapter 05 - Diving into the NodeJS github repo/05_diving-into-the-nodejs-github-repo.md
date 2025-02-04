# Diving into the Node.js GitHub repo

### How variables and functions became private in a module when imported using `require()`?

-   `require` method imports a module's code by wrapping it into an [IIFE](https://www.youtube.com/watch?v=Ex652LPfUdA) (Immediately Invoked Function Expression) and provides `module` object as parameter.
-   This ensures that all variables and functions defined in the module remain confined to the IIFE scope.

```js
// myModule.js
console.log("Running a custom module");

function greeting(name) {
    console.log(`Hello, ${name}!`);
}

module.exports = greeting;
```

-   Above module code will be formatted into something like below when imported using `require` method.

```js
(function (exports, require, module, __filename, __dirname) {
    console.log("Running a custom module");

    function greeting(name) {
        console.log(`Hello, ${name}!`);
    }

    module.exports = greeting;
})(exports, require, module, __filename, __dirname);
```

### How `require` method works?

**1. Resolving and Loading**

-   Check the [type of the module](../Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#what-is-a-module) to load.
-   When the `require` method receives a module name as input, it first tries to load a built-in module.
-   If the path in the require function begins with `./` or `../`, it tries to load a local module.
-   If no file is found, it will look for a folder containing an index.js file.
-   Otherwise, it will check the `node_modules/` directory to load the module.
-   If file is still not found, then an error will be thrown.

**2. Wraps inside an IIFE**

-   Wrapping is done to give that imported module a private scope or local scope. So that it can’t be accessed globally and avoiding variable declaration conflicts.

**3. Execution**

-   Code inside the wrapper function sent to V8 to run.

**4. Returning Exports**

-   `require` method return the exports of imported module.
-   These exports are stored in `module.exports` object.

**5. Caching**

-   At the end all modules are cached after the first time they are loaded
-   This way, if the same module is imported again, it returns the cached result instead of repeating the entire process.

### Simple `require` pseudo code

```js
function require(filePath) {
    // Step 0: Check Cache
    if (cache[filePath]) return cache[filePath];

    // Step 1.1: Resolve the filepath and type
    if (
        !fs.existsSync(filePath) ||
        ![".js", "json"].includes(filePath.extension)
    ) {
        throw new Error();
    }
    // Step 1.2: Load the contents of the file
    const moduleCode = fs.readFile(filePath);

    const module = {
        exports: {},
    };

    // Step 2: Wrapping
    const wrapper = (function (module) {
        moduleCode;
    })(module);

    // Step 3,4: Send the above wrapper to V8 to execute
    const returnValues = execute(wrapper);

    // Step 5: Cache the results
    cache[filePath] = returnValues;

    return returnValues;
}
```

**NOTE:**

-   In terms of module wrapping CommonJS and ES Modules are completely different
-   CommonJS follows the above way.
-   Not diving deep into ES Modules since they are more complex.

# Appendix

### More about `module` argument of module wrapper

-   It has properties like...
    -   **id:** The identifier for the module (usually the full path)
    -   **exports:** The object that will be exposed to other modules
    -   **filename:** The full path to the module file
    -   **loaded:** Boolean indicating if the module has finished loading
    -   **children:** Array of modules required by this module
    -   **paths:** Array of paths where Node.js looks for required modules

```json
{
    "id": ".",
    "path": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code",
    "exports": {},
    "filename": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code/app.js",
    "loaded": false,
    "children": [
        {
            "id": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code/myModule.js",
            "path": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code",
            "exports": [Function: greet],
            "filename": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code/myModule.js",
            "loaded": true,
            "children": [],
            "paths": [Array]
        },
        {
            "id": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code/math/index.js",
            "path": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code/math",
            "exports": [Object],
            "filename": "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code/math/index.js",
            "loaded": true,
            "children": [Array],
            "paths": [Array]
        }
    ],
    "paths": [
        "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/code/node_modules",
        "/Users/dhamarg/Desktop/Namaste-NodeJS/Chapter 04 - module.export & require/node_modules",
        "/Users/dhamarg/Desktop/Namaste-NodeJS/node_modules",
        "/Users/dhamarg/Desktop/node_modules",
        "/Users/dhamarg/node_modules",
        "/Users/node_modules",
        "/node_modules"
    ]
}
```

### More about `exports` argument of module wrapper

-   `exports` is actually a reference to `module.exports`
-   It's important to note that you can't reassign `exports` directly (like `exports = something`), as it will break the reference to `module.exports`

```js
// This works (adding properties)
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// This won't work (reassignment)
exports = {
    // ❌ breaks the reference to module.exports
    add: (a, b) => a + b,
};

// Instead use module.exports for complete replacement
module.exports = {
    // ✅ correct way
    add: (a, b) => a + b,
};
```

### Other arguments of module wrapper

-   **\_\_filename:** The absolute path of the current module's file
-   **\_\_dirname:** The absolute path of the directory containing the current module

## References

-   [require polyfill](https://github.com/chenglou/require-polyfill/blob/master/require_polyfill.js)
-   [Node.js GitHub Repo](https://github.com/nodejs)

|                                                                                                                        |                               |                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [PREV: Chapter 04 - module.exports](../Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md) | [Back to index](../README.md) | [NEXT: Chapter 06 - libuv & async IO](../Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md) |
