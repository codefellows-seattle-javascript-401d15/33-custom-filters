'use strict'

require('./scss/lib/base/reset.css')
require('./scss/lib/base/base.scss')

const path = require('path')
const camelcase = require('camelcase')
const pascalcase = require('pascalcase')
const angular = require('angular')
require('ng-file-upload')
require('@uirouter/angularjs')

const demoApp = angular.module('demoApp', ['ui.router', 'ngFileUpload'])

let context = require.context('./config/', true, /\.js$/)
context.keys().forEach(key => demoApp.config(context(key)))

context = require.context('./view/', true, /\.js$/)
context.keys().forEach(key => {
  let name = pascalcase(path.basename(key, '.js'))
  demoApp.controller(name, context(key))
})

context = require.context('./service/', true, /\.js$/)
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'))
  let module = context(key)
  demoApp.service(name, module)
})

context = require.context('./component/', true, /\.js$/)
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'))
  let module = context(key)
  demoApp.component(name, module)
})

context = require.context('./filter/', true, /\.js$/)
context.keys().forEach(key => demoApp.filter(camelcase(path.basename(key, '.js')), context(key)))
