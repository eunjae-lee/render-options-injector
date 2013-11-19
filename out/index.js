(function() {
  var connect, lib, utils;

  connect = require('connect');

  utils = connect.utils;

  lib = {
    inject: function(app, injectingOptions) {
      app._render = app.render;
      return app.render = function(name, options, fn) {
        if ('function' === typeof options) {
          fn = options;
          options = {};
        }
        if (!options) {
          options = {};
        }
        utils.merge(options, injectingOptions);
        return app._render.call(app, name, options, fn);
      };
    }
  };

  module.exports = lib;

}).call(this);
