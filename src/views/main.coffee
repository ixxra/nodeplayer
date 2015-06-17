fs = require 'fs'

Template = './app/partials/helloworld.html'

contents = (fs.readFileSync Template).toString()

module.exports = contents
