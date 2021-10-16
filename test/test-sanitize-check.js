'use strict';

const chai = require('chai');
const sanitize_check = require('../src/sanitize-check');

const expect = chai.expect;

// to run all tests start with test-
// npm test
// OR
// stage_env=test mocha --reporter spec test/test-sanitize-check 

describe('Test sanitize_check', () => {

    it('test sanitize_check', async () => {
        try {
            sanitize_check('() => { const fs = require(\'fs\'); }' );
        } catch(err) {
            //console.log(err.message);
            expect(err.message).equals('ERROR: sanitize check failed')
        }
    });

});