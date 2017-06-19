'use strict';

require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
require('angular-ui-bootstrap');
require('angular-animate');
require('angular-touch');
require('ng-file-upload');
require('@uirouter/angularjs');

const slugram = angular.module('slugram', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngTouch', 'ngFileUpload']);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(path => slugram.config(context(path)));

context = require.context('./view/', true, /\.js$/);
context.keys().forEach(key => slugram.controller(pascalcase(path.basename(key, '.js')), context(key)));

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => slugram.service(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./component/', true, /\.js$/);
context.keys().forEach(key => slugram.component(camelcase(path.basename(key, '.js')), context(key)));

context = require.context('./filter/', true, /\.js$/);
context.keys().forEach(key => slugram.filter(camelcase(path.basename(key, '.js')), context(key)));
