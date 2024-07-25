export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const API_HEADER = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjA2YmEyMGViZmMzOWIyODc2MjBmNjUwZDljMzE0OCIsIm5iZiI6MTcyMTg0NjE5NC40MTc4ODgsInN1YiI6IjY2YTE0NWU3YWVlZTA3MTZkMDE0YjRjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g2dmLa2-T6PTdw1_WF5ZwEvA-lIPzW_x7oyFzOdY3_8",
  },
};
export const MOVIE_VIDEO_URL =
  "https://api.themoviedb.org/3/movie/{movie_id}/video";

export const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular";
export const UPCOMING_MOVIE = "https://api.themoviedb.org/3/movie/upcoming";
export const TOP_RATED_MOVIE = "https://api.themoviedb.org/3/movie/top_rated";
