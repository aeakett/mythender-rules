module.exports = function(grunt) {

grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      //files: {                                   // Dictionary of files
      //  'dist/index.htm': 'dist/index.htm',     // 'destination': 'source'
      //  'dist/extras.htm': 'dist/extras.htm'
      //}
		files: [{
		   expand: true,
			cwd: 'dist',
			src: '**/*.htm',
			dest: 'dist/'
		}]
    }
  }
});


grunt.loadNpmTasks('grunt-contrib-htmlmin');

grunt.registerTask('default', ['htmlmin']);








};