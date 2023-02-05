[![npm version](https://badge.fury.io/js/kobokan.svg)](https://badge.fury.io/js/kobokan)

# Kobokan

> a package that you can use to get city weather data in Indonesia

## Table of contents

- [Project Name](#project-name)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
    - [Kobokan](#Kobokan)
  - [Versioning](#versioning)
  - [Authors](#authors)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

Start with install library using yarn or npm:

```sh
$ npm install kobokan
```

Or if you prefer using Yarn:

```sh
$ yarn add kobokan
```

```js
 const Kobokan = require('kobokan')
```

## Usage

Scripts
```js
 Kobokan.then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output
```js
[
    {
        "city": "Banda Aceh",
        "temperature": "26°C",
        "time": "07:00 WIB",
        "image": "https://www.bmkg.go.id/asset/img/icon-cuaca/berawan-am.png",
        "description": "Berawan" 
    },
    {
        "city": "Serang",
        "temperature": "26°C",
        "time": "07:00 WIB",
        "image": "https://www.bmkg.go.id/asset/img/icon-cuaca/cerah berawan-am.png",
        "description": "Cerah Berawan" 
    },
    {
        "city": "Bengkulu",
        "temperature": "24°C",
        "time": "07:00 WIB",
        "image": "https://www.bmkg.go.id/asset/img/icon-cuaca/cerah berawan-am.png",
        "description": "Cerah Berawan" 
    },
    ...[and more]
]
```

## API

### Kobokan

```js
Kobokan()
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ariear/kobokan/tags).

## Authors

* **Arie Akbarull Ridho** - *ariear* - [ariear](https://github.com/ariear)

See also the list of [contributors](https://github.com/ariear/kobokan/contributors) who participated in this project.

