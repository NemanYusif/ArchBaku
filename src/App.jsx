import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Routing from "./Routing";
import { store } from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Routing />
      </div>
    </Provider>
  );
};

export default App;
