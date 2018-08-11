'use strict'

const Hapi = require('hapi')
const Blipp = require('blipp')
const Bell = require('bell')
const config = require('xtconf')()

const server = Hapi.server({
  host: 'localhost',
  port: 4567
})

server.route({
  method: 'GET',
  path: '/hi',
  handler: function(request, h) {
    return 'hello world'
  }
})
async function start() {
  try {
    await server.register([
      {
        plugin: require('hapi-router'),
        options: {
          routes: ['src/routes/*.js']
        }
      },
      Blipp,
      Bell
    ])

    server.auth.strategy('twitter', 'bell', {
      provider: 'twitter',
      password: 'cookie_encryption_password_secure',
      isSecure: false,
      clientId: config.get('twitter').id,
      clientSecret: config.get('twitter').secret
    })

    server.auth.strategy('okta', 'bell', {
      provider: 'okta',
      config: { uri: 'https://your-organization.okta.com' },
      password: 'cookie_encryption_password_secure',
      isSecure: false,
      location: 'http://127.0.0.1:8000',
      clientId: 'IIA1yMR7IK4XGhfyfCno',
      clientSecret: 'PEh_HemJovaR-Zjs-unX8-cC9IhQgzF5M1RUrUgW'
    })

    server.events.on({ name: 'request', channels: 'error' }, function(
      request,
      event
    ) {
      console.log('event', event)
    })

    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server running at:', server.info.uri)
}

start()
