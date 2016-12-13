module.exports = {
  apiPort: process.env.API_PORT || 3001,
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/reading'
}
