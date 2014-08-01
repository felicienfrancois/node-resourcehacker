'use strict';
module.exports = function(grunt) {

	grunt.registerMultiTask('resourcehacker', 'Node wrapper to edit windows executable resources', function() {
		var resHacker = require("../lib/ResHacker.js");
		var done = this.async();
		resHacker(this.data.command, function(error) {
			done(!error);
		});
	});

};
