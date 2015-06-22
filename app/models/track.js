var path = require('path');

function newTrack () {
  return {
    title: '',
    src: '',
    isPlaying: false
  };
};

module.exports.new = newTrack;

module.exports.fromLocation = function(loc) {
  var track = newTrack();
  track.src = loc;
  track.title = path.basename(loc);
  return track;
};
