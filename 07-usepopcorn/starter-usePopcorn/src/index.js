import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} size={24} className="test" /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
