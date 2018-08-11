module.exports = [
  {
    method: 'GET',
    path: '/hello',
    handler: (request, h) => 'hello world'
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'hello world'
  },
  {
    method: 'GET',
    path: '/ello',
    handler: (request, h) => 'hello world'
  }
]
