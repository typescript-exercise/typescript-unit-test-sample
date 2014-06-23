module.exports = function(grunt) {
    // config
    grunt.initConfig({
        appName: 'app',
        typescript: {
            build: {
                src: ['src/main/ts/**/*.ts'],
                dest: 'build/js/<%=appName%>.js',
                options: {
                    declaration: true
                }
            },
            test: {
                src: [
                    'src/test/ts/**/*.ts',
                    'typings/jasmine/jasmine.d.ts',
                    'build/js/<%=appName%>.d.ts'
                ],
                dest: 'build/js/<%=appName%>-test.js'
            }
        },
        uglify: {
            build: {
                src: ['<%= typescript.build.dest %>'],
                dest: 'build/js/<%=appName%>.min.js'
            }
        },
        jasmine: {
            build: {
                src: '<%= uglify.build.dest %>',
                options: {
                    specs: '<%= typescript.test.dest %>',
                    keepRunner: true,
                    junit: {
                        path: 'build/jasmine-test/'
                    }
                }
            }
        },
        clean: ['build']
    });

    // plugin
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    // tasks
    grunt.registerTask('default', ['typescript', 'uglify', 'jasmine']);
};
