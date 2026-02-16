# 🎵 Music Streaming Platform Analytics

A comprehensive JavaScript project that analyzes music streaming data using advanced array methods and functional programming techniques.

## Project Overview

This project simulates a data analytics dashboard for **StreamBeats**, a music streaming platform. The application processes listening data across multiple artists and genres to provide meaningful insights for playlist curation, artist performance tracking, and strategic recommendations.

## Features

### Task 1: Multi-Tier Artist Categorization

Categorizes artists into performance tiers based on their total streaming numbers:

- **Platinum**: Total streams ≥ 10,000,000
- **Gold**: Total streams ≥ 5,000,000 and < 10,000,000
- **Silver**: Total streams < 5,000,000

**Techniques**: `reduce()` to aggregate streams, `map()` to assign tiers

### Task 2: Genre Performance Metrics with Engagement Score

Analyzes genre-level performance with a custom engagement scoring formula:

- Calculates average streams per genre
- Calculates average rating per genre
- Computes **Engagement Score** = (Average Streams / 1,000,000) × Average Rating
- Provides song count metrics per genre

**Techniques**: `reduce()` for grouping and aggregation

### Task 3: Peak Performance Window Analysis

Identifies consecutive 4-song windows with the highest combined engagement:

- Slides through the dataset in 4-song windows
- Scores each window as: (streams / 1000) + (rating × 500)
- Returns the window with the maximum total score

**Techniques**: Sliding window algorithm with manual iteration

### Task 4: Cross-Genre Artist Diversity Analysis

Identifies artists with the most genre diversity and their performance patterns:

- Filters for artists producing in 3+ different genres
- Calculates average streams per genre for each artist
- Identifies best-performing genre for each diverse artist

**Techniques**: `reduce()` for grouping, `filter()` for selection, multi-level aggregation

### Task 5: Premium Playlist Curation Algorithm

Creates an optimized playlist based on quality criteria:

- **Filter criteria**: Rating ≥ 4.3, Streams ≥ 2,000,000, Duration 180-240 seconds
- **Quality Score** = (rating × 2) + (streams / 500,000)
- Returns top 10 songs sorted by quality score

**Techniques**: `filter()`, `map()`, `sort()`, and `slice()` method chaining

## Project Structure

```
homework-2/
├── index.html          # Main HTML page with task descriptions
├── css/
│   └── styles.css      # Styling for the dashboard
├── js/
│   ├── app.js          # Main application logic and solutions
│   └── data.js         # Dummy music streaming dataset (30 songs)
└── README.md           # Project documentation
```

## Dataset

The project includes 30 songs across 6 genres:

- **Pop** (5 songs)
- **Rock** (5 songs)
- **Hip-Hop** (5 songs)
- **Electronic** (5 songs)
- **R&B** (5 songs)
- **Indie** (5 songs)

Each song contains:

- `title`: Song name
- `artist`: Artist name
- `genre`: Music genre
- `streams`: Number of streams (in millions)
- `rating`: User rating (0-5 scale)
- `duration`: Song length in seconds

## Technologies Used

- **HTML5**: Semantic markup for the dashboard
- **CSS3**: Responsive styling and layout
- **JavaScript (ES6+)**:
  - Module system (`import`/`export`)
  - Arrow functions
  - Array methods (`map()`, `filter()`, `reduce()`)
  - Object destructuring
  - Template literals

## Key Learning Objectives

This project demonstrates:

1. Advanced functional programming with array methods
2. Data transformation and aggregation patterns
3. DOM manipulation with vanilla JavaScript
4. Modular code organization with ES6 modules
5. Asynchronous DOM loading with `DOMContentLoaded`
6. Complex data analysis workflows

## How to Run

1. Open `index.html` in a modern web browser
2. The application will automatically load the data and compute all analytics
3. Results will be displayed in the answer boxes below each task description
4. Check the browser console for detailed logging of results

## Browser Compatibility

This project requires a modern browser with support for:

- ES6 modules
- ES6 arrow functions
- `Array.prototype.reduce()`
- `Array.prototype.map()`
- `Array.prototype.filter()`

Tested on:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Code Style

All code follows camelCase naming conventions for variables and functions, ensuring consistency and readability throughout the project.

## Notes

- No traditional loops (`for`, `while`) are used; all iterations use functional array methods
- The application is entirely client-side with no backend dependencies
- Data visualization is text-based, displayed in the HTML dashboard
