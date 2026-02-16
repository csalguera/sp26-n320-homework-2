import { listeningData } from "./data.js";

// ========================================
// TASK 1: Multi-Tier Artist Categorization
// ========================================
function task1ArtistCategorization() {
  // Step 1: Group songs by artist and sum their streams using reduce
  const artistStreams = listeningData.reduce((acc, song) => {
    if (!acc[song.artist]) {
      acc[song.artist] = 0;
    }
    acc[song.artist] += song.streams;
    return acc;
  }, {});

  // Step 2: Map to create tier categories
  const categorizedArtists = Object.entries(artistStreams).map(
    ([artist, totalStreams]) => {
      let tier;
      if (totalStreams >= 10000000) {
        tier = "Platinum";
      } else if (totalStreams >= 5000000) {
        tier = "Gold";
      } else {
        tier = "Silver";
      }

      return { artist, totalStreams, tier };
    },
  );

  // Sort by total streams descending for better readability
  categorizedArtists.sort((a, b) => b.totalStreams - a.totalStreams);

  return categorizedArtists;
}

// ========================================
// TASK 2: Genre Performance Metrics with Engagement Score
// ========================================
function task2GenrePerformanceMetrics() {
  const genreMetrics = listeningData.reduce((acc, song) => {
    if (!acc[song.genre]) {
      acc[song.genre] = {
        songs: [],
        totalStreams: 0,
        totalRating: 0,
        songCount: 0,
      };
    }

    acc[song.genre].songs.push(song);
    acc[song.genre].totalStreams += song.streams;
    acc[song.genre].totalRating += song.rating;
    acc[song.genre].songCount += 1;

    return acc;
  }, {});

  // Transform to calculate averages and engagement score
  const result = {};
  for (const [genre, data] of Object.entries(genreMetrics)) {
    const avgStreams = data.totalStreams / data.songCount;
    const avgRating = data.totalRating / data.songCount;
    const engagementScore =
      Math.round((avgStreams / 1000000) * avgRating * 100) / 100;

    result[genre] = {
      avgStreams: Math.round(avgStreams),
      avgRating: Math.round(avgRating * 100) / 100,
      songCount: data.songCount,
      engagementScore: engagementScore,
    };
  }

  return result;
}

// ========================================
// TASK 3: Peak Performance Window Analysis
// ========================================
function task3PeakPerformanceWindow() {
  const windowSize = 4;
  let maxScore = -Infinity;
  let bestWindow = null;

  // Iterate through all possible 4-song windows
  for (let i = 0; i <= listeningData.length - windowSize; i++) {
    const window = listeningData.slice(i, i + windowSize);

    // Calculate score for this window: (streams / 1000) + (rating × 500)
    const totalScore = window.reduce((sum, song) => {
      return sum + song.streams / 1000 + song.rating * 500;
    }, 0);

    if (totalScore > maxScore) {
      maxScore = totalScore;
      bestWindow = {
        startIndex: i,
        endIndex: i + windowSize - 1,
        songs: window.map((song) => song.title),
        totalScore: Math.round(totalScore),
      };
    }
  }

  return bestWindow;
}

// ========================================
// TASK 4: Cross-Genre Artist Diversity Analysis
// ========================================
function task4CrossGenreArtistDiversity() {
  // Group songs by artist and genre
  const artistGenreData = listeningData.reduce((acc, song) => {
    if (!acc[song.artist]) {
      acc[song.artist] = {};
    }
    if (!acc[song.artist][song.genre]) {
      acc[song.artist][song.genre] = [];
    }
    acc[song.artist][song.genre].push(song);
    return acc;
  }, {});

  // Filter artists with 3+ genres and calculate metrics
  const diverseArtists = Object.entries(artistGenreData)
    .filter(([artist, genres]) => Object.keys(genres).length >= 3)
    .map(([artist, genres]) => {
      const genreNames = Object.keys(genres);

      // Calculate average streams per genre
      const genreAverages = {};
      for (const [genre, songs] of Object.entries(genres)) {
        const avgStreams =
          songs.reduce((sum, song) => sum + song.streams, 0) / songs.length;
        genreAverages[genre] = avgStreams;
      }

      // Find best performing genre
      const [bestGenre, bestGenreAvgStreams] = Object.entries(
        genreAverages,
      ).reduce((max, current) => (current[1] > max[1] ? current : max));

      return {
        artist,
        genres: genreNames,
        genreCount: genreNames.length,
        bestGenre,
        bestGenreAvgStreams: Math.round(bestGenreAvgStreams),
      };
    })
    .sort((a, b) => b.genreCount - a.genreCount);

  return diverseArtists;
}

// ========================================
// TASK 5: Premium Playlist Curation Algorithm
// ========================================
function task5PremiumPlaylistCuration() {
  const topPlaylist = listeningData
    .filter(
      (song) =>
        song.rating >= 4.3 &&
        song.streams >= 2000000 &&
        song.duration >= 180 &&
        song.duration <= 240,
    )
    .map((song) => ({
      ...song,
      qualityScore:
        Math.round((song.rating * 2 + song.streams / 500000) * 100) / 100,
    }))
    .sort((a, b) => b.qualityScore - a.qualityScore)
    .slice(0, 10)
    .map((song) => ({
      title: song.title,
      artist: song.artist,
      qualityScore: song.qualityScore,
    }));

  return topPlaylist;
}

// ========================================
// Display Results in HTML
// ========================================

function displayResults() {
  // Task 1 Results
  const task1Result = task1ArtistCategorization();
  const task1Html = task1Result
    .map(
      (item) =>
        `${item.artist} (${item.tier}): ${item.totalStreams.toLocaleString()} streams`,
    )
    .join("<br>");
  const task1Element = document.getElementById("task1Answer");
  if (task1Element) task1Element.innerHTML = task1Html;

  // Task 2 Results
  const task2Result = task2GenrePerformanceMetrics();
  const task2Html = Object.entries(task2Result)
    .map(
      ([genre, metrics]) =>
        `<strong>${genre.toUpperCase()}</strong>: Avg Streams: ${metrics.avgStreams.toLocaleString()}, Avg Rating: ${metrics.avgRating}, Engagement Score: ${metrics.engagementScore}`,
    )
    .join("<br>");
  const task2Element = document.getElementById("task2Answer");
  if (task2Element) task2Element.innerHTML = task2Html;

  // Task 3 Results
  const task3Result = task3PeakPerformanceWindow();
  const task3Html = `Window [${task3Result.startIndex}-${task3Result.endIndex}]: ${task3Result.songs.join(", ")}<br>Total Score: ${task3Result.totalScore}`;
  const task3Element = document.getElementById("task3Answer");
  if (task3Element) task3Element.innerHTML = task3Html;

  // Task 4 Results
  const task4Result = task4CrossGenreArtistDiversity();
  const task4Html = task4Result
    .map(
      (item) =>
        `<strong>${item.artist}</strong> (${item.genreCount} genres): ${item.genres.join(", ")}<br>Best Genre: ${item.bestGenre} (${item.bestGenreAvgStreams.toLocaleString()} avg streams)`,
    )
    .join("<br><br>");
  const task4Element = document.getElementById("task4Answer");
  if (task4Element) task4Element.innerHTML = task4Html;

  // Task 5 Results
  const task5Result = task5PremiumPlaylistCuration();
  const task5Html = task5Result
    .map(
      (song, index) =>
        `${index + 1}. "${song.title}" - ${song.artist} (Quality Score: ${song.qualityScore})`,
    )
    .join("<br>");
  const task5Element = document.getElementById("task5Answer");
  if (task5Element) task5Element.innerHTML = task5Html;
}

// Wait for DOM to be ready before displaying results
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", displayResults);
} else {
  // DOM is already loaded
  displayResults();
}
