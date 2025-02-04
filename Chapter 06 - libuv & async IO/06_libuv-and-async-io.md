### Synchronous Vs Asynchronous execution

-   **Synchronous execution:**

    -   Tasks execute sequentially, one after another
    -   Each task must complete before the next one begins
    -   Blocking in nature - the program waits for each operation to complete
    -   Single-threaded execution is sufficient

-   **Asynchronous execution:**

    -   Multiple tasks can run simultaneously (multiple operations at a time).
    -   Non-blocking in nature - program continues execution while waiting for operations
    -   At least more than one thread is required.
        -   This can be achieved through concurrency or parallelism.

**NOTE:**

-   Javascript (JAVASCRIPT ENGINE) is synchronous, single-threaded (i.e., Javascript engine can run only one operation at a time)

### How Javascript shoes Asynchronous behaviour?

-   Runtime environments provide the ability to handle asynchronous tasks to the Javascript engine.

    -   **Browser Runtime** provides event loop, callback queue, microtask queue and browser API's (like [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) etc.)
    -   **Node Runtime** provides libuv library with event-driven architecture.

-   Following are considered as async tasks in javascript

    -   I/O tasks
        -   File operation
        -   Network calls etc.
    -   Timer
        -   Javascript does not have built-in timers; it relies on the runtime to provide them.

-   Browser Runtime Architecture

    ![Browser Runtime Architecture](../.github/assets/browser_runtime_architecture.png)

-   Node.js Architecture

    -   ![Node.js Architecture](#TODO)

### Simple workflow of handling async tasks

1. Main Thread (Synchronous)
    - Executes Javascript code line by line
    - When it encounters async tasks, delegates them to runtime
2. Runtime environment
    - Handles async tasks separately (not on the main thread)
    - Browser Runtime:
        - Handles the tasks using browser API's
        - Puts completed tasks in callback queue/microtask queue
    - Libuv:
        - Handles the task using Libuv's libraries and thread pool
        - Puts completed tasks in callback queue/microtask queue
3. Event Loop
    - Continuously checks if the main thread is idle.
    - Moves callbacks from queue to main thread.

### What is libuv library

-   [`libuv`](https://libuv.org/) is an open-source cross platform C library that provides support for asynchronous I/O based operations. Originally designed for Node.js
-   Features of libuv

    -   Event Loop
    -   Thread Pool
    -   Asynchronous I/O
    -   Cross platform compatibility

### What is libuv's thread pool?

TODO:

### Why the term "Asynchronous I/O"

-   All the I/O tasks are delegated to libuv and it executes them asynchronously using thread pool, hence Async I/O.

### Why the term "Non-Blocking I/O"

-   No I/O task will block the main thread, hence the name Non-Blocking I/O

# Appendix

### What is callback queue (task queue)?

-   After executing I/O tasks, JavaScript runtimes add them to the callback queue.
-   The event loop then picks these tasks from the callback queue and adds them to the call stack.

### Callback queue vs Microtask queue

-   Task queue handles
    -   setTimeout/setInterval callbacks
    -   I/O operations
-   Microtask queue handles
    -   Promise callbacks
-   Microtask queue has higher priority, task queue will only be handled if microtask queue is empty.

### Concurrency Vs Parallelism

**Concurrency:**

-   Multiple threads take turns executing on a single processor core
-   Tasks are managed through context switching - the processor switches between threads
-   Can be achieved on a single core processor
-   Threads appear to run simultaneously but are actually taking turns

**Parallelism:**

-   Multiple threads execute simultaneously on different processor cores
-   No context switching needed between parallel threads
-   Requires multi-core processor hardware
-   Threads truly run at the same time independently

|                                                                                                                                                                       |                               |     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --- |
| [PREV: Chapter 05 - Diving into the Node.js github repo](../Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md) | [Back to index](../README.md) |     |
