#!/usr/bin/env node

const { yellow, red } = require('colors');
const template = require('../../utils/template');

const command = async (program, db) => {
  program
    .command('find')
    .description(yellow('List of saved notes'))
    .option('-f, --filter [filter]', 'search filter')
    .action(async (options) => {
      const { filter } = options;

      const find = Object.assign({}, filter && { id: new RegExp(filter, 'i') });
      const sort = { text: 1 };

      db.find(find)
        .sort(sort)
        .exec((error, response) => {
          if (error) {
            return console.log(red(error.message));
          }

          template(response);
        });
    });
}

module.exports = command;
