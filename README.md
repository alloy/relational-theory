### Development environment

* Rather than restart the full server process, which is often done with tools like `nodemon`, this project only reloads
  the files in `./app` when FS changes occur.

* In addition, webpack is configured to dynamically host client sources, meaning that these will also automatically be
  recompiled when FS changes occur.

* Finally, webpack is configured to notify the client of changes to sources which then fetches the updated sources and
  triggers a re-render of the React components that are on screen.

This setup is largely based on https://github.com/glenjamin/ultimate-hot-reloading-example.
