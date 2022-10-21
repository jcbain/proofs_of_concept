# Undici with Signal

What happens when an abort signal goes off? Let's find out

## Installation

### Install request dependecies

```bash
cd ./requester
yarn
```

### Install server dependencies

```bash
cd ./server
yarn
```

## Running

1. first start up the server

```bash
cd ./server
node index.js
```

2. make a request with undici

```bash
cd ./requester
node index.js
```

or intentially throw the abort error during the request

```bash
node index.js --abort
```
