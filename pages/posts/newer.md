---
title: Newer.js
date: 2022/4/9
description: A simple framework
tag: framework
author: Revenity
---

# Newer.js 

A web framework for modern web development.

Now with database support and pre-setup server. See the [docs](https://aquaplmc.gitbook.io/newer.js) for more info.

## Example code:

Pre-setup server:

```typescript
import Application from "newer.js/app";

Application.start();
```

JSON Database:
```typescript
import JsonDB from "newer.js/db";

// Create or get the database at part ./db.json
const db = new JsonDB("./db.json");

// Create or get the current collection 
const User = db.collection("users", {
    name: JsonDB.String,
    age: JsonDB.Number,
});

// Create a new user
const reve = new User({
    name: "Revenity",
    age: 14,
});

// Save
await reve.save();
```

Simple server:
```typescript
import { simple } from "newer.js";

// For each request
for await (const res of simple()) 
    res.end("Hello World!");
```