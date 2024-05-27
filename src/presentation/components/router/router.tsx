import { createBrowserRouter } from "react-router-dom";
import { GameScreen, GroupScreen, HomeScreen, NotFoundScreen, StoreScreen } from "../../screen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />
  },
  {
    path: "/store",
    element: <StoreScreen />
  },
  {
    path: "/group",
    element: <GroupScreen />
  },
  {
    path: "/game",
    element: <GameScreen />
  },
  {
    path: "/notfound",
    element: <NotFoundScreen />
  },
]);