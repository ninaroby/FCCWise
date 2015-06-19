define(function (require, exports, module) {
    var Backbone = require('backbone')
    var Marionette = require('marionette')
    var app = require('app/app')
    var $ = require('jquery')

    // template requires here

    // collection requires here
    var Docs = require('app/collections/Docs').Docs

    // collection view requires here
    var DocsView = require('app/collection-views/DocsView').DocsView

    var AppController = Marionette.Controller.extend({
        initialize: function(options) {
            this.app = app
            this.app.collection = new Docs()
            this.app.collection.fetch()
        },
        // events: {
        //     'click ': ''
        // },
        index: function() {
            // templates for app.{{region}}.show(new {{region}}())
            this.app.mainRegion.show(new DocsView({
                collection: this.app.collection
            }))
            // console.log(this.app.collection.models)
        }
    })

    exports.AppController = AppController
})
