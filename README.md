# Kickstarter Smart Contract ([Live Version](https://kickstarter-smart-contarct.herokuapp.com))

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Create campaigns on top of blockchain!

![demo](https://user-images.githubusercontent.com/11765228/41504069-9a06c7e8-7216-11e8-9206-44482d255def.png)

## Getting Started

### Prerequisites

This project runs on [Node.js](https://nodejs.org/en/)

After installation, run `node -v` to make sure node installed correctly. Example

```
$ node -v
v8.9.1
```

### Instal Dependencies

```
npm install
```

### Start the Project

```
npm run dev
```

### Deploy Contracts

```
npm run deploy-contract
```

### Run Tests

To run the project tests, run the following command:

```
npm test
```

## Deploy dockerized apps on Heroku

You can deploy the project on [Heroku](https://www.heroku.com/) using the following steps:

Make sure you have a working Docker installation (eg. `docker ps`) and that you’re logged in to Heroku (`heroku login`).

Log in to Container Registry:

```
heroku container:login
```

Navigate to the app’s directory and create a Heroku app:

```
heroku create
```

Build the image and push to Container Registry:

```
heroku container:push web --app {app_name}
```

Then release the image to your app:

```
heroku container:release web --app {app_name}
```

Now open the app in your browser:

```
heroku open --app {app_name}
```

## License

Licensed under the MIT License, Copyright © 2018-present Max Li.

See [LICENSE](LICENSE.md) for more information.
