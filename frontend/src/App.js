import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import { AddMenu } from "./components/AddMenu";
import { MenuList } from "./components/MenuList";
import { UpdateMenu } from "./components/UpdateMenu";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Customer List
        </a>
        <div className="navbar-nav">
          <li className="nav-item">
            <Link exact to={"/add/"} className="nav-link">
              Add Customer
            </Link>
          </li>
        </div>
      </nav>
      <div className="container m-10">
      <Switch>
          <Route exact path={["/", "/menus"]} component={MenuList} />
          <Route exact path="/add/" component={AddMenu} />
          <Route path="/menu/:id/update/" component={UpdateMenu} />
    </Switch>
      </div>
    </div>
  );
}
export default App;