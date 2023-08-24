````markdown
# re-use-online@v1.1.4

All other versions works. choose the one best suited for your needs. Please Note version1.1.4 supports TypeScript

A React custom hook to check the online status of a user's device. This version now supports ES6

## Installation

Install the package using npm or yarn:

```bash
npm install re-use-online
```
````

or

```bash
yarn add re-use-online
```

## Usage

Import the `useOnlineStatus` hook into your React component and use it to check the online status.

```javascript
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

## How it works

The `useOnlineStatus` hook utilizes the `navigator.onLine` property to determine the initial online status of the user's device. It also adds event listeners for the `online` and `offline` events to update the online status dynamically.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
