'use strict';
const request = require('request-promise');
const R = require('ramda');

function post(path, token, urlParams, postParams) {
  if (token === undefined || token === null) {
    throw new Error('Missing access_token in request');
  }

  const query = R.map(
    x => x.join('='),
    [['access_token', token]].concat(R.toPairs(urlParams))
  ).join('&');

  return request.post({
    url: `https://graph.facebook.com/v2.6${path}?${query}`,
    json: true,
    body: postParams,
  });
}


module.exports = {
  post,
};
