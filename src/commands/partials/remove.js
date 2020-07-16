#!/usr/bin/env node

const colors = require('colors');

const command = async (program, db) => {
  program
    .command('remove <ID>')
    .description(colors.yellow('remove note'))
    .action(async (id) => {
      db.remove({ id }, (error, response) => {
          if (error) {
            return console.log(colors.red(error.message));
          }

          console.log(`${colors.bold.yellow('Rows')} ${response}\n`);
        });
    });
}

module.exports = command;
