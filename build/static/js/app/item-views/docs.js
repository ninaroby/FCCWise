define(function(require, exports, module) {
    var Marionette = require('marionette')
    var template = require('hbs!../templates/docs')

    var Docs = Marionette.ItemView.extend({
        tagName: 'article',
        className: 'docs',
        template: template,
        initialize: function() {

        }
    })

    exports.Docs = Docs
})
