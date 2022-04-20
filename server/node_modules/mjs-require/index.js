var NODE_PATH = process.env.NODE_PATH;
process.env.NODE_PATH = [
  (NODE_PATH || ''),
  require('path').join(
    process.cwd(),
    'node_modules'
  )
].join(':');
require('module').Module._initPaths();
global.require = require;
process.env.NODE_PATH = NODE_PATH;