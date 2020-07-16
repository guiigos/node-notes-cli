#!/usr/bin/env node

const { Command } = require('commander');
const database = require('../database');

const cmdFind = require('./partials/find');
const cmdInsert = require('./partials/insert');
const cmdRemove = require('./partials/remove');

const commands = async ({ name, author, version, description }) => {
  const db = database('s3cr3t');

  const program = new Command();

  program.name(name);
  program.version(version);
  program.description(description);

  program.on('--help', () => console.log(`\nPowered by ${author}\n`));

  cmdFind(program, db);
  cmdInsert(program, db);
  cmdRemove(program, db);

  program.parse(process.argv);
}

module.exports = commands;
