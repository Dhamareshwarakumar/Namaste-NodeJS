# Introduction to Node.js

### What is Node.js?

-   [Node.js](https://nodejs.org/en) is an [open-source](https://opensource.com/article/18/2/coining-term-open-source-software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software) Javascript runtime environment built on [Chrome's V8 Javascript engine](https://v8.dev/docs).
-   Node.js has an [event-driven architecture](#future-ref) capable of [asynchronous I/O](../Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#why-the-term-asynchronous-io) ([Non Blocking I/O](../Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#why-the-term-non-blocking-io)).
-   Node.js enables Javascript to run anywhere (servers, desktops, embedded systems etc), not just in the browser.
-   Node.js can be used to create servers, web apps, command line tools and many more.
-   Node.js is maintained by [OpenJS Foundation](https://openjsf.org/).

### Why Node.js was created?

-   Before Node.js, most servers relied on [blocking I/O](#future-ref) (like [Apache Http Server](https://httpd.apache.org)).
-   The goal was to create a server that utilizes [Non-Blocking I/O](#future-ref).

### History of Node.js?

**2009**

-   Node.js was developed by `Ryan Dahl` in 2009.
-   Initially SpiderMonkey was chosen as the Javascript engine, but it was soon replaced with V8.
-   At that time, `Joyent` was working on a similar project and invited Ryan Dahl to join their company and develop Node.js.
-   Node.js was initially named as `Web.js`, reflecting its use for creating web servers. It was later renamed to `Node.js`.

**2010**

-   NPM was developed by [Isaac Schlueter](https://www.linkedin.com/in/isaacschlueter/) in 2010.

**2011**

-   Windows support was added. Previously, it only supported linux and macos.
-   Joyent + Microsoft together developed the windows version.

**2012**

-   Ryan Dahl stepped away from the Node.js project, and [Isaac Schlueter](https://www.linkedin.com/in/isaacschlueter/) took over as the project lead.

**2014**

-   [io.js](https://www.scholarhat.com/tutorial/nodejs/brief-history-of-nodejs-and-iojs#:~:text=js-,io.,an%20%22open%20governance%20model%22.) was introduced which was a fork of Node.js.
-   io.js was created with the intention to accelerate the development and predicted releases of code under an `open governance model`. Since Node.js was governed by Joyent, io.js was created as an alternative.

**2015**

-   The `Node.js foundation` was established as an independent entity to over see the development and releases of Node.js.
-   Node.js foundation combined the releases of Node.js and io.js into a single code base.

**2019**

-   JS Foundation and Node.js foundation merged together to form [OpenJS Foundation](https://openjsf.org/).

# Appendix

### What is NPM?

_(GIST)_

-   [NPM](https://www.npmjs.com) is the standard `package manager` for Node.js.
-   It started as a way to download and manage dependencies for Node.js.
-   [Yarn](https://yarnpkg.com), [pnpm](https://pnpm.io) are alternatives to `npm cli`.
-   NPM manages dependencies using the `package.json` & `package-lock.json` files.

### Blocking I/O vs Non-Blocking I/O

_(GIST)_

-   **Blocking I/O** is an I/O operation that prevents the execution of the program from proceeding until the operation is complete (i.e., the CPU remains idle until the I/O operation finishes).
-   **Non-Blocking I/O** allows a program to continue executing other tasks while the I/O operation is in progress, rather than waiting for it to complete.

### Check more on Node.js

-   [Node.js: The Documentary | An origin story](https://www.youtube.com/watch?v=LB8KwiiUGy0)
-   [Ryan Dahl: Original Node.js presentation](https://www.youtube.com/watch?v=ztspvPYybIY)

|     |                               |                                                                                              |
| --- | ----------------------------- | -------------------------------------------------------------------------------------------- |
|     | [Back to index](../README.md) | [NEXT: Chapter 02 - JS on Server](../Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md) |
