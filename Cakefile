path = require 'path'
fs = require 'fs'

task 'build', 'Builds All', ->
  invoke('build:js')

task 'build:js', 'Builds render-options-injector', (opts) ->
  CoffeeScript = require 'coffee-script'
  out = opts.output or 'out'
  out = path.join(__dirname, out) unless out[0] = '/'
  fs.mkdir out, (err) ->
    throw err if err
    fs.readFile path.join(__dirname, 'src/index.coffee'), 'utf8', (err, data) ->
      throw err if err
      fs.writeFile path.join(out, 'index.js'), CoffeeScript.compile(data)