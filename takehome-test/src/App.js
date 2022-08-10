import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobDetails from './JobDetail/JobDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/jobs">
              <JobDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
