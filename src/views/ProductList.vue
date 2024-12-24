<script setup>
import { ref } from 'vue'
import { reactive, onMounted } from 'vue'
import product_api from '@/apis/product_api.js'

const products = ref([])
onMounted(
  async () => {
    try {
      const response = await product_api.getAllProducts()
      products.value = response.data.data
    } catch (error) {
      console.error('Error fetching job', error)
    } finally {
    }
    console.log('Fetched products:', products.value) // Debugging: Log fetched products
  })
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        <a
          v-for="(product, index) in products"
          :key="index"
          href="#"
          class="group"
        >
          <!-- Display the first product image if it exists -->
          <img
            :src="product.productImages[0]?.url || 'https://via.placeholder.com/150'"
            :alt="product.name"
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
          >
          <h3 class="mt-4 text-lg text-gray-700">{{ product.name }}</h3>
          <span class="flex items-center space-x-2">
            <p class="text-base font-medium text-gray-900">Our Price: {{ product.sellRate }}</p>
            <p class="text-base font-medium text-gray-500 line-through">MRP: {{ product.mrp }}</p>
        </span>
        <p class="text-base font-medium text-#ec7641 ">SAVE: {{ (product.mrp - product.sellRate).toFixed(2) }}</p>

        </a>

      </div>
    </div>
  </div>

</template>
