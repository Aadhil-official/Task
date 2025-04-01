import React from 'react'
import { Body, Footer, Logos, Nav, News, Services, State, Testimon, Welcome } from '../components'

function Home() {
    return (
        <div>
            <Nav /><br />
            <Body />
            <Welcome /><br />
            <Services />
            <State />
            <Testimon />
            <Logos />
            <News />
            <Footer />
        </div>
    )
}

export default Home