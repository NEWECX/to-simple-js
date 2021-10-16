'use strict';

const prohibited_keywords = 'require|import|process|fs|os|global|window|__|fetch|http|export|module';

function sanitize_check(x) {
    const regex = new RegExp(prohibited_keywords);
    if (regex.test(x)) {
        throw new Error('ERROR: sanitize check failed');
    }
}

module.exports = sanitize_check;
