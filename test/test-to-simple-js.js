'use strict';

const chai = require('chai');
const to_simple_js = require('../src/to-simple-js');

const expect = chai.expect;

// to run all tests start with test-
// npm test
// OR
// stage_env=test mocha --reporter spec test/test-to-simple-js 

describe('Test to-simple-js', () => {

    it('test to-simple-js 1', async () => {
        const object = [  { x: 1} ];
        const result = to_simple_js('test', object);
        //console.log(result);
        expect(result).equals('\'use strict\';\n\nconst test = [\n  {\n    x: 1\n  }\n];\n\nmodule.exports = test;');
        
    });

    it('test to-simple-js 2', async () => {
        const object = [
            {
                x: 1,
                y: (a) => console.log(a),
            },
            {
                x: 2,
                y: (a) => console.log(a),
            }
        ];
        const result = to_simple_js('test', object);
        //console.log(result);
        expect(result).equals('\'use strict\';\n\nconst test = [\n  {\n    x: 1,\n    y: (a) => console.log(a)\n  },\n  {\n    x: 2,\n    y: (a) => console.log(a)\n  }\n];\n\nmodule.exports = test;')
    });

    it('test to-simple-js 3', async () => {
        const object = [
            {
                x: 1,
                y: (a) => console.log(a),
            },
            {
                x: 2,
                y: (a) => console.log(a),
            }
        ];
        const result = to_simple_js('test', object, [{starting: 1, replacement: '\n// insert comment'}]);
        //console.log(result);
        expect(result).equals('\'use strict\';\n\n// insert comment\n\nconst test = [\n  {\n    x: 1,\n    y: (a) => console.log(a)\n  },\n  {\n    x: 2,\n    y: (a) => console.log(a)\n  }\n];\n\nmodule.exports = test;')
    });

    it('test to-simple-js 4', async () => {
        const object = [
            {
                x: 1,
                y: (a) => console.log(a),
            },
            {
                x: 2,
                y: (a) => console.log(a),
            }
        ];
        const result = to_simple_js('test', object, [{starting: '    x', replacement: ' // x'}]);
        //console.log(result);
        expect(result).equals('\'use strict\';\n\nconst test = [\n  {\n // x: 1,\n    y: (a) => console.log(a)\n  },\n  {\n // x: 2,\n    y: (a) => console.log(a)\n  }\n];\n\nmodule.exports = test;')
    });

    it('test to-simple-js 5', async () => {
        const object = [
{
    x: 1,
    y: (a) => {
        console.log(a);
        console.log();
    }
},
{
    x: 2,
    y: (a) => {
        console.log(a)
    }
}
];
        const result = to_simple_js('test', object);
        //console.log(result);
        expect(result).equals('\'use strict\';\n\nconst test = [\n  {\n    x: 1,\n    y: (a) => {\n        console.log(a);\n        console.log();\n    }\n  },\n  {\n    x: 2,\n    y: (a) => {\n        console.log(a)\n    }\n  }\n];\n\nmodule.exports = test;')
    });

    it('test to-simple-js 6', async () => {
        const object = [
{
    x: 1,
    y: (a) => {
        console.log(a);
        console.log();
    }
},
{
    x: 2,
    y: (a) => {
        console.log(a)
    }
},
''
];
        const comments = [{starting: '    y:', replacement: '/*  block commenting', end: '    }'}];
        const result = to_simple_js('test', object, comments);
        //console.log(result);
        expect(result).equals('\'use strict\';\n\nconst test = [\n  {\n    x: 1,\n/*  block commenting\n    y: (a) => {\n        console.log(a);\n        console.log();\n    }\n*/\n  },\n  {\n    x: 2,\n/*  block commenting\n    y: (a) => {\n        console.log(a)\n    }\n*/\n  },\n  \'\'\n];\n\nmodule.exports = test;')
    });

});