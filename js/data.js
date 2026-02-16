// StreamBeats Analytics Dashboard - Dummy Data
// 30 Songs across 6 Genres with varied artists

export const listeningData = [
  // Pop Genre (5 songs)
  {
    title: "Sunset Dreams",
    artist: "Luna Ray",
    genre: "pop",
    streams: 4200000,
    rating: 4.7,
    duration: 210,
  },
  {
    title: "Neon Lights",
    artist: "Luna Ray",
    genre: "pop",
    streams: 3800000,
    rating: 4.5,
    duration: 195,
  },
  {
    title: "City Hearts",
    artist: "Max Sterling",
    genre: "pop",
    streams: 5100000,
    rating: 4.6,
    duration: 225,
  },
  {
    title: "Dancing Shadows",
    artist: "Aria Chen",
    genre: "pop",
    streams: 2900000,
    rating: 4.4,
    duration: 200,
  },
  {
    title: "Summer Vibes",
    artist: "Aria Chen",
    genre: "pop",
    streams: 6200000,
    rating: 4.8,
    duration: 215,
  },

  // Rock Genre (5 songs)
  {
    title: "Thunder Roads",
    artist: "The Rebels",
    genre: "rock",
    streams: 3400000,
    rating: 4.3,
    duration: 245,
  },
  {
    title: "Breaking Free",
    artist: "The Rebels",
    genre: "rock",
    streams: 4100000,
    rating: 4.5,
    duration: 230,
  },
  {
    title: "Electric Storm",
    artist: "Luna Ray",
    genre: "rock",
    streams: 2700000,
    rating: 4.2,
    duration: 255,
  },
  {
    title: "Midnight Run",
    artist: "Jake Rivers",
    genre: "rock",
    streams: 3900000,
    rating: 4.6,
    duration: 220,
  },
  {
    title: "Rebel Heart",
    artist: "Jake Rivers",
    genre: "rock",
    streams: 5200000,
    rating: 4.7,
    duration: 235,
  },

  // Hip-Hop Genre (5 songs)
  {
    title: "Flow State",
    artist: "MC Dynamo",
    genre: "hip-hop",
    streams: 7800000,
    rating: 4.8,
    duration: 190,
  },
  {
    title: "Street Poet",
    artist: "MC Dynamo",
    genre: "hip-hop",
    streams: 6500000,
    rating: 4.6,
    duration: 205,
  },
  {
    title: "Golden Era",
    artist: "Lyric Master",
    genre: "hip-hop",
    streams: 4200000,
    rating: 4.4,
    duration: 210,
  },
  {
    title: "Rhythm & Truth",
    artist: "Lyric Master",
    genre: "hip-hop",
    streams: 5600000,
    rating: 4.7,
    duration: 198,
  },
  {
    title: "Urban Legends",
    artist: "Max Sterling",
    genre: "hip-hop",
    streams: 3800000,
    rating: 4.3,
    duration: 215,
  },

  // Electronic Genre (5 songs)
  {
    title: "Digital Dreams",
    artist: "Synth Wave",
    genre: "electronic",
    streams: 5900000,
    rating: 4.5,
    duration: 188,
  },
  {
    title: "Neon Pulse",
    artist: "Synth Wave",
    genre: "electronic",
    streams: 6700000,
    rating: 4.7,
    duration: 192,
  },
  {
    title: "Cyber City",
    artist: "Aria Chen",
    genre: "electronic",
    streams: 4500000,
    rating: 4.4,
    duration: 205,
  },
  {
    title: "Future Beats",
    artist: "DJ Nova",
    genre: "electronic",
    streams: 8100000,
    rating: 4.9,
    duration: 195,
  },
  {
    title: "Voltage",
    artist: "DJ Nova",
    genre: "electronic",
    streams: 7200000,
    rating: 4.6,
    duration: 200,
  },

  // R&B Genre (5 songs)
  {
    title: "Smooth Operator",
    artist: "Velvet Voice",
    genre: "r&b",
    streams: 3200000,
    rating: 4.5,
    duration: 220,
  },
  {
    title: "Midnight Groove",
    artist: "Velvet Voice",
    genre: "r&b",
    streams: 4600000,
    rating: 4.7,
    duration: 235,
  },
  {
    title: "Soul Fire",
    artist: "Luna Ray",
    genre: "r&b",
    streams: 2800000,
    rating: 4.3,
    duration: 210,
  },
  {
    title: "Love Language",
    artist: "Aria Chen",
    genre: "r&b",
    streams: 5400000,
    rating: 4.8,
    duration: 225,
  },
  {
    title: "Feel The Vibe",
    artist: "Max Sterling",
    genre: "r&b",
    streams: 3900000,
    rating: 4.4,
    duration: 215,
  },

  // Indie Genre (5 songs)
  {
    title: "Whispering Pines",
    artist: "Forest Echo",
    genre: "indie",
    streams: 1900000,
    rating: 4.6,
    duration: 240,
  },
  {
    title: "Coffee Shop Tales",
    artist: "Forest Echo",
    genre: "indie",
    streams: 2100000,
    rating: 4.4,
    duration: 225,
  },
  {
    title: "Vintage Memories",
    artist: "The Wanderers",
    genre: "indie",
    streams: 1600000,
    rating: 4.2,
    duration: 235,
  },
  {
    title: "Paper Planes",
    artist: "The Wanderers",
    genre: "indie",
    streams: 2400000,
    rating: 4.5,
    duration: 220,
  },
  {
    title: "Golden Hour",
    artist: "Luna Ray",
    genre: "indie",
    streams: 3100000,
    rating: 4.7,
    duration: 215,
  },
];

// Data Statistics Summary
console.log("=== StreamBeats Data Overview ===");
console.log("Total Songs:", listeningData.length);
console.log(
  "Unique Artists:",
  [...new Set(listeningData.map((s) => s.artist))].length,
);
console.log(
  "Genres:",
  [...new Set(listeningData.map((s) => s.genre))].join(", "),
);
console.log(
  "Stream Range:",
  Math.min(...listeningData.map((s) => s.streams)).toLocaleString(),
  "to",
  Math.max(...listeningData.map((s) => s.streams)).toLocaleString(),
);
console.log(
  "Rating Range:",
  Math.min(...listeningData.map((s) => s.rating)),
  "to",
  Math.max(...listeningData.map((s) => s.rating)),
);
console.log(
  "Duration Range:",
  Math.min(...listeningData.map((s) => s.duration)),
  "to",
  Math.max(...listeningData.map((s) => s.duration)),
  "seconds",
);
