# JS on Server

### What is a server?

-   Server is a computer or system that provides resources, data, services or programs to other computers, known as clients, over a network.
-   Basically servers are Desktops/Laptops with higher physical configuration, Example...
    -   Higher RAM (64 Gigs, 128 Gigs, e.t.c.,)
    -   Redundant Power supply
    -   Redundant Network Cards
-   Based on their functions servers can be broadly categorized into the following
    -   Web Server
    -   Mail Server
    -   Print Server
    -   File Server e.t.c.,

### What is a Web Server?

-   A web server is a combination of hardware and software that uses protocols like Hypertext Transfer Protocol (HTTP) to respond to requests from clients on the World Wide Web.

### What is a Javascript engine?

-   A Javascript engine is a program that executes Javascript code.
-   It takes human-readable Javascript code and translates it into machine-readable instructions and execute.
-   Some key functions of a Javascript Engine are...
    -   **Parsing**
        -   The engine reads the Javascript code and checks its syntax.
        -   It then creates a data strcuture called an Abstract Syntax Tree (AST) representing the code's structure.
    -   **Compiling**
        -   Modern Javascript engines use Just-In-time (JIT) compilation to convert the AST into machine code.
    -   **Execution**
        -   The engine runs the compiled machine code.
-   Popular Javascript engines...

    | Engine                                    | Developed By | Uses in         |
    | ----------------------------------------- | ------------ | --------------- |
    | [V8](https://v8.dev/docs)                 | Google       | Chrome, Node.js |
    | [SpiderMonkey](https://spidermonkey.dev/) | Mozilla      | Firefox         |
    | JavascriptCore/JSC/Nitro                  | Apple        | Safari          |
    | Chakra                                    | Microsoft    | Edge            |

### How Node.js enabled Javascript to run everywhere (not only on browser)?

-   Node.js & V8 engine are developed using `C++`.
-   So whatever the nodes that can support C++ can now support Node.js as well.
-   i.e., with the help of Node.js, Javascript can also be used to write backend applications.

### Why Node.js is required when V8 alone can compile and execute javascript?

-   V8 is just the engine, like the engine in a car. Node.js is the entire car, providing features like...
    -   File System access
    -   Network communication e.t.c.,
-   Also Node.js provides `APIs and Modules` (e.g., fs, http) that enable you to interact with the operating system and perform various tasks.

### What is ECMAScript?

-   ECMAScript is a standard for scripting languages such as Javascript, JScript e.t.c., which defines the syntax, operators, types, reserved words, global objects and statements of a programing language.
-   Javascript & all the Javascript engines follows ECMAScript standard.
-   Node.js is built against modern versions of V8. By keeping up-to-date with the latest releases of V8 engine enables Node.js to have latest features from ECMAScript.

### Why ECMAScript is required?

-   There are multiple Javascript engines which can define their own rules individually.
-   Inorder to avoid chaos and stability accross all the runtimes & engines ECMAScript is introduced.
-   It enables same piece of Javascript code yields same results across all the browsers.

# Appendex

### What is ES6?

-   It is the sixth edition of ECMAScript.
-   Also called ES2015/ECMAScript 2015 because it is released in year 2015.

### What is Babel?

-   [Babel](https://babeljs.io/docs) is a Javascript transpiler.
-   Babel mainly used to convert ECMAScript 2015+ code into a backwards compatible version of javascript.
-   Some browsers may not be updated with the lastest ES standards. So using babel you can write latest Javascript code and make backward compatible.

### What is a Transpiler?

-   A program that converts a high-level language to another high-level language.

### What is JIT compilation?

-   Static compilation converts the source code into a language for a specific platform, usually before the program is run (ahead of time compilation).
-   An interpreter directly executes the source code.
-   Just In Time (JIT) compilation attempts to use the benefits of both. While the interpreted program is being run, the JIT compiler determines the most frequently used code and compiles it to machine code. Depending on the compiler, this can be done on a method or smaller section of code.
-   So when the next time executing same method/code machine code will be used instaed.

|                                                                                                               |                               |                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [PREV: Chapter 01 - Introduction to Node.js](../Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md) | [Back to index](../README.md) | [NEXT: Chapter 04 - module.exports](../Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md) |
