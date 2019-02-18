// wdio.dev.config.js
const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {

	logLevel: 'debug',
    services: ['selenium-standalone'],
    seleniumLogs: './selenium-logs'

}, { clone: false });