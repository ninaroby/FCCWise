define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')
    var app = require('app/app')
    var $ = require('jquery')

    // template requires here
    var TC = require('app/item-views/tc').TC

    var AppController = Marionette.Controller.extend({
        initialize: function() {
            this.app = app
        },
        // events: {
        //     'click ': ''
        // },
        index: function() {
            // templates for app.{{region}}.show(new {{region}}())
            this.app.mainRegion.show(new TC())
        }
    })

    exports.AppController = AppController
})
