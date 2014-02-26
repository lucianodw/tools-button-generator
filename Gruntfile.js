'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsbeautifier : {
      app: {
          src : ['app/js/**/*.js']
      },
    },
    sass: {
      options: {
        includePaths: ['app/bower_components/foundation/scss']
      },
      app: {
        options: {
          outputStyle: 'extended'
        },
        files: {
          'app/css/app.css': 'app/scss/app.scss'
        }        
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'app/js/**/*.js'
      ]
    },
    clean: {
      dist: {
        src: ['dist/*']
      },
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd:'app/',
          src: ['**/*.html', '!bower_components/**','**/*.html'],
          dest: 'dist/',
          filter: 'isFile'
        }]
      },
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['sass']
      },
      sass: {
        files: ['app/scss/*.scss','app/scss/modules/*.scss','app/scss/pages/*.scss'],
        tasks: ['sass']
      },
      js : {
        files: ['app/js/**/*.js','app/js/data/*.json'],
        tasks: ['jsbeautifier']
      },
      livereload: {
        files: ['app/*.html', '!app/bower_components/**', 'app/js/**/*.js','app/css/**/*.css', 'app/images/**/*.{jpg,gif,svg,jpeg,png}'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      app: {
        options: {
          port: 9000,
          base: 'app/',
          livereload: true
        }
      }
    },
    sftp: {
      test: {
        files: {
          "./app" : ["index.html","/js/*.js","/bower_components/**"]
        },
        options: {
          path: '/home/web_prototypes/prototypes.atgwebtools.com/zulu',
          host: 'bulldog.dreamhost.com',
          username: 'web_prototypes',
          password: '6cNmiQhW',
          showProgress: true
        }
      }
    },
    scp: {
      options: {
          host: 'bulldog.dreamhost.com',
          username: 'web_prototypes',
          password: '6cNmiQhW',
      },
      app: {
          files: [{
              cwd: './',
              src: ['app/js/*.js','app/css/*.css','app/*.html','app/js/data/**','app/views/*.html','app/partials/*.html'],
              filter: 'isFile',
              dest: '/home/web_prototypes/prototypes.atgwebtools.com/ ** Enter Directory Here **'
          }]
      },
      images: {
          files: [{
              cwd: './',
              src: ['app/images/**'],
              filter: 'isFile',
              dest: '/home/web_prototypes/prototypes.atgwebtools.com/ ** Enter Directory Here **'
          }]
      },
      bower : {
        files: [{
              cwd: './',
              src: ['app/bower_components/**'],
              filter: 'isFile',
              dest: '/home/web_prototypes/prototypes.atgwebtools.com/ ** Enter Directory Here **'
          }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-ssh');
  grunt.loadNpmTasks('grunt-scp');

  grunt.registerTask('watch-dev', ['dev','connect:app','watch']);
  grunt.registerTask('dev', ['jsbeautifier','sass']);

  grunt.registerTask('deploy-app', ['scp:app']);
  grunt.registerTask('deploy-images', ['scp:images']);
  grunt.registerTask('deploy-bower', ['scp:bower']);
}