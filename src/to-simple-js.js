'use strict';

const to_javascript = require('./to-javascript');
const commenting = require('./commenting');

function to_simple_js(name, object, comments) {
    const variable_name = name.replace(/-/g, '_');
    const javascript = to_javascript(object)
    let js = '\'use strict\';\n\n';
    js += `const ${variable_name} = ${javascript};\n\n`;
    js += `module.exports = ${variable_name};`;
    if (comments) {
        js = commenting(js, comments)
    }
    return js;
}

module.exports = to_simple_js;