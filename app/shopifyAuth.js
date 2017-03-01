import shopifyAPI from 'shopify-node-api'

const Shopify = new shopifyAPI({
  shop: 'do-book-co.myshopify.com',
  shopify_api_key: '1b58cf98f455b9c61b6d862a05621ebc',
  access_token: 'c587ab5b46431b3a737ae42aefc0ef4f',
  verbose: false
});

export default Shopify
