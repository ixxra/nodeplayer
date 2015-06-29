var spawn = require('child_process').spawn;

function parse(info) {
  var lines = info.split('\n').map(function (line){
    return line.trim();
  }).filter(function (line) {
    return line.length > 0;
  });

  var idx = lines.indexOf('Metadata:') + 1;

  var meta = {};

  lines.slice(idx).map(function (line) {
    var idx = line.indexOf(':');
    var k = line.slice(0,idx).trim();
    var v = line.slice(idx + 1).trim();
    if (v.length > 0){
      meta[k] = v;
    }
  });

  return meta;
}


function readMetadata(fname, callback){
  var chunks = [];

  var ffprobe = spawn('ffprobe', ['-hide_banner', fname]);
  ffprobe.stderr.on('data', function(data){
    chunks.push(data.toString());
  });

  ffprobe.stderr.on('end', function (){
    var info = chunks.join('');
    callback(parse(info));
  });
};

module.exports.readMetadata = readMetadata;
