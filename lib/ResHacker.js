'use strict';

var path = require('path');
var spawn = require('child_process').spawn;

module.exports = function(command, callback) {
	var cmdLine = path.resolve(__dirname, '..', 'bin', 'ResHacker.exe');
	
	if (!command || !command.length) {
		throw new Error("command must be an array");
	}
	
	if (process.platform !== "win32") {
		command.unshift(cmdLine);
		cmdLine = "wine";
	}

	var child = spawn(cmdLine, command);
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
	var stderr = '';
	child.on('error', function(err) {
		if (callback) {
			callback(err);
		}
	});
	child.stderr.on('data', function(data) {
		stderr += data;
	});
	child.on('close', function(code) {
		if (code === 0) {
			if (callback) {
				callback(null);
			}
		} else {
			if (callback) {
				callback(stderr);
			}
		}
	});
};