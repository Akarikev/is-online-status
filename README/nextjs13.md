---
description: >-
  Using re-use-online in nextjs is quite similar to how you'd import it in
  Normal React, but just some few changes.
---

# NextJS13

## Installation

Install the package using  npm or yarn&#x20;

```bash
npm install re-use-online
```

or

```bash
yarn add re-use-online
```

## Usage

Import the `useOnlineStatus` hook into your Next server component, then convert it into a client component by using the command `use client` on top of your code, with this you can use it to check the online status of the users depending on how you'd want it.&#x20;

```javascript
//use the use client command to convert 
//the component into a client component

'use client'
import React from "react";
import useOnlineStatus from "re-use-online";

function MyComponent() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {isOnline ? (
        <p>You are connected to the internet!</p>
      ) : (
        <p>No Internet Connection</p>
      )}
    </div>
  );
}

export default MyComponent;
```

This version supports TypeScript.&#x20;
