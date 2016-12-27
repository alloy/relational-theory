### About

These are some experiments with using React and Relay for both server and client side rendering.

### Setup

```
$ npm install yarn -g
$ yarn install
```

Then start the development server with:

```
$ yarn start
```

### Development environment

* Rather than restart the full server process, which is often done with tools like `nodemon`, this project only reloads
  the files in `./app` when FS changes occur.

* In addition, webpack is configured to dynamically host client sources, meaning that these will also automatically be
  recompiled when FS changes occur.

* Finally, webpack is configured to notify the client of changes to sources which then fetches the updated sources and
  triggers a re-render of the React components that are on screen.

This setup is largely based on https://github.com/glenjamin/ultimate-hot-reloading-example.

### TODO

* Take a look at react-native-web, how well it works, and if it would make sharing our components across platforms
  possible out of the box.

### Notes

* In order for `react-hot-loader` to be able to reload components and maintain their current state, rather than a page
  reload, the components have to be exported themselves, not just the Relay wrapper container
  ([more info](https://github.com/fortruce/relay-skeleton/issues/1)). E.g.

```js
export class Artist extends React.component {
  ...
}

export default Relay.createContainer(Artist, {
  ...
})
```
