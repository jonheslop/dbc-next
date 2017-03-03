import React from 'react'
import Nav from './nav'

export default () => (
    <header role="banner" className="fixed vh-100 bg-near-white top-0 left-0 w5 flex content-center justify-center flex-column border-box pa4">
        <header className="items-start flex-auto">
            <h1 className="f3">The Do Book Co.</h1>
            <Nav />
        </header>
        <footer className="flex-auto items-end relative">
            <p className="sans-serif 4 bottom-0 absolute">Basket 1 item &pound;8</p>
        </footer>
    </header>
)
