import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// css
import "./styles/index.css";
import "./styles/buttons.css";
import "./styles/flex.css";
import "./styles/form.css";
import "./styles/logos.css";
import "./styles/variables.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
