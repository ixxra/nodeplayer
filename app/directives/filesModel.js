var tags = require('tags');
var Track = require('../models/track');


function appendTrack(scope, playlistName, file){
  var track = Track.fromLocation(file);

  tags.readMetadata(file, function join(metadata) {
    for (var prop in metadata){
      if (prop !== 'src'){
        track[prop] = metadata[prop];
      }
    }
    scope.$apply(function (scope) {
      scope[playlistName].push(track);
    });
  });
};

module.exports  = function filesModel(angular) {
  function directive() {
    return function(scope, elm, attrs) {
      elm.on('change', function(event) {
        event.target.value.split(';').forEach(function (file) {
          appendTrack(scope, attrs.filesModel, file);
        });
      });
    }
  }

  angular.module('music').directive('filesModel', directive);
};
