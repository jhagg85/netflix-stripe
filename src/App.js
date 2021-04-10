import React from "react";
import Nav from "./Nav";
import HomeScreen from "./HomeScreen";
import Row from "./Row";

import requests from "./Requests";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />

      <HomeScreen />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetFlixOriignals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchNetFlixOriignals} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
