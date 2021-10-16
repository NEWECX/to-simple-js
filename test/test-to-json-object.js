'use strict';

const chai = require('chai');
const to_json_object = require('../src/to-json-object');

const expect = chai.expect;


// to run all tests start with test-
// npm test
// OR
// stage_env=test mocha --reporter spec test/test-to-json-object 

describe('Test to_json_object', () => {

    it('test to_json_object 1', async () => {
        const x = {a: 1, b: '2', c: 'abc'};
        const js = to_json_object(x);
        //console.log(js);
        expect(js).to.be.deep.equals({ a: 1, b: '2', c: 'abc' });
    });

    it('test to_json_object 2', async () => {
        const x = ['a', ''];
        const js = to_json_object(x, true);
        //console.log(js);
        expect(js).to.be.deep.equal([ 'a', '____' ]);
    });

    it('test to_json_object 3', async () => {
        const x = {a: 1, b: '2', c: () => console.log('function')};
        const js = to_json_object(x);
        //console.log(js);
        expect(js).to.be.deep.equals({ a: 1, b: '2', c: '<<<() => console.log(\'function\')>>>' });
    });

});