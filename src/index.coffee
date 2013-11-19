connect = require 'connect'
utils = connect.utils

lib =
  inject: (app, injectingOptions) ->
    app._render = app.render
    app.render = (name, options, fn) ->
      if 'function' == typeof options
        fn = options
        options = {}
      unless options
        options = {}
      utils.merge options, injectingOptions
      app._render.call app, name, options, fn

module.exports = lib