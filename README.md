# thumbnail-generator

## Description

A JSON-based REST API service which resizes images into 100x100px thumbnails

## API List

### GET : /healthCheck

Check whether server is survice

### POST : /createThumbnail

Content-Type: application/json

Sample Request Body
```
{"image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDERXhpZgAATU0AKgAAAAgAAgEyAAIAAAAUAAAAJodpAAQAAAABAAAAOgAAAAAyMDE4OjAxOjI2IDExOjE2OjA1AAAHkAMAAgAAABQAAACUkAQAAgAAABQAAACokpEAAgAAAAQ3MzIAkpIAAgAAAAQ3MzIAoAEAAwAAAAEAAQAAoAIABAAAAAEAAAQAoAMABAAAAAEAAAMAAAAAADIwMTg6MDE6MjYgMTE6MTY6MDUAMjAxODowMToyNiAxMToxNjowNQD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAUABQMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APw5+N//AAUR/Zh1y78LW1h/wTQ/Z50mbR9A0rT7y7k/4QDUJtYltPDXhnTW1C5YfA2xkW7vLjTbrU7ySWW6ae71Odi4dZJbjysKnKEny01dw2eKtdUqcW/97duaUXOyslzWs2nJ1WhaSSnUS95q/I7Jzk1H+HtFaJ9T/9k="}
```

## How to start

```
% docker-compose up
```

## How to test

1. Convert your image intro Base64 string
    - https://www.base64-image.de/
1. Use API Tool (Ex: postman). Put Base64 string in Request body and call /createThumbnail API to get 100x100 thumbnail base64 image
1. After calling /createThumbnail API, we will get the base64 string response. You can use some online tool to convert the base64 string into image and check the result.
    - https://codebeautify.org/base64-to-image-converter

# Related Information

## Compare image resize tool

### Jimp vs Sharp

Sharp have more starts and seems more stable than Jimp. However, I meet some problem about sharp and can't solve it in short time so I decide to use Jimp this time.

- https://npmtrends.com/jimp-vs-sharp
- https://stackoverflow.com/questions/46619628/base64-image-resizer-nodejs

### Jimp Sample Code

- https://github.com/oliver-moran/jimp/tree/master/packages/plugin-resize
- https://github.com/oliver-moran/jimp/issues/231
- https://gist.github.com/ASteinheiser/31fcbe960914abfca0b1387338fbc76d
- https://stackoverflow.com/questions/52400486/error-cropping-a-base64-format-image-using-jimp-package-in-nodejs


## How many ways which you send image in an API POST request

- https://nimesha-dilini.medium.com/send-image-files-in-an-api-post-request-aa1af1c4a7fb
- https://stackoverflow.com/questions/16015548/how-to-send-multipart-form-data-request-using-postman/16022213#16022213

### Example : using Multipart 

- https://github.com/FlyRayTsou/thumbnail-generator/pull/3

## Error Handling

### node version

Use nvm to switch node version by project.

- https://tecadmin.net/install-nvm-macos-with-homebrew/

### PayloadTooLargeError: request entity too large

If we tried to transfer big image by base64 string, we may meet this error. We can set size limit.

- https://stackoverflow.com/questions/68686118/node-express-payloadtoolargeerror-request-entity-too-large

### env: node: No such file or directory

- https://stackoverflow.com/questions/43465086/env-node-no-such-file-or-directory-in-mac

### Sharp Error

It seems like that there are some problem about platform and arch.

Even I tried `yarn install --target_platform=linux --npm_config_arch=x64` but it didn't work.

```
/var/www/app/node_modules/sharp/lib/sharp.js:34
  throw new Error(help.join('\n'));
        ^
Error:
Something went wrong installing the "sharp" module

Cannot find module '../build/Release/sharp-linux-x64.node'
Require stack:
- /var/www/app/node_modules/sharp/lib/sharp.js
- /var/www/app/node_modules/sharp/lib/constructor.js
- /var/www/app/node_modules/sharp/lib/index.js
- /var/www/app/src/controller/MainController.ts
- /var/www/app/src/index.ts

Possible solutions:
- Install with verbose logging and look for errors: "npm install --ignore-scripts=false --foreground-scripts --verbose sharp"
- Install for the current linux-x64 runtime: "npm install --platform=linux --arch=x64 sharp"
- Consult the installation documentation: https://sharp.pixelplumbing.com/install
    at Object.<anonymous> (/var/www/app/node_modules/sharp/lib/sharp.js:34:9)
    at Module._compile (node:internal/modules/cjs/loader:1155:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Object.require.extensions.<computed> [as .js] (/var/www/app/node_modules/ts-node/src/index.ts:1608:43)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12)
    at Module.require (node:internal/modules/cjs/loader:1057:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (/var/www/app/node_modules/sharp/lib/constructor.js:8:1)
    at Module._compile (node:internal/modules/cjs/loader:1155:14)
```

- https://github.com/lovell/sharp/issues/2312
- https://github.com/lovell/sharp/issues/2340
- https://github.com/yarnpkg/yarn/issues/2221
- https://github.com/netlify/next-runtime/issues/1297