import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './HomePage'
import DragonPage from './DragonPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/dragon" component={DragonPage}></Route>
      </Switch>
    </Router>

  );
}

export default App;
