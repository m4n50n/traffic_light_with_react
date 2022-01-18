// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include styles
import "../styles/index.css";
import "../styles/bootstrap.min.css";

// import components
import Home from "./component/home.jsx";

// render app
ReactDOM.render(<Home />, document.querySelector("#app"));
