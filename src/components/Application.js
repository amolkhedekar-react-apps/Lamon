import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "./../pages/authentication/SignIn";
import SignUp from "./../pages/authentication/SignUp";
import Products from "./../pages/products/Products";
import Orders from "./../pages/orders/Orders";
import Cart from "../pages/cart/Cart";
import SearchInput from "./searchInput/SearchInput";
import { auth } from "./../services/firebase";
import { useStateValue } from "./../stateProviders/StateProvider";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Nav from "./navbar/Nav";

function Application() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        console.log("THE USER IS >>> ", loggedUser.email);
        dispatch({
          type: "SET_USER",
          user: loggedUser.email,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:key">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Application;
