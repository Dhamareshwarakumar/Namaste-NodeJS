# JS on Server

### What is a server?

-   A server is a remote system that provides resources, services or programs to other computers, known as clients, over a network.
-   Servers are essentially high-performance Desktops/Laptops (often structured in racks) with enhanced physical configurations. Examples include...
    -   Higher RAM (64 Gigs, 128 Gigs, etc.)
    -   Redundant power supply
    -   Redundant network interfaces
    -   Servers typically run specialized operating systems optimized for server workloads (like Linux distributions, Windows Server)
-   Based on their functions, servers can be broadly categorized into the following
    -   Web Server
    -   Mail Server
    -   Print Server
    -   File Server etc.

### What is a Web Server?

-   A web server is a combination of hardware and software that uses protocols like [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) to respond to requests from clients on the [World Wide Web](https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web).

### What is a Javascript engine?

-   A Javascript engine is a program that executes Javascript code.
-   It takes human-readable Javascript code, translates it into machine-readable instructions and executes it.
-   Some key functions of a Javascript Engine are...
    -   **Parsing**
        -   The engine reads the Javascript code and checks its syntax.
        -   It then creates a data strcuture called an Abstract Syntax Tree (AST), which represents the code's structure.
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
-   So, any system that supports C++ can also support Node.js.
-   In other words, Node.js enables Javascript to be used for backend development.

### Why Node.js is required when V8 alone can compile and execute javascript?

-   V8 is just the engine, similar to a car engine. Node.js is the complete vehicle, providing additional features such as...
    -   File System access
    -   Network communication etc.
-   Also Node.js provides `APIs and Modules` (e.g., fs, http) that enable interaction with the operating system and perform various tasks.

![Components of Node.js](https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/images/optimized/rev-fe0ba7b/litslink.com/wp-content/uploads/2021/07/Node.js-Architecture-Chart.webp)

# Appendex

### What is JIT compilation?

-   Static compilation converts the source code into a language for a specific platform (machine code), usually before the program is run (ahead of time compilation).
-   An interpreter directly executes the source code.
-   Just In Time (JIT) compilation attempts to use the benefits of both. While the interpreted program is being run, the JIT compiler determines the most frequently used code and compiles it to machine code. Depending on the compiler, this can be done on a method or smaller section of code.
-   So when the next time executing same method/code machine code will be used instead.

### What is ECMAScript?

-   ECMAScript is a standard for scripting languages such as Javascript, JScript etc. which defines the syntax, operators, types, reserved words, global objects and statements of a programing language.
-   Javascript & all the Javascript engines follows ECMAScript standard.
-   TC39, the technical committee that manages ECMAScript specifications.
-   ECMAScript releases are now yearly (ES2015, ES2016, etc.)
-   Node.js is built against modern versions of V8. By keeping up-to-date with the latest releases of V8 engine enables Node.js to have latest features from ECMAScript.

### Why ECMAScript is required?

-   There are multiple Javascript engines which can define their own rules individually.
-   Inorder to avoid chaos and stability accross all the runtimes & engines ECMAScript is introduced.
-   It enables same piece of Javascript code yields same results across all the browsers.

### What is ES6?

-   It is the sixth edition of ECMAScript.
-   Also known as ES2015/ECMAScript 2015, as it was released in 2015.

### What is Babel?

-   [Babel](https://babeljs.io/docs) is a Javascript transpiler.
-   Babel is mainly used to convert ECMAScript 2015+ code into a backward-compatible version of javascript.
-   Some browsers may not support the latest ES standards. Babel allows developers to write modern JavaScript while ensuring compatibility with older browsers.

### What is a Transpiler?

-   A program that converts code from one high-level language to another.

|                                                                                                               |                               |                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [PREV: Chapter 01 - Introduction to Node.js](../Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md) | [Back to index](../README.md) | [NEXT: Chapter 04 - module.exports](../Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md) |
