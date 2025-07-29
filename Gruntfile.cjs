module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // For ES Module projects
    env: {
      dev: {
        NODE_ENV: 'development'
      }
    },
    
    // Define a simple task to run npm build
    shell: {
      options: {
        stderr: false
      },
      npmBuild: {
        command: 'npm run build:github'
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-env');

  // Register default task
  grunt.registerTask('default', ['env:dev', 'shell:npmBuild']);
};
