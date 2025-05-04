## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Components

- Header
- Body
  - SideBar
    - MenuItems
  - MainContainer
    - ButtonsList
    - VideoContainer
      - VideoCard

### Concepts

# Debouncing

- Lets consider example of search
  - If difference between two key strokes is < 200ms - Decline API call
  - If difference between two key strokes is > 200ms - Make API call

# Cache

- time complexity to search in array = O(n)
- time complexity to search in object = O(1)
