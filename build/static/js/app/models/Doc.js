define(function (require, exports, module) {
    var Backbone = require('backbone')

    var Doc = Backbone.Model.extend({
        defaults: {
            name: 'Untitled',
            url: '#'
        },
        initialize: function() {}
    })

    exports.Doc = Doc
})
