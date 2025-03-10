# Features

    - Home page
      - Login/Sign up form
      - redirect to browse page

    - Browse page(after authentication)
      - header
      - main movie
        - trailer in background
        - title & description, play button
        - Movie suggestions
          - Movie lists * n

    - Netflix GPT
        - Search Bar
        - Movie Suggestions



# Netflix GPT

  - Create React app/ vite
  - Configured Tailwind 
  - Header 
  - login form
  - signup form
  - Form validation 
  - useRef Hook
  - firebase setup
  - deploying our app to production
  - create signup user
  - implemented  in with user
  - created redux store with user slice
  - impllemented sign out
  - update profile 
  - bugfix:- sign up user displayname and profile pic update
  - bugfix:- if the user is not logged in redirect/browse to login page and vice-versa 
  - unsubcribed from the onAuthStateChanged callback when component unmounts.
  - add hardcoded values to the constants file
  - register TMDB API and create an app and get access token 
  - get data from TMDB now playing movies list API

  - building the browse page
    - Main/primary Container
        - Video Background
        - Video Title

    - Secondary Container
      - MovieList * n
        - Cards * n