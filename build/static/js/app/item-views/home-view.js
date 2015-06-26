define(function (require, exports, module) {
    var Marionette = require('marionette')
    var template = require('hbs!../templates/home')

    var HomeView = Marionette.ItemView.extend({
        template: template,
        initialize: function() {}
    })

    exports.HomeView = HomeView
})
