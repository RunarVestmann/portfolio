import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
        </Router>
    );
};

export default App;
