#!/usr/bin/env node

const colors = require('colors');
const { text } = require('figlet');
const { promisify } = require('util');

const {
  name,
  display,
  version,
  description,
  author: {
    name: author,
  },
} = require('./package');

const commands = require('./src/commands');

const [figletAsync] = [
  promisify(text),
];

(async () => {
  console.clear();
  console.log(colors.gray(await figletAsync(display)), colors.yellow(version), '\n');

  commands({
    name: colors.gray(name),
    author: colors.bold.gray(author),
    version: colors.yellow(version),
    description: colors.yellow(description),
  });
})();
