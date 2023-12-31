import { defineStore } from 'pinia';

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: [],
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products?limit=10')
        .then((res) => res.json())
        .then((json) => {
          this.products = json.products;
        });
    },

    addtoCart(product){
      this.cart.push(product);
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
