import React from 'react'
import fetchShopifyData from '../app/shopifyFetch'
import 'isomorphic-fetch'
import Book from '../app/book'

export default class extends React.Component {
    static async getInitialProps() {

        const productData = await fetchShopifyData('/admin/products.json').then(function(result) {
            return result.products
        })

        return { products: productData }
    }
    render() {
        return (
            <div>
                <header role="banner" className="fixed vh-100 bg-near-white top-0 left-0 w5 flex content-center justify-center flex-column border-box pa4">
                    <header className="items-start flex-auto">
                        <h1 className="f3">The Do Book Co.</h1>
                        <nav className="sans-serif lh-copy mt5">
                            <ul className="list pa0">
                                <li><a className="link fw6 f4" href="#">Books</a></li>
                                <li><a className="link fw6 f4" href="#">About</a></li>
                                <li><a className="link fw6 f4" href="#">Events</a></li>
                            </ul>
                        </nav>
                    </header>
                    <footer className="flex-auto items-end relative">
                        <p className="sans-serif 4 bottom-0 absolute">Basket 1 item &pound;8</p>
                    </footer>
                </header>
                <main role="main" className="ml7 ph3">
                    <ul className="list pl0 cf">
                        { this.props.products.map(book => (
                            <Book key={ book.id } image={ book.images[0].src } title={ book.title } author={ book.vendor } />
                        ))}
                    </ul>
                </main>
            </div>
        )
    }
}
