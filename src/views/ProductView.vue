<template>
    <button @click="backToCatalog" style="margin-top: 30px;">Back to catalog</button>
    <div class="product"> 
        <div class="product-image">
            <img :src="selectedProduct.thumbnail" alt="">
        </div>
        <div class="product-details">
            <p>Brand: {{ selectedProduct.brand }}</p>
            <p>Description: {{ selectedProduct.description }}</p>
            <h2>Price: ${{ selectedProduct.price }}</h2>
            <button @click="addToCart">Add to cart</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductView',
});

</script>

<script setup>
import { computed } from 'vue'
import { productsStore } from "@/stores/productsStore"
import { useRoute, useRouter } from 'vue-router'

const store = productsStore();
const route = useRoute();
const router = useRouter();

const addToCart = () => {
    store.addtoCart(selectedProduct.value);
    router.push({name: 'CartView'})
}

const backToCatalog = () => {
    router.push({name: 'Catalog'})
}

const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
});

</script>

<style scoped>
.product {
    display: flex;
    margin-top: 50px;
}

.product-image {
    margin-right: 24px;
}
</style>