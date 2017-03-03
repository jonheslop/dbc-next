import Shopify from './shopifyAuth'

const shopifyFetch = function fetchData(url) {
    return new Promise(function(resolve, reject) {
        Shopify.get(url, function(err, data, headers) {
            resolve(data)
        })
    })
}

export default shopifyFetch
