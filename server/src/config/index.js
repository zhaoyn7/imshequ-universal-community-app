const isProduction = process.env.NODE_ENV === 'production'


module.exports = {
  dbURL: 'mongodb://localhost:27017/imshequ',
  apiPrefix: '/api/v1',
  jwtSecret: 'woshishequ'
}