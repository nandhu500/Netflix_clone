import "./App.css";
import Row from "./Row";
import request from "./Request";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="ACTION" fetchUrl={request.fetchActionMovie} />

      <Row
        title="ROMANCE"
        fetchUrl={request.fetchRomanceMovies}
        isLargerow={true}
      />

      <Row title="NETFLIX ORGINALS" fetchUrl={request.fetchNetflixOriginals} />

      <Row
        title="TRENDING"
        fetchUrl={request.fetchTrending}
        isLargerow={true}
      />
      <Row title="TOPRATED" fetchUrl={request.fetchTopRated} />
      <Row
        title="COMEDY"
        fetchUrl={request.fetchComedyMovies}
        isLargerow={true}
      />

      <Row title="HORROR" fetchUrl={request.fetchHorrorMovies} />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={request.fetchDocumentaries}
        isLargerow={true}
      />
    </div>
  );
}

export default App;
