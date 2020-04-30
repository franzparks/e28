<template>
    <div id='product-page' v-if='product'>
        <h1>{{ product.name }}</h1>
        <img class='product-thumb' :alt='"Product image of  " + product.name' :src='imageSrc' />
        <p class='description'>{{ product.description }}</p>
        <div class='price'>${{ product.price }}</div>

        <button @click='addToCart(slug)'>Add to cart</button>

        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Your cart has been updated!</div>
        </transition>

        <router-link :to='{ name: "products" }'>&larr; Return to all products</router-link>
    </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            addAlert: false
        };
    },
    computed: {
        product() {
            return this.$store.getters.getProductBySlug(this.slug);
        },
        imageSrc: function() {
            try {
                return require('@/assets/images/products/' +
                    this.product.slug +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/products/image-not-available.jpg');
            }
        }
    },
    methods: {
        addToCart: function(slug) {
            let cart = new app.Cart();
            cart.add(slug);

            this.$store.commit('updateCartCount', 1);

            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 3000);
        }
    }
};
</script>

<style scoped>
</style>