import React from "react";
import "./App.css";
import "./static/fonts/monteserrat.css";
import Application from "./components/Application";
import { initialState, reducer } from "./stateProviders/reducer";
import { StateProvider } from "./stateProviders/StateProvider";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Application />
    </StateProvider>
  );
}

export default App;
