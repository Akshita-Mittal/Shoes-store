import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'

function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/products">
              <ProductList />
          </Route>
          <Route exact path="/products/:id">
              <ProductDetail />
          </Route>
          <Route exact path="/cart">
              <Cart />
          </Route>
      </Switch>
    </>
  );
}

export default App;
