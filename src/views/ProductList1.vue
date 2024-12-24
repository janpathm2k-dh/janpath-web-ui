<script setup>
import { ref, onMounted } from 'vue';
import product_api from '@/apis/product_api.js';

// Use ref for reactive variables
const products = ref([]);

onMounted(async () => {
  try {
    const response = await product_api.getAllProducts();
    products.value = response.data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    console.log('Fetched products:', products.value);
  }
});
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <!-- Iterate through products -->
        <a
          v-for="(product, index) in products"
          :key="product.id || index"
          href="#"
          class="group"
        >
          <img
            :src="product.productImages[0]?.url"
            :alt="product.name"
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
          >
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.sellRate }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
