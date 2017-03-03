import React from 'react'
import Head from 'next/head'
import fetchShopifyData from '../components/shopifyFetch'
import 'isomorphic-fetch'
import Header from '../components/header'
import Books from '../components/books'

export default class extends React.Component {
    static async getInitialProps() {

        const shopData = await fetchShopifyData('/admin/shop.json').then(function(result) {
            return result.shop
        })

        const productData = await fetchShopifyData('/admin/products.json').then(function(result) {
            return result.products
        })

        return {
            shop: shopData,
            products: productData
        }
    }
    render() {
        return (
            <div>
                <Head>
                  <title>{ this.props.shop.name }</title>
                </Head>
                <Header/>
                <main role="main" className="ml7 ph3">
                    <Books books={ this.props.products } />
                </main>
            </div>
        )
    }
}
