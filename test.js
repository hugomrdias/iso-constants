'use strict';

const nodeC = require('constants');
const test = require('tape');
const c = require('./');

test('equal', (t) => {
    t.deepEqual(nodeC, c);
    t.end();
});

