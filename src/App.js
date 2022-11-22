import Home from './Home';
import Navbar from './Navbar';
import NewBlog from './NewBlog';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
          <div className="absolute top-0 right-0 bottom-0 left-[200px]">
            <Switch>
               <Route exact path="/">
                  <Home/>
               </Route>
               <Route path="/NewBlog">
                  <NewBlog/>
               </Route>
               <Route path="/blogs/:id">
                  <BlogDetails/>
               </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
