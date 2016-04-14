const assert = require('chai').assert;
const proxyquire = require('proxyquire');

describe('requests test', () => {
  describe('POST method', () => {
    it('pass positive test', () => {
      const path = '/me',
        token = 'token',
        urlParams = { q: '123' },
        postParams = { data: 123 };

      const request = proxyquire('../lib/requests', {
          'request-promise' : { post: (options) =>  {
            assert(options.url === 'https://graph.facebook.com/v2.6/me?access_token=token&q=123', 'Incorrect url generation.');
            assert(options.json === true, 'Should be json request.');
            assert(options.body.data === 123, 'Body is modified');
          }
        }
      });
      return request.post(path, token, urlParams, postParams);
    });

    it('should throw missing token exception', () => {
      const path = '/me',
        urlParams = { },
        postParams = { data: 123 },
        request = require('../lib/requests');
      try {
        request.post(path, null, urlParams, postParams);
      } catch(e) {
        assert(e.message === 'Missing access_token in request', 'No exception on missing token');
      }
    });

  });
});
