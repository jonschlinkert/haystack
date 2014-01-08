/**
 * haystack
 * https://github.com/jonschlinkert/haystack
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

// Node.js
var path = require('path');

// node_modules
var _ = require('lodash');


function toArray(val, sep) {
  sep = sep || '';
  // Optionally define a separator to be used for splitting
  // the given string into an array of strings. If no separator
  // is defined, the string will be evaluated as a single value.
  if (_.isString(val) && sep.length > 0) {val = val.split(sep);}
  return !Array.isArray(val) ? [val] : val;
}

var filter = exports.filter = function(a, b, sep) {
  a = toArray(a, sep);
  b = toArray(b, sep);
  return _.intersection(a, b);
};

var hasMatch = exports.hasMatch = function(a, b, sep) {
  return filter(a, b, sep).length > 0;
};