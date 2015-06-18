define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')
    var app = require('app/app')
    var $ = require('jquery')

    // template requires here

    var AppController = Marionette.Controller.extend({
        initialize: function() {
            this.app = app
        },
        index: function() {
            // templates for app.{{region}}.show(new {{region}})
        }
    })

    exports.AppController = AppController
})
