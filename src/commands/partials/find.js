#!/usr/bin/env node

const { yellow, red } = require('colors');
const template = require('../../utils/template');

const command = async (program, db) => {
  program
    .command('find')
    .description(yellow('List of saved notes'))
    .option('-i, --id [id]', 'note ID')
    .action(async (options) => {
      const { id } = options;
      const find = Object.assign({}, id && { id });

      db.find(find, (error, response) => {
          if (error) {
            return console.log(red(error.message));
          }

          template(response);
        });
    });
}

module.exports = command;
