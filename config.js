require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'React Redux Example',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'React Redux Example: %s',
      meta: [
        {name: 'description', content: 'Simple app express, react and redux.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Simple app express, react and redux'},
        {property: 'og:image', content: 'https://www.google.fr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjz6KmNkJTYAhXHKlAKHbzKDDwQjBwIBA&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&psig=AOvVaw2fbxOufulrYGiaTEkl9AnR&ust=1513705893812137'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Simple app express, react and redux'},
        {property: 'og:description', content: 'Simple app express, react and redux'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
        {property: 'og:site', content: '@edd83'},
        {property: 'og:creator', content: '@edd83'},
      ]
    }
  },

}, environment);
