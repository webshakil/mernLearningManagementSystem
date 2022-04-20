# mjs-require
Making npm CommonJS based modules available in NodeJS ESM.

## How to install
You can install it either globally or locally, and use it in latter case via `npm` scripts.
```sh
npm install -g mjs-require
```

## How to use
Require the module before launching your ESM based project.
```sh
node -r mjs-require --experimental-modules index.mjs
```

### Why
Right now there's no conditional, dynamic, synchronous way to require CJS modules.

So now `require` is back.

Happy ESM Migration 🎉