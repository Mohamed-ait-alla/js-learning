/**
 * Lab: Build a Playlist Remix Engine
 * 
 * Description: In this lab, you will build a program that creates a single remix playlist
 *              from multiple playlists submitted by listeners.
 *              Each listener provides a list of songs they want to hear.
 *              Some songs may appear more than once, and some artists may show up too many times.
 *              Your job is to work through these playlists step by step: combine them into one list,
 *              score each song, remove duplicate songs, limit how often the same artist appears,
 *              and then create a final play order.
 */


// provided playlists
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

// function responsible for returning a single flat array of track objects from a provided 2D array.
function flattenPlaylists(playlists) {
  let flattedPlaylists = [];
  if (!Array.isArray(playlists)) {
    return [];
  }
  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      let source = [i, j];
      playlists[i][j]["source"] = source;
      flattedPlaylists.push(playlists[i][j]);
    }
  }
  return flattedPlaylists;
}

// function responsible for returning  a new array of track objects, each with a score property
// added using the formula: votes * 10 - Math.abs(bpm - 120).
function scoreTracks(tracks) {
  let scoredTracks = [];
  for (let i = 0; i < tracks.length; i++) {
    let score = tracks[i].votes * 10 - Math.abs(tracks[i].bpm - 120);
    tracks[i]["score"] = score;
    scoredTracks.push(tracks[i]);
  }
  return scoredTracks;
}


// function responsible for returning a new array with duplicate trackId entries removed,
// keeping only the first occurrence of each.
function dedupeTracks(tracks) {
  let dedupedTracks = [];
  let trackIds = [];
  for (let i = 0; i < tracks.length; i++) {
    if (!trackIds.includes(tracks[i].trackId)) {
      dedupedTracks.push(tracks[i]);
      trackIds.push(tracks[i].trackId);
    }
  }
  return dedupedTracks;
}

// function responsible for returning a new array where no artist appears more times than the given number, 
// keeping the earliest occurrences.
function enforceArtistQuota(tracks, maxOfOccurrencesPerArtist) {
  let newTracks = [];
  let artistsCheckList = [];
  // initialize all artists with count 0
  for (let i = 0; i < tracks.length; i++) {
    let isArtistAlreadyExist = false;
    for (let j = 0; j < artistsCheckList.length; j++) {
      if (artistsCheckList[j].artist === tracks[i].artist) {
        isArtistAlreadyExist = true;
        break;
      }
    }
    if (!isArtistAlreadyExist) {
      let artistObj = {
        artist: tracks[i].artist,
        count: 0
      }
      artistsCheckList.push(artistObj);
    }
  }
  // process each artist to not appear more times than maxOccurrencesPerArtist argument
  for (let i = 0; i < tracks.length; i++) {
    for (let j = 0; j < artistsCheckList.length; j++) {
      if (tracks[i].artist === artistsCheckList[j].artist) {
        if (artistsCheckList[j].count < maxOfOccurrencesPerArtist) {
          newTracks.push(tracks[i]);
          artistsCheckList[j].count++;
          break;
        }
      }
    }
  }
  return newTracks; 
}

// function responsible for returning a new array of { slot, trackId } objects,
// where slot is a 1-based index representing each track's position in the broadcast order.
function buildSchedule(tracks) {
  let scheduledTracks = [];
  for (let i = 0; i < tracks.length; i++) {
    let trackObj = {
      slot: i + 1,
      trackId: tracks[i].trackId
    }
    scheduledTracks.push(trackObj);
  }
  return scheduledTracks;
}

// function responsible for returning the final broadcast schedule as an array of { slot, trackId } objects,
// by calling 'flattenPlaylists', 'scoreTracks', 'dedupeTracks', 'enforceArtistQuota', and 'buildSchedule' in order.
function remixPlaylist(playlists, maxOfOccurrencesPerArtist) {
  const flatPlaylists = flattenPlaylists(playlists);
  const scoredTracks = scoreTracks(flatPlaylists);
  const dedupedTracks = dedupeTracks(scoredTracks);
  const enforcedTracks = enforceArtistQuota(dedupedTracks, maxOfOccurrencesPerArtist);
  const scheduledTracks = buildSchedule(enforcedTracks);

  return scheduledTracks;
}

console.log(remixPlaylist(playlists, 1));