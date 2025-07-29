module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Define a simple task to run npm build
    shell: {
      options: {
        stderr: false
      },
      npmBuild: {
        command: 'npm run build'
      }
    }
  });

  // Load the shell task
  grunt.loadNpmTasks('grunt-shell');

  // Register default task
  grunt.registerTask('default', ['shell:npmBuild']);
};
