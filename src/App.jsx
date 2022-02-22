import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={createTheme({ palette: { type: "dark" } })}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
