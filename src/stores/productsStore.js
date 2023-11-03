import { defineStore } from 'pinia'

export default productsStore = defineStore('products', {
  state: () => ({
    products: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products/1')
        .then((res) => res.json())
        .then((json) => {
          this.products = json.products
        })
    }
  }
})
