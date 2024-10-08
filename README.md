# Namaste Node.js

_Any application that can be written in javascript will eventually be written in javascript_ -- Jeff Atwood. Founder, StackOverflow

## Index

1. [Introduction to Node.js](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md)
    - [What is Node.js](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#what-is-nodejs)
    - [Why Node.js is created](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#why-nodejs-is-created)
    - [History of Node.js](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#history-of-nodejs)
    - [What is NPM](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#what-is-npm)
    - [How to install dependencies using NPM](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#how-to-install-dependencies-using-npm)
    - [npm vs yarn vs pnpm](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#npm-vs-yarn-vs-pnpm)
2. [JS on Server](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md)
    - [What is a server](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-server)
    - [What is a web server](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-web-server)
    - [What is a Javascript engine](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-javascript-engine)
    - [How Node.js enabled Javascript to run everywhere](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#how-nodejs-enabled-javascript-to-run-everywhere-not-only-on-browser)
    - [Why Node.js is required when V8 alone can compile and execute javascript](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#why-nodejs-is-required-when-v8-alone-can-compile-and-execute-javascript)
    - [What is JIT Compilation](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-jit-compilation)
    - [What is ECMAScript](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-ecmascript)
    - [Why ECMAScript is required](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#why-ecmascript-is-required)
    - [What is ES6](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-es6)
    - [What is Babel](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-babel)
    - [What is a Transpiler](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-transpiler)
3. [Skipping]()
    - [Node.js installation](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
    - [Global object]()
4. [module.exports & require](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md)
    - [What is a module](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#what-is-a-module)
    - [Why modules are required](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#why-modules-are-required)
    - [How to use a module](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#how-to-use-a-module)
    - [How to create a module](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#how-to-create-a-module)
    - [Grouping modules together](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#grouping-modules-together)
    - [CommonJS Modules Vs ES Modules](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#commonjs-modules-vs-es-modules)
    - [Default export Vs Named export](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#default-export-vs-named-export)
5. [Diving into the Node.js github repo](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md)

    - [How variables and functions became private in a module when imported using `require()`](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md#how-variables-and-functions-became-private-in-a-module-when-imported-using-require)
    - [How `require` method works](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md#how-require-method-works)
    - [Simple `require` pseudo code](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md#simple-require-pseudo-code)

6. [libuv & async IO](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md)
    - [Synchronous Vs Asynchronous execution](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#synchronous-vs-asynchronous-execution)
    - [Importance of libuv](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#importance-of-libuv)
    - [What is libuv library](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#what-is-libuv-library)
