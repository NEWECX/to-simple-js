'use strict';

const chai = require('chai');
const to_javascript = require('../src/to-javascript');

const expect = chai.expect;


// to run all tests start with test-
// npm test
// OR
// stage_env=test mocha --reporter spec test/test-to-javascript 

describe('Test to_javascript', () => {

    it('test to_javascript 1', async () => {
        const x = {a: 1, b: '2', c: 'abc'};
        const js = to_javascript(x);
        //console.log(js);
        expect(js).equals('{\n  a: 1,\n  b: 2,\n  c: \'abc\'\n}')
    });

    it('test to_javascript 2', async () => {
        const x = {a: 1, b: (x) => console.log(x), c: 'abc'};
        const js = to_javascript(x);
        //console.log(js);
        expect(js).equals('{\n  a: 1,\n  b: (x) => console.log(x),\n  c: \'abc\'\n}')
    });

    it('test to_javascript 3', async () => {
        const x = {a: 1, b: (x) => {
            console.log(x);
        }, c: ''};
        const js = to_javascript(x);
        //console.log(js);
        expect(js).equals('{\n  a: 1,\n  b: (x) => {\n            console.log(x);\n        },\n  c: \'\'\n}')
    });

    it('test to_javascript 4', async () => {
        const x = ['a', ''];
        const js = to_javascript(x);
        //console.log(js);
        expect(js).equals('[\n  \'a\',\n  \'\'\n]');
    });

});