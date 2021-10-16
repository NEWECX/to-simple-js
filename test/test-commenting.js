'use strict';

const chai = require('chai');
const commenting = require('../src/commenting');

const expect = chai.expect;

// to run all tests start with test-
// npm test
// OR
// stage_env=test mocha --reporter spec test/test-commenting 

describe('Test commenting', () => {

    it('test commenting 1', async () => {
        const javascript = '[\n  {\n   x: 1\n  }\n]';
        const comments = [{starting: '   x:', replacement: ' // x:'}]
        const result = commenting(javascript, comments);
        //console.log(result);
        expect(result).equals('[\n  {\n // x: 1\n  }\n]')
    });

    it('test commenting 2', async () => {
        const javascript = '[\n  {\n   x: 1\n  }\n]';
        const comments = [{starting: 1, replacement: '// single line whole comments'}]
        const result = commenting(javascript, comments);
        //console.log(result);
        expect(result).equals('[\n// single line whole comments\n  {\n   x: 1\n  }\n]')
    });

    it('test commenting 3', async () => {
        const javascript = '[\n  {\n   x: 1\n  }\n]';
        const comments = [{starting: '  {', end: '  }', replacement: '/* start'}]
        const result = commenting(javascript, comments);
        //console.log(result);
        expect(result).equals('[\n/* start\n  {\n   x: 1\n  }\n*/\n]')
    });

    it('test commenting 4', async () => {
        const javascript = '[\n  {\n   x: 1\n  }\n]';
        const comments = [{starting: '   x:', insert: '// insert comment line'}]
        const result = commenting(javascript, comments);
        //console.log(result);
        expect(result).equals('[\n  {\n// insert comment line\n   x: 1\n  }\n]')
    });

    it('test commenting 5', async () => {
        const javascript = '[\n  {\n   x: 1\n  }\n]';
        const comments = [{starting: '   x:', append: '// append comment line'}]
        const result = commenting(javascript, comments);
        //console.log(result);
        expect(result).equals('[\n  {\n   x: 1\n// append comment line\n  }\n]')
    });
});