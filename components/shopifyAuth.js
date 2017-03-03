import shopifyAPI from 'shopify-node-api'
import config from '../config'

const Shopify = new shopifyAPI({
  shop: config.shop,
  shopify_api_key: config.apiKey,
  access_token: config.apiPassword,
  verbose: false
});

export default Shopify
