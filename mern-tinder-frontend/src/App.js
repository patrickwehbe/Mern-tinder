import React from "react";
import "./App.css";
import Cards from "./TinderCards";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
