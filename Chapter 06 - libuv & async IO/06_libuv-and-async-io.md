### Synchronous Vs Asynchronous execution

-   **Synchronous execution** is blocking, meaning that each operation must complete before the next one can start. (one operation at a time).
-   **Asynchronous execution** is non-blocking, meaning that tasks can run simultaneously without blocking the overall program flow (multiple operations at a time).

### Importance of libuv

-   Javascript engine is synchronous single threaded.
-   During running I/O tasks (like reading file system, network calls, e.t.c.,) CPU sits idle until the I/O task completes.
-   To prevent this wastage of resources `libuv` is used in Node.js which facilitates a non-blocking I/O

### What is libuv library

-   [`libuv`](https://libuv.org/) is an open-source cross platform C library that provides support for asynchronous I/O based operations. Originally designed for Node.js
-   Features of libuv

    -   **Asynchronous I/O**
    -   **Event Loop**
    -   **Thread Pool**
    -   **Cross platform compatibility**

[PREV: Chapter 05 - Diving into the Node.js github repo](../Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md)

[Back to index](../README.md)
