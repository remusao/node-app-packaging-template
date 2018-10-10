A minimal quick starter providing minimal configuration to package your Node.js projects into various artifacts:

* Minified bundle.
* Self-contained executable (also has Node.js built-in).
* Docker container.

Choose the section corresponding to the kind of artifact you want to produce:

### Minified Javascript Bundle

```sh
$ npm install
$ npm run bundle
```

(Additionally, you can use `npm run bundle-dev` and `npm run bundle-watch` to
get faster builds and a watch-mode).

Output: `bundle.min.js` (commonjs format).

Running the app: `node bundle.min.js`.

### Self-Contained Executable

```sh
$ npm install
$ npm run bin
```

Output: `app`.

Running the app: `./app`

### Docker Container

```sh
$ npm install
$ npm run bin
$ docker build -t app-nexe . -f Dockerfile
```

Output: A Docker image named `app` with base-size of `41MB`.

Running the app: `docker run app-nexe ./app`
