#!/usr/bin/env node

var nodejs10 = process.versions.node.indexOf('0.10') === 0

console.log(nodejs10)

process.exit(nodejs10 ? 0 : 1)

