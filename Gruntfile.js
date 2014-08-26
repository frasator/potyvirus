module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsopkg: grunt.file.readJSON('lib/jsorolla/package.json'),
        def: {
            name: 'potyvirus',
            build: 'build/<%= pkg.version %>',
            jsorolla: 'lib/jsorolla'
        },
        concat: {
            dist: {
                src: [
                    'src/potyvirus.js'
                ],
                dest: '<%= def.build %>/<%= def.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= def.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%= def.build %>/<%= def.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        copy: {
            dist: {
                files: [

                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/underscore-min.js'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/backbone-min.js'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/jquery.min.js'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/font-awesome-4.1.0/**'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/d3.min.js'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/three.min.js'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/platform.js'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/ext-5/**'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/highcharts/**'], dest: '<%= def.build %>' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['styles/**'], dest: '<%= def.build %>' }, // includes files in path and its subdirs
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['src/lib/components/jso-color-picker.html'], dest: '<%= def.build %>/components', flatten: true},
                    {   expand: true, cwd: './', src: ['src/components/**'], dest: '<%= def.build %>/components', flatten: true},
                    {   expand: true, cwd: './src', src: ['*.sif'], dest: '<%= def.build %>/' },
                    {   expand: true, cwd: './src', src: ['*.attr'], dest: '<%= def.build %>/' },

                    {   expand: true, cwd: './<%= def.jsorolla %>/build/<%= jsopkg.version %>/network-viewer', src: ['*.js'], dest: '<%= def.build %>' },

                    {   expand: true, cwd: './<%= def.jsorolla %>/src/network-viewer-webgl', src: ['network-viewer-webgl.js'], dest: '<%= def.build %>' }
                ]
            }
        },
        clean: {
            dist: ['<%= def.build %>/']
        },
        processhtml: {
            options: {
                strip: true
            },
            dist: {
                files: {
                    '<%= def.build %>/index.html': ['src/<%= def.name %>.html']
                }
            }
        },
        hub: {
            'cell-maps': {
                src: ['<%= def.jsorolla %>/Gruntfile.js'],
                tasks: ['nv']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-hub');

    // Default task.
    grunt.registerTask('default', ['hub','clean', 'concat', 'uglify', 'copy', 'processhtml']);

};
