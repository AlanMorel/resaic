# Resia

## Project setup
```
npm install
```

Create a `.env` file at the root of the project. Here are example settings:
```
PORT=8000
NODE_ENV=development
SESSION_SECRET=secret

DATABASE_HOST=localhost
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_TABLE=resia
```

In two separate terminals, run the server, then build the app:
```
npm run server
npm run build-dev
```

Now visit `http://localhost:8000` to see the app running.

### Project scripts
```
// build app for development
npm run build-dev

// build app for production
npm run build-prod

// build server
npm run build-server

// lint app
npm run lint-app

// lint and fix app
npm run lint-app-fix

// lint server
npm run lint-server

// lint and fix server
npm run lint-server-fix

// build server watcher
npm run server

// build server and run
npm run server-static

// run tests on app
npm run test-app

// run tests on server
npm run test-server
```
