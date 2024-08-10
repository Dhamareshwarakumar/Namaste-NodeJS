# Diving into the Node.js github repo

### How variables and functions became private in a module when imported using `require()`?

-   `require` method import a module's code by wrapping it into an [IIFE](https://www.youtube.com/watch?v=Ex652LPfUdA) (Immediately Invoked Function Expression) and provides `module` object as parameter.
-   So that all the variables and functions defined in that module will become confined to that IIFE scope.

```js
// myModule.js
console.log('Running a custom module');

function greeting(name) {
    console.log(`Hello, ${name}!`);
}

module.exports = greeting;
```

-   Above module code will be formatted into something like below when imported using `require` method.

```js
(function (module) {
    console.log('Running a custom module');

    function greeting(name) {
        console.log(`Hello, ${name}!`);
    }

    module.exports = greeting;
})(module);
```

### How `require` method works?

**1. Resolving and Loading**

-   Check the [type of the module](../Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#what-is-a-module) to load.
-   When `require` method receive the module name as its input, It first tries to load Built-in module.
-   If path in require function begins with `./` or `../` It will try to load local module.
-   If no file is find, it will try to find folder with index.js in it.
-   Else it will go to `node_modules/` and try to load module from here.
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
-   So that if the same module is imported again instead of doing all the above process returns result from the cache.

### Simple `require` pseudo code

```js
function require(filePath) {
    // Step 0: Check Cache
    if (cache[filePath]) return cache[filePath];

    // Step 1.1: Resolve filepath and type
    if (!fs.existsSync(filePath) || !['.js', 'json'].includes(filePath.extension)) {
        throw new Error();
    }
    // Step 1.2: load the contents of the file
    const moduleCode = fs.readFile(filePath);

    const module = {
        exports = {},
    };

    // Step 2: Wrapping
    const wrapper = (function (module ) {
        moduleCode
    })(module);

    // Step 3,4: Send the above wrapper to V8 to execute
    const returnValues = execute(wrapper);

    // Step 5: Cache the results
    cache[filePath] = returnValues;

    return returnValues;
}
```

## References

-   [require polyfill](https://github.com/chenglou/require-polyfill/blob/master/require_polyfill.js)
-   [Node.js Github Repo](https://github.com/nodejs)

[PREV: Chapter 04 - module.exports](../Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md)

[Back to index](../README.md)
