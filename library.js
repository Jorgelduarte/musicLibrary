var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var i in library.playlists) {
    var playlists = library.playlists[i];
    var id = playlists.id;
    var name = playlists.name;
    var trackCount = playlists.tracks.length;
  
    console.log(`${id}: ${name} - ${trackCount} tracks`);
    }
  }


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


var printTracks = function () {
  for (var i in library.tracks) {
    var tracks = library.tracks[i];
    var id = tracks.id;
    var name = tracks.name;
    var artist = tracks.artist;
    var album = tracks.album;
  
    console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  }


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  var id = playlist.id;
  var name = playlist.name;
  var trackCount = playlist.tracks.length;

  console.log(`${id}: ${name} - ${trackCount} tracks`);

for (var i in playlist.tracks) {
  var tracks = playlist.tracks[i];
  var tracker = library.tracks[tracks];
  var id = tracker.id;
  var name = tracker.name;
  var artist = tracker.artist;
  var album = tracker.album;

  console.log(`${id}: ${name} by ${artist} (${album})`);
  }
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var addTrack = library.playlists[playlistId].tracks;
  addTrack.push(trackId);
  var playlist = library.playlists[playlistId];
  var id = playlist.id;
  var name = playlist.name;
  var trackCount = playlist.tracks.length;

  console.log(`${id}: ${name} - ${trackCount} tracks`);

for (var i in playlist.tracks) {
  var tracks = playlist.tracks[i];
  var tracker = library.tracks[tracks];
  var id = tracker.id;
  var name = tracker.name;
  var artist = tracker.artist;
  var album = tracker.album;

  console.log(`${id}: ${name} by ${artist} (${album})`);
  }
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var id = uid();
  library.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album,
  };
  console.log(library);
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var id = uid();
  library.playlists[id] = {
    id: id,
    name: name,
    tracks: [],
  };
  console.log(library);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }