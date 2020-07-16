const colors = require('colors');

const template = (notes) => {
  if (notes.length === 0) return;

  console.log(colors.bold.yellow('Notes'));
  notes.forEach(({ id, text }) => console.log(`- ${colors.bold(id)} ${colors.italic(text)}\n`));
}

module.exports = template;
