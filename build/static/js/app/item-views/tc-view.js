define(function (require, exports, module) {
    var Marionette = require('marionette')
    var template = require('hbs!../templates/tc')

    var TC = Marionette.ItemView.extend({
        tagName: 'section',
        template: template,
        initialize: function() {}
    })

    exports.TC = TC
})
