<template>
    <h1>Catalog</h1>
    <div class="product-list">
        <div class="product-item"
        v-for="product in store.products"
        :key="product.id"
        @click="goToProductPage(product.id)"
        >
        <img :src="product.thumbnail" :alt="product.title">
        <h2> Brand: {{  product.brand }}</h2>
        <p>Description: {{  product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        </div>
    </div>
</template>  

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CatalogView'
});

</script>

<script setup>
import { onMounted} from 'vue';
import { productsStore } from "@/stores/productsStore";
import { useRouter } from 'vue-router'

const router = useRouter();
const store = productsStore();

const goToProductPage = (id) => {
    router.push({name: 'ProductView', params: {id}})
}

onMounted(() => {
    store.fetchProductsFromDB();
});

</script>

<style scoped>
.product-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 28%;
    margin: 8px;
    padding: 16px;
    box-shadow: 0px 0px 14px 1px #e6e6e6;
    cursor: pointer;
}

.product-item img {
    width: 70%;
}
</style>