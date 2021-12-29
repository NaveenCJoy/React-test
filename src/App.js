import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favourites">
          <FavouritesPage></FavouritesPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
