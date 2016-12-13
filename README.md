# We Are Reading

This app shows what we're reading on the internet. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Running Locally

In development, `create-react-app` sets up a development server for the React app and we also run a separate Node.js service to serve the static assets and the API. By default, the client app runs on `localhost:3000` and proxies API requests to the Node.js app that runs on `localhost:3001`.

To start the app, run the following commands:

```
git clone git@github.com:nrbernard/we-are-reading.git
cd we-are-reading
npm i

cd client
npm i

cd ..
npm start
```

## Testing

Tests for the React code are written with Jest. Run them with `npm test`.
