#!/usr/bin/env node

const { yellow, red } = require('colors');
const template = require('../../utils/template');

const command = async (program, db) => {
  program
    .command('insert <ID>')
    .description(yellow('Create a new note'))
    .requiredOption('-t, --text [text]', 'node description')
    .action(async (id, options) => {

      db.insert({
        id,
        text: options.text,
      }, (error, response) => {
        if (error) {
          return console.log(red(error.message));
        }

        template([response]);
      });
    });
}

module.exports = command;
