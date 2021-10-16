'use strict';

const sanitize_check = require('./sanitize-check');

function to_json_object(object, replace_empty_string = false) {
    return JSON.parse(JSON.stringify(object, (key, value) => {
        const type = typeof value;
        if (type === 'function') {
            const fvalue = value.toString();
            sanitize_check(fvalue);
            return '<<<' + fvalue + '>>>';
        } else if (replace_empty_string && type === 'string' && value.length === 0) {
            return '____';
        } else {
            return value;
        }
    }));
}

module.exports = to_json_object;