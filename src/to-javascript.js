'use strict';

const to_json_js = require('./to-json-js');

function to_javascript(object) {
    return to_json_js(object).replace(/____/g, '').replace(/'<<</g, '').replace(/>>>'/g, '').replace(/\\n/g, '\n');
}

module.exports = to_javascript;