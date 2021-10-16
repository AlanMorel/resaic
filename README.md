# Resaic

Install node, npm, clone this repository, then install the dependencies

```sh
git clone https://github.com/AlanMorel/resaic resaic
```

```sh
cd resaic
```

```sh
npm install yarn -g
```

```sh
yarn install
```

Create a `.env` file

```sh
VERSION=0
NODE_ENV=development
PORT=8083
ORIGIN=http://localhost:8083
DOCKER_ORIGIN=http://localhost:8083

DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_TABLE=resaic

SESSION_SECRET=secret
```

Create a folder called `logs` at the root

```sh
mkdir logs
```

Create a new MySQL table with the name specified.

Run the server

```sh
yarn server
```

In a seperate terminal, build the app

```sh
yarn build-dev
```

Visit `http://localhost:8083` to see the app running.
