define(function (require, exports, module) {
    var Marionette = require('marionette')
    var DocView = require('app/item-views/DocView').DocView
    var Docs = require('app/collections/Docs').Docs
    var template = require('hbs!../templates/docs-view')

    var DocsView = Marionette.CompositeView.extend({
        tagName: 'nav',
        id: 'documents',
        childView: DocView,
        template: template,
        events: {
            'keyup #search': 'searchEvent'
        },
        initialize: function(options) {
            this.collection = new Docs()
            this.master = options.collection
            this.listenTo(this.master, 'add', function() {
                this.collection.set(this.master.models)
            })
        },
        searchEvent: function(event) {
            var query = event.currentTarget.value
            if (query !== '') {
                this.collection.set(this.master.searchDocs(query))
            } else {
                this.collection.set(this.master.models)
            }
        }
    })

    exports.DocsView = DocsView
})
