# Proxy to String

[![Build Status](https://travis-ci.com/Ganevru/proxy-to-string.svg?branch=master)](https://travis-ci.com/Ganevru/proxy-to-string)
[![npm](https://img.shields.io/npm/v/proxy-to-string.svg?style=flat-square)](http://npm.im/proxy-to-string)

Creating a proxy string from objects.

```
npm i proxy-to-string
```

Examples:

```{js}
const proxyToString = require('proxy-to-string')
proxyToString({
  protocol: 'https',
  ipAddress: '123.123.2.42',
  port: '8080',
  login: 'superLogin',
  password: 'superPassword'
  })

// return this:
'https://123.123.2.42:8080@superLogin:superPassword'
```

If you want the login and password to go at the beginning, just put `loginPassFirst: true`

```{js}
const proxyToString = require('proxy-to-string')
proxyToString({
  protocol: 'https',
  ipAddress: '123.123.2.42',
  port: '8080',
  login: 'superLogin',
  password: 'superPassword',
  loginPassFirst: true
  })

// return this:
'https://superLogin:superPassword@123.123.2.42:8080'
```

If your login and password looks like this: `superLogin:superPassword` or/and your ip address: `123.123.2.42: 8080` then use `loginPassword` and/or `ipAddressPort`. These options are always in priority.

```{js}
const proxyToString = require('proxy-to-string')
proxyToString({
  protocol: 'https',
  loginPassword: 'superLogin:superPassword',
  ipAddressPort: '123.123.2.42:8080',
  })

// return this:
'https://123.123.2.42:8080@superLogin:superPassword'
```

You can ignore any options, and, say, leave only `ipAddress` and `port`

```{js}
const proxyToString = require('proxy-to-string')
proxyToString({
  ipAddress: '123.123.2.42',
  port: '8080'
  })

// return this:
'123.123.2.42:8080'
```
