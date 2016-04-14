const send = require('./send');
const R = require('ramda');

const toExport = {
  send: send.message,
  sendImage: send.image,
};

module.exports = toExport;

module.exports.Bot = (token) => R.map(x => x.bind(null, token), toExport);
