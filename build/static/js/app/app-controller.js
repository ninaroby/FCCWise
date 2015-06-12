define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')
    var app = require('app/app')
    var $ = require('jquery')

    // template requires here

    var AppController = Marionette.Controller.extend({
        initialize: function() {
            this.app = app

            // templates for app.{{region}}.show(new {{region}})
        },
        index: function() {}
    })

    exports.AppController = AppController
})
