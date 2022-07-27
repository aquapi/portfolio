---
title: PXE
date: 2022/7/27
description: A web framework
tag: framework
author: Revenity
---

# PXE
A Node.js framework for building web applications and APIs.

## Usage
Simple web server that responds with `Hello world` on each request.

```typescript
import Server from "@pxe/server";

// Initialize a new server
const app = new Server();

// Add a middleware
app.use(async (ctx, next) => {
    // Set the response to "Hello world"
    ctx.response.body = "Hello world";

    // Run the next middleware
    // End the response if this is the last middleware
    await next();
});

// Listen to port 3000
app.ls(3000);
```

## Basic Features
- Web cookie
- Redirect
- Error handling
- Middlewares
- Typescript support

## Docs
Currently documentation is under construction.
Please chat on [Gitter](https://gitter.im/pxe-js/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link) if you want to ask any question.