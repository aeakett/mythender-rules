

module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uncss: {
         dist: {
            src: ['dist/404.htm',
                  'dist/corruption_and_fate.htm',
                  'dist/extras.htm',
                  'dist/mythender_fates.htm',
                  'dist/mythender_pasts.htm',
                  'dist/thanks_and_acknowledgements.htm',
                  'dist/what_is_mythender.htm',
                  'dist/battling_myths_and_gods.htm',
                  'dist/creating_your_mythender.htm',
                  'dist/index.htm',
                  'dist/mythender_hearts.htm',
                  'dist/mythic_norden.htm',
                  'dist/tutorial_battle.htm',
                  'dist/what_you_need_to_play.htm',
                  'dist/being_a_mythmaster.htm',
                  'dist/extended_rules.htm',
                  'dist/murdering_one_another.htm',
                  'dist/mythender_moments.htm',
                  'dist/playing_adventures.htm',
                  'dist/your_hearts_gifts.htm'],
            dest: 'css/pruned.css',
            options: {
               report: 'min' // optional: include to report savings
            }
         }
      },
      cssmin: {
         minify: {
            src: 'css/pruned.css',
            dest: 'dist/css/app.css'
         }
      },
      clean: ['css/pruned.css']
   });

   grunt.loadNpmTasks('grunt-uncss');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

   // Default task(s).
   grunt.registerTask('default', ['uncss', 'cssmin', 'clean']);
};
