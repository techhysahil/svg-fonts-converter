module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
		icons: {
			src: 'icons/*.svg',
			dest: 'dist',
			destCss: 'dist',
			destScss: 'dist/scss',
			destLess: 'dist/less',
			options: {
				hashes: true,
				fontFilename: 'icons-{hash}',
				stylesheets: ['css', 'scss','less'],
				htmlDemo: true
				
			}
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['webfont']);

};