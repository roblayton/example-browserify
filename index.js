'use strict';

var utils = require('../example-node-karma-gulp/src/utils');

var arr = [1,2,3,4];
document.write("<p>Original arrays contains: " + arr.join() + "</p>");
document.write("<p>New array contains: " + utils.remove(arr,2).join() + " after using utils.remove()</p>");
