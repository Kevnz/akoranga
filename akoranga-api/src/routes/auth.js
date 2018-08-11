const Boom = require('boom');

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/auth/twitter',
    options: {
      auth: 'twitter',
      handler: function(request, h) {
        console.log('test')
        if (!request.auth.isAuthenticated) {
          return `Authentication failed due to: ${request.auth.error.message}`
        }
        return (
          '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>'
        )
      }
    }
  },
  server.route({
    method: 'GET',
    path: '/auth/okta',
    options: {
        auth: 'okta',
        handler: function (request, h) {

            if (!request.auth.isAuthenticated) {
                throw Boom.unauthorized('Authentication failed: ' + request.auth.error.message);
            }

            request.auth.session.set(request.auth.credentials);
            return h.redirect('/');
        }
    }
});
]
