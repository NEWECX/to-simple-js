'use strict';

const json_beautifier = require('csvjson-json_beautifier');
const to_json_object = require('./to-json-object');

function to_json_js(object) {
    const result = json_beautifier(to_json_object(object, true), {
        dropQuotesOnKeys: true, dropQuotesOnNumbers: true, 
        inlineShortArrays: 1, quoteType: 'single', space: 2, minify: false
    });
    return result.replace(/____/g, '');
}

module.exports = to_json_js;