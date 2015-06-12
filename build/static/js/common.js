require.config({
    baseUrl: 'static/js',

    paths: {
        'marionette': 'vendor/node_modules/backbone.marionette/lib/backbone.marionette.min'
    },

    packages: [
        {
            location: 'app',
            name: 'app'
        },
        {
            location: 'vendor/node_modules/jquery/dist/',
            name: 'jquery',
            main: 'jquery.min'
        },
        {
            location: 'vendor/node_modules/backbone',
            name: 'backbone',
            main: 'backbone-min'
        },
        {
            location: 'vendor/bower_components/hbs/hbs',
            name: 'hbs',
            main: 'hbs'
        }
    ],

    map: {
        '*': {
            'underscore': 'vendor/bower_components/lodash/lodash.min',
            'handlebars': 'vendor/bower_components/handlebars/handlebars.min'
        }
    },

    hbs: {
        templateExtension: 'html',
        disableI18n: true,
        helperDirectory: 'app/shared/hbs'
    },

    shim: {
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'marionette': {
            'deps': ['jquery', 'underscore', 'backbone'],
            'exports': 'Marionette'
        }
    },

    wrapShim: true,
})
