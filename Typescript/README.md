# TypeScript Classes

## Technologies used

TypeScript, NodeJS

### Dependencies

prompt-sync, inquirer, chalk, node-banner

### Dev dependencies

@types/inquirer, @types/node, typescript

## Project Setup

### 1. New Directory

```bash
mkdir my-typescript-project
cd my-typescript-project
```

### 2. Initialize NPM

```bash
npm init -y
```

### 3. Initialize TypeScript

```bash
tsc --init
```

### 4. Install package that provides TypeScript type definitions for NodeJS

```bash
npm install @types/node --save-dev
```

### 5. Change package.json

add following line in package.json

```bash
  "type":"module",
```

### 6. Change tsconfig.json

modify the following lines in tsconfig.json

```bash
    "target": "es2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
```

### 7. Compile TypeScript code to JavaScript code

#### Auto compile

```bash
tsc --watch
```

#### Manual compile

```bash
tsc file.ts
```

### 8. View results in Console

```bash
node file.ts
```
