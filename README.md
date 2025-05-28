# UNICO JavaScript Library

A JavaScript library to interact with the UNICO API. This library allows developers to easily integrate their applications with the UNICO platform by providing a simple interface to the available API endpoints. With just an API key, users can authenticate and start interacting with UNICO services, including retrieving available agents, add contexts and generating completions.

## Getting Started

```
npm i unico-js
```

### Create a client

- Default environment (production):

```javascript
const client = new UnicoClient("your-unico-api-key");
```

- Point to another UNICO environment (develop purpouses only):

```javascript
const client = new UnicoClient("your-unico-api-key", "your-unico-api-base-url");
```

### Retrieve your agents

```javascript
const agents: Agent[] = await client.agents.retrieve();
console.log(agents);
```

### Create a completion

```javascript
const completion: Completion = await client.agents.completions.create(0, "Hello World!");
console.log(completion);
```

### Add contexts to an agent

```javascript
await client.agents.contexts.create(0, ["context 1", "context 2"]);
```

## Development

- **Install [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)** (node version manager):

- **Use the same node version from the `.nvmrc` file**:
  - For Windows:
    ```sh
    nvm use $(Get-Content .nvmrc)
    ```
  - For Other Systems:
    ```sh
    nvm use
    ```
- **Install the necessary packages**:

  ```sh
  npm install
  ```

## Before pushing

1. **See if you have any rebase to do** (you must have the updated commits history before pushing to avoid conflicts between main and your branch):

```sh
git fetch
git pull origin main --rebase
```

2. **Dry run npm publish to check if your code will be deployed**:

```sh
npm publish --dry-run
```

3. **Check for vulnerabilities to avoid security issues**:

```sh
npm audit --audit-level=high
```

4. **Lint your code to avoid ESLint errors** (if the following command return errors or warnings you must resolve them before pushing):

```sh
npm run lint
```

5. **Update the library version based on your changes** (make sure to commit the changes before running the following command):

```sh
npm version patch
```

## Contributing

If you want to contribute to **UNICO JavaScript Library**, follow these steps:

1. Create a new branch for your changes (`git checkout -b your-branch-name`).
2. Make your changes and commit them (`git commit -m 'Changed something'`).
3. Push your branch (`git push origin your-branch-name`).
4. Open a pull request.

## Contact

For more information, contact the **UNICO** support team at: info@theunico.it
