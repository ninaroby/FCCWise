define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Doc = require('app/models/Doc').Doc

    var Docs = Backbone.Collection.extend({
        url: 'static/xhr/DocsList.json',
        model: Doc,
        parse: function(response) {
            return response.docs
        },
        searchDocs: function(query) {
            var pattern = new RegExp(query, 'ig')
            return this.filter(function(Doc) {
                return pattern.test(Doc.get('name'))
            })
        }
    })

    exports.Docs = Docs
})
