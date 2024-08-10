# Introduction to Node.js

### What is Node.js?

-   [Node.js](https://nodejs.org/en) is an [open-source](https://opensource.com/article/18/2/coining-term-open-source-software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software) Javascript runtime built on [Chrome's V8 Javascript engine](https://v8.dev/docs).
-   Node.js has an [event-driven architecture](#future-ref) capabale of [asynchronous I/O](#future-ref) (Non Blocking I/O).
-   Node.js enables to run Javascript anywhere, not just on the browser.
-   Node.js can be used to create servers, web apps, command line tools and scripts.
-   Node.js is maintained by [OpenJS Foundation](https://openjsf.org/).

### Why Node.js is created?

-   Before Node.js, most of the servers are built using [Apache Http Server](https://httpd.apache.org), which has blocking I/O.
-   So the intention is to create a server with Non-Blocking I/O.

### History of Node.js?

**2009**

-   Node.js was developed by `Ryan Dahl` in 2009.
-   Initially SpiderMonkey is chosen as Javascript engine later changed to V8 engine.
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
-   io.js was created with the intention to accelerate the development and predicted releases of code under an `open governance model`. Since, node.js was governed by Joyent.

**2015**

-   Node.js foundation was introduced which is an independent foundation to take care of development and releases of Node.js
-   Node.js foundation combined the releases of Node.js and io.js into a single code base.

**2019**

-   JS Foundation and Node.js foundation merged together to form OpenJS Foundation.

# Annexure

### Possible interview questions

-   What is [Node.js](#what-is-nodejs)?
    -   What do you mean by runtime?
    -   What is a [javascript engine](../Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-javascript-engine)?
        -   Do you aware of any other javascript engines? or
        -   Any idea what javascript engines does Firefox or Safari uses?
-   What is [Web Assembly](https://youtu.be/cbB3QEwWMlA)?
-   What is [event-driven architecture](#future-ref)?
-   Differentiate Blocking & Non-Blocking I/O?

[NEXT: Chapter 02 - JS on Server](../Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md)

[Back to index](../README.md)
