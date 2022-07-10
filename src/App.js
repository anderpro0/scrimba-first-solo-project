import React from "react";
import Header from './components/Header'
import About from './components/About'
import  Interest from './components/Interest'
import Footer from './components/Footer'


export default function App() {
    return (
        <div className="container">
            <Header />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}