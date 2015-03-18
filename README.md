# Symfony Standard Edition RequireJS

## Overview

This repository demonstrates how to use `Symfony` with `RequireJS` in
`Symfony Standard Edition`.

The main purpose of this repository is to demonstrate how to separate the
frontend from the backend. As a result you can simply use `r.js` optimizer
without any additional bundles such as [HearsayRequireJSBundle][1]. All you need
to do is store your JavaScript files into the `web` directory which is
accessible from web and have installed `node.js` with `NPM`.

## Installation

### Install Bower

```sh
npm install bower -g
```

### Install gulp.js

```sh
npm install gulp -g
```

### Install needed node.js packages

```sh
npm install
```

### Install needed JavaScript dependencies via Bower

```sh
bower install
```

### Build your project

```sh
gulp build
```

Enjoy!

[1]: https://github.com/hearsayit/HearsayRequireJSBundle
