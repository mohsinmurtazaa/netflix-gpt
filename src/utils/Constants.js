export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const API_HEADER = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjA2YmEyMGViZmMzOWIyODc2MjBmNjUwZDljMzE0OCIsIm5iZiI6MTcyMTg0NjE5NC40MTc4ODgsInN1YiI6IjY2YTE0NWU3YWVlZTA3MTZkMDE0YjRjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g2dmLa2-T6PTdw1_WF5ZwEvA-lIPzW_x7oyFzOdY3_8 ",
  },
};
export const MOVIE_VIDEO_URL =
  "https://api.themoviedb.org/3/movie/{movie_id}/video";

export const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular";
export const UPCOMING_MOVIE = "https://api.themoviedb.org/3/movie/upcoming";
export const TOP_RATED_MOVIE = "https://api.themoviedb.org/3/movie/top_rated";

export const LOGIN_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/1461adb6-5183-4a48-8346-d14d7250302c/US-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8b32f466-39f1-47d0-ade1-7bbf83666948_large.jpg";

export const SUPPORTED_LANGUAGE = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "urdu",
    name: "Urdu",
  },
];

export const OPEN_AI_KEY = "";
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie";
