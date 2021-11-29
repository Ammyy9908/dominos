import { connect } from "react-redux";
import Home from "./pages";
import { SetUser } from "./redux/actions/_appAction";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./styles.css";
import Menu from "./pages/menu";
import Items from "./pages/items";

function App({ user, setUser }) {

  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>

    <Route exact path="/menu">
    <Menu/>
    </Route>

    <Route exact path="/item">
    <Items/>
    </Route>
    

       
         
          

   
   
  </Switch>
</div>
</Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(SetUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
