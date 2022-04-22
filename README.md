# electron-windows

[![NPM version][npm-image]][npm-url]
[![CI][CI-image]][CI-url]
[![Test coverage][codecov-image]][codecov-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/electron-windows.svg
[npm-url]: https://npmjs.org/package/electron-windows
[CI-image]: https://github.com/electron-modules/electron-windows/actions/workflows/ci.yml/badge.svg
[CI-url]: https://github.com/electron-modules/electron-windows/actions/workflows/ci.yml
[codecov-image]: https://img.shields.io/codecov/c/github/electron-modules/electron-windows.svg?logo=codecov
[codecov-url]: https://codecov.io/gh/electron-modules/electron-windows
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/electron-windows.svg
[download-url]: https://npmjs.org/package/electron-windows

> Manage multiple windows of Electron gracefully and provides powerful features.

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/12660278?v=4" width="100px;"/><br/><sub><b>ColaDaddyz</b></sub>](https://github.com/ColaDaddyz)<br/>|[<img src="https://avatars.githubusercontent.com/u/17586742?v=4" width="100px;"/><br/><sub><b>sriting</b></sub>](https://github.com/sriting)<br/>|[<img src="https://avatars.githubusercontent.com/u/52845048?v=4" width="100px;"/><br/><sub><b>snapre</b></sub>](https://github.com/snapre)<br/>|
| :---: | :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Fri Apr 22 2022 14:19:28 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## Installment

```bash
$ npm i electron-windows --save
```

## Demo

![](./sceenshot.png)

## APIs

### init

```javascript
const WindowManager = require('electron-windows');
const windowManager = new WindowManager();
```

### create

```javascript
const winRef = windowManager.create({
  name: 'window1',
  loadingView: {
    url: '',
  },
  browserWindow: {
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    title: 'demo',
    show: false,
    webPreferences: {
      nodeIntegration: app.isDev,
      webSecurity: true,
      webviewTag: true,
    },
  },
  openDevTools: true,
});
```

## TODO

- [ ] support storage of window's size and other configuration
- [ ] clone pointed window

## License

The MIT License (MIT)
