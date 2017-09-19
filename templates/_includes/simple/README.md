# How to use this project

### Install node dependencies

```js
npm install
// or
yarn
```

### Run HTTP server

```js
npm start
// or
yarn start
```

Visit the [running server](http://localhost:6400).

### Developing

Your `storefront` configuration can be found in the `js/index.js` file. Feel free to edit the [configuration](https://docs.groupbyinc.com/documentation.html?e=storefront&b=searchandiser&topic=050_Overview/200_StorefrontConfiguration.md&cid=).

#### Styles

Styles are built out using [BEM](http://getbem.com) and [Sass](http://sass-lang.com/). Make style alterations in `main.scss` and `variables.scss`. To compile changes to css:

```js
npm run sass
// or
yarn sass
```

Refresh the page and your changes will be viewable
