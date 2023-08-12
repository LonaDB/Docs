# lonadb-client

The JavaScript-Client is an npm library designed to facilitate communication with LonaDB's "Hadro" Database Server. This library provides a convenient way to interact with the server's various functions, allowing you to manage tables, variables, users, permissions, and more. It simplifies the process of sending requests and receiving responses from the server using the TCP protocol.

## Installation

You can install the JavaScript-Client library using npm:

```bash
npm install lonadb-client
```

## Usage

To use the `lonadb-client` library, follow these steps:

1. Import the required modules and classes:

```javascript
const LonaClient = require("lonadb-client");
```

2. Create an instance of the `LonadbClient` class:

```javascript
const client = new LonaClient(host, port, name, password);
```

Replace `host`, `port`, `name`, and `password` with the appropriate values for your Hadro Database Server.

3. Use the provided methods to interact with the server:

```javascript
// Example: Get a list of tables
client.get("Table", "Variable name")
    .then(data => {
        console.log("The content of the variable is " + data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

## Available Methods

### `getTables()`

Retrieves a list of tables available in the database.

### `getTableData(table)`

Retrieves data from a specified table.

### `deleteTable(name)`

Deletes a table by its name.

### `createTable(name)`

Creates a new table with the given name.

### `set(table, name, value)`

Sets a variable within a table to the specified value.

### `delete(table, name)`

Deletes a variable from a table.

### `get(table, name)`

Retrieves the value of a variable from a table.

### `getUsers()`

Retrieves a list of users in the database.

### `createUser(name, password)`

Creates a new user with the given name and password.

### `deleteUser(name)`

Deletes a user by their name.

### `checkPassword(name, password)`

Checks if the provided password is correct for a given user.

### `checkPermission(user, permission)`

Checks if a user has a specific permission.

### `removePermission(user, permission)`

Removes a permission from a user.

### `getPermissionsRaw(name)`

Retrieves the raw permission data for a user.

### `addPermission(user, permission)`

Adds a permission to a user.

## License

This project is licensed under the GNU Affero General Public License version 3 (GNU AGPL-3.0)
