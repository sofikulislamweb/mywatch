import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import './App.css';
import AuthProvider from "./Pages/contexts/AuthProvider/AuthProvider.js";
import DashBoard from "./Pages/DashBoard/DashBoard.js";
import Explore from "./Pages/Home/Banner/Explore/Explore.js";
import Home from "./Pages/Home/Home/Home.js";
import Login from "./Pages/Login/Login/Login.js";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute.js";
import Register from "./Pages/Login/Register/Register.js";
import Purchase from "./Pages/Purchase/Purchase.js";
import Footer from "./Pages/Shared/Footer/Footer.js";
import Header from "./Pages/Shared/Header/Header.js";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header/>
            <Switch>
              
            <Route exact path="/">
            <Home></Home>
              </Route>
              
            <Route path="/home">
            <Home></Home>
              </Route>
              
            <Route path="/login">
            <Login></Login>
              </Route>
              
            <Route path="/register">
            <Register></Register>
            </Route>
              
            <Route path="/explore">
              <Explore></Explore>
            </Route>
              
              <Route path="/dashboard">
                <DashBoard></DashBoard>
              </Route>
              
            <PrivateRoute path="/purchase/:Id">
               <Purchase></Purchase>
            </PrivateRoute>
              
          </Switch>
         <Footer/>
       </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
