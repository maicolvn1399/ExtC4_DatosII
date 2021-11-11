import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import NewUser from './NewUser';


function App() {
  return (
    <Router>
      <div className= "App">
        <Navbar></Navbar>
        <div className = "content">
          <Switch>
             <Route exact path = "/">
               <Home></Home>
             </Route>

             <Route path = "/new-user">
               <NewUser></NewUser>
             </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
