When working with Node.js to create a server, we first need to use the built-in `http` module. This module allows Node.js to transfer data over the Hypertext Transfer Protocol (HTTP), which is the foundation of web communication.

To begin, we require the module using:

```js
const http = require("http");
```

Once the module is imported, we can create a server using `http.createServer()`. This method creates an HTTP server that can listen for requests and send responses back to the client. The function inside `createServer()` takes two parameters — `req` (request) and `res` (response).

Example:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, this is my first Node.js server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

Here’s what’s happening step by step:

1. `http.createServer()` creates a new server instance. The callback function is triggered whenever a request is made to the server.

2. `res.writeHead(statusCode, headers)` sends a response header to the client. The first parameter defines the status code (like 200 for success), and the second parameter defines the response type or content type (like `text/plain`, `text/html`, or `application/json`).

3. `res.write()` is used to write content or data that will be sent as a response to the client. This could be text, HTML, or JSON depending on the content type.

4. `res.end()` is used to signal the end of the response process. Without calling this, the server will keep waiting and the client won’t get a complete response.

5. `server.listen(port, callback)` starts the server and listens for incoming requests on the specified port. The callback function runs once the server starts successfully.

Example with HTML content:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome to My Node.js Server</h1>");
  res.write("<p>This server is created using the HTTP module.</p>");
  res.end();
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
```

In this example, the content type is changed to `text/html`, so the response can include HTML tags and will be displayed properly in the browser.

In summary, the `http` module provides a simple way to handle requests and responses in Node.js without using any external frameworks. It helps you understand how web servers actually work under the hood — how requests come in, how responses are structured, and how communication happens between the client and server.
