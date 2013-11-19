# render-options-injector

A simple library to help injecting render options globally. For example, it can be used when injecting server environment setting value(development, production, test, ...) into all view templates.

# Usage

Setting render-options-injector at app.coffee

    express = require 'express'
    injector = require 'render-options-injector'
    app = express()

    injector.inject app, {'env': app.settings.env, 'or': 'other values'}

    http.createServer(app).listen app.get('port'), ->
        console.log "Express server listening on port #{app.get('port')} in #{app.settings.env} mode"
        
And use the options at view templates

    if (env == "development")
        script(src='/javascripts/index.js')
    else
        script(src='/javascripts/index.min.js')

        
# Warning

render-options-injector reassign app.render function(res.render calls app.render).


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/eunjae-lee/render-options-injector/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

