#!/usr/bin/env node

const path = require('path');
const nedb = require('nedb');
const { AES, enc: { Utf8 } } = require('crypto-js');

const database = (secret) => new nedb({
  autoload: true,
  timestampData: true,
  filename: path.join(path.dirname(require.main.filename), 'tasks.db'),
  afterSerialization: strDB => AES.encrypt(strDB, secret).toString(),
  beforeDeserialization: strDB => AES.decrypt(strDB, secret).toString(Utf8),
});

module.exports = database;
