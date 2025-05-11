import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "results",
          element: <SearchResults />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <Provider store={appStore}>
        <div className="dark:bg-gray-900 dark:text-white">
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
