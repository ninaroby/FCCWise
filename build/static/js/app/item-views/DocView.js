define(function(require, exports, module) {
    var Marionette = require('marionette')
    var template = require('hbs!../templates/docs')

    var DocView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'docs',
        template: template,
        initialize: function() {

        }
    })

    exports.DocView = DocView
})
