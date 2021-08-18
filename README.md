# Resaic

## Setup

1. Install node, npm, clone this repository, then install the dependencies

```sh
$ git clone https://github.com/AlanMorel/resaic resaic
```

```sh
$ cd resaic
```

```sh
$ npm install yarn -g
```

```sh
$ yarn install
```

2. Create a `.env` file, also at the root of the project. Here are example settings:

```
PORT=8083
NODE_ENV=development
SESSION_SECRET=secret

DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_TABLE=resaic
```

3. Create a new MySQL table with the name specified.

4. Run the server by running this command:

```
yarn server
```

5. In a seperate terminal, build the app by running this command:

```
yarn build-dev
```

6. Visit `http://localhost:8083` to see the app running.
