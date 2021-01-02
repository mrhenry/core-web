'use strict';

const generateLanding = require('./landing/landing');
const generateBrowserCompat = require('./browser-compat/browser-compat');
const generateE2E = require('./e2e/e2e');

generateLanding();
generateBrowserCompat();
generateE2E();
