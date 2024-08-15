# Introduction to Node.js

### What is Node.js?

-   [Node.js](https://nodejs.org/en) is an [open-source](https://opensource.com/article/18/2/coining-term-open-source-software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software) Javascript runtime environment built on [Chrome's V8 Javascript engine](https://v8.dev/docs).
-   Node.js has an [event-driven architecture](#future-ref) capabale of [asynchronous I/O](#future-ref) (Non Blocking I/O).
-   Node.js enables to run Javascript anywhere, not just on the browser.
-   Node.js can be used to create servers, web apps, command line tools and many more.
-   Node.js is maintained by [OpenJS Foundation](https://openjsf.org/).

### Why Node.js is created?

-   Before Node.js, most of the servers were having [blocking I/O](#future-ref) (like [Apache Http Server](https://httpd.apache.org)).
-   So the intention is to create a server with [Non-Blocking I/O](#future-ref).

### History of Node.js?

**2009**

-   Node.js was developed by `Ryan Dahl` in 2009.
-   Initially SpiderMonkey was chosen as Javascript engine later within short time changed to V8 engine.
-   At that time `Joyent` is a company which works on similar project, invited Ryan Dahl to join their company and develop the project.
-   Initially Node.js is named as `Web.js`, reflecting it can be used to create web servers. Later renamed to `Node.js`.

**2010**

-   NPM was developed by [Isaac Schlueter](https://www.linkedin.com/in/isaacschlueter/) in 2010.

**2011**

-   Windows support was added. Previously it only supports linux and macos.
-   Joyent + Microsoft together developed the windows version.

**2012**

-   Ryan Dahl left the Node.js project and [Isaac Schlueter](https://www.linkedin.com/in/isaacschlueter/) became the project lead.

**2014**

-   [io.js](https://www.scholarhat.com/tutorial/nodejs/brief-history-of-nodejs-and-iojs#:~:text=js-,io.,an%20%22open%20governance%20model%22.) was introduced which was a fork of Node.js.
-   io.js was created with the intention to accelerate the development and predicted releases of code under an `open governance model`. Since, Node.js was governed by Joyent.

**2015**

-   `Node.js foundation` was introduced which is an independent foundation to take care of development and releases of Node.js.
-   Node.js foundation combined the releases of Node.js and io.js into a single code base.

**2019**

-   JS Foundation and Node.js foundation merged together to form [OpenJS Foundation](https://openjsf.org/).

# Annexure

### What is NPM?

-   [NPM](https://www.npmjs.com) is the standard `package manager` for Node.js.
-   It started as a way to download and manage dependencies for Node.js.
-   [Yarn](https://yarnpkg.com), [pnpm](https://pnpm.io) are alternatives to `npm cli`.
-   npm manages dependencies using `package.json` & `package-lock.json` files.

### How to install dependencies using NPM?

-   By default npm creates `node_modules` folder and install dependencies in it.
-   `npm i <package-name>` downloads the requested package.
-   `npm i` downloads all the packages mentioned in the `package.json` file.

### npm vs yarn vs pnpm

-   https://www.youtube.com/watch?v=d1E31WPR70g

|     |                               |                                                                                              |
| --- | ----------------------------- | -------------------------------------------------------------------------------------------- |
|     | [Back to index](../README.md) | [NEXT: Chapter 02 - JS on Server](../Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md) |
