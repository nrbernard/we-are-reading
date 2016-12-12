const express = require('express');
const connectToMongo = require('./lib/db');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/bookmarks', function(request, response) {
  let db;

  connectToMongo()
    .then(result => {
      db = result;
      return db.collection('bookmarks').find();
    })
    .then(cursor => cursor.toArray())
    .then((docs) => {
      response.json(docs);
      db.close();
    })
    .catch((err) => {
      console.error(err);
      db.close();
    });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
