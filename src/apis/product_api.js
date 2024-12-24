import axios from 'axios'

var product_apis = {
  getAllProducts() {
    return axios.get('http://localhost:8080/product/all-products',
      {
        headers: {
          'accept': 'application/hal+json'
        }
      })
  }
}

export default product_apis

