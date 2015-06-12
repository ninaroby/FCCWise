define(function (require, exports, module) {
    var Marionette = require('marionette')
    var Backbone = require('backbone')

    var FCCWise = Marionette.Application.extend({
        initialize: function(options) {}
    })

    var app = new FCCWise()

    app.addRegions({
        headerRegion: '#headerRegion',
        mainRegion: '#mainRegion',
        footerRegion: '#footerRegion'
    })

    app.addInitializer(function() {
        Backbone.history.start({
            pushState: false
        })
        $.ajaxSetup({
            statusCode: {
                401: function() {
                    window.location.reload()
                }
            }
        })
    })

    return app
})
