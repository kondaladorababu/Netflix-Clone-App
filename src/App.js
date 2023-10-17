import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      {/* <h1>Large Banner comes Here</h1> */}
      <Banner />
      <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
