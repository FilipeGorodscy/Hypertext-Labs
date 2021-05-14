import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import { store } from "./state/store";
import "./App.css";
import FavoritesView from "./components/FavoritesView";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
        </div>
      </BrowserRouter>
      <FavoritesView />
    </Provider>
  );
}
