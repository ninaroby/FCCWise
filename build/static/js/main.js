define(function (require, exports, module) {
    var Marionette = require('marionette')
    var renderer = require('app/renderer')
    var app = require('app/app')
    var AppRouter = require('app/app-router').AppRouter

    app.AppRouter = new AppRouter()

    app.on('start', function() {
        console.log('Marionette is a go!')
    })

    $(document).ready(function() {
        app.start()

        $('.hamburger').click(function() {
            $('#slide-out-menu').toggleClass('active')
            if ($('#slide-out-menu').hasClass('active')) {
                $('#slide-out-menu').animate({
                    left: 0
                }, 250)
            } else {
                $('#slide-out-menu').animate({
                    left: '-370px'
                }, 250)
            }
        })

        var header = document.querySelector('header > section')
        window.addEventListener('scroll', function(e) {
            if (this.scrollY > 100) { header.className = 'short'; }
            else header.className = ''
        })
    })
})
