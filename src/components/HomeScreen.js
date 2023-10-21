import React from 'react'
import Banner from './HomeScreen/Banner';
import NavBar from './HomeScreen/NavBar';
import Row from './HomeScreen/Row';
import requests from '../requests';

function HomeScreen() {
    return (
        <div className='home_screen'>
            <NavBar />
            <Banner />
            <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
            <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
            <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
            <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
            <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
            <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
