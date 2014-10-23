(function() {
  var lib, merge;

  merge = require('utils-merge');

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
        merge(options, injectingOptions);
        return app._render.call(app, name, options, fn);
      };
    }
  };

  module.exports = lib;

}).call(this);
