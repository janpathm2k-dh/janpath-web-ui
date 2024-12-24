<template>
  <div class="discount-range-section mt-12">
    <h2 class="text-center text-2xl font-semibold mb-6">Shop by Discount Range</h2>

    <!-- Grid of Discount Ranges -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mx-4">
      <!-- Discount range button for 0-20% -->
      <div
          class="discount-button flex justify-center items-center bg-orange-500 text-white p-4 rounded-full cursor-pointer hover:bg-orange-400 transition duration-300"
          @click="goToDiscountPage(0, 20)"
      >
        <span class="text-lg">0-20%</span>
      </div>

      <!-- Discount range button for 20-40% -->
      <div
          class="discount-button flex justify-center items-center bg-green-500 text-white p-4 rounded-full cursor-pointer hover:bg-green-400 transition duration-300"
          @click="goToDiscountPage(20, 40)"
      >
        <span class="text-lg">20-40%</span>
      </div>

      <!-- Discount range button for 40-60% -->
      <div
          class="discount-button flex justify-center items-center bg-blue-500 text-white p-4 rounded-full cursor-pointer hover:bg-blue-400 transition duration-300"
          @click="goToDiscountPage(40, 60)"
      >
        <span class="text-lg">40-60%</span>
      </div>

      <!-- Discount range button for 60% and above -->
      <div
          class="discount-button flex justify-center items-center bg-red-500 text-white p-4 rounded-full cursor-pointer hover:bg-red-400 transition duration-300"
          @click="goToDiscountPage(60, 100)"
      >
        <span class="text-lg">60%+</span>
      </div>

      <!-- New Discount range button for 10-30% -->
      <div
          class="discount-button flex justify-center items-center bg-yellow-500 text-white p-4 rounded-full cursor-pointer hover:bg-yellow-400 transition duration-300"
          @click="goToDiscountPage(10, 30)"
      >
        <span class="text-lg">10-30%</span>
      </div>
    </div>

    <!-- Oval Input Box for Custom Discount Range -->
    <div class="mt-12 flex justify-center items-center">
      <div class="flex items-center bg-blue-500 text-white p-4 w-full md:w-96 rounded-full cursor-pointer hover:bg-blue-400 transition duration-300">
        <input
            type="number"
            v-model="customDiscount"
            placeholder="Enter your custom discount"
            class="p-2 w-full md:w-64 rounded-full text-center text-lg outline-none bg-transparent border-none"
            :class="{
            'border-2 border-white': customDiscount.length > 0,
            'border-0': customDiscount.length === 0
          }"
        />
        <button
            @click="submitDiscount"
            class="ml-4 bg-white text-blue-500 font-semibold px-4 py-2 rounded-full hover:bg-blue-100"
        >
          Get Products
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const customDiscount = ref('')

const goToDiscountPage = (minDiscount, maxDiscount) => {
  router.push({ name: 'productsByDiscount', query: { minDiscount, maxDiscount } });
}

// Optionally, you can use the customDiscount value to navigate to the products page for custom range
const submitDiscount = () => {
  if (customDiscount.value) {
    router.push({ name: 'productsByDiscount', query: { minDiscount: customDiscount.value, maxDiscount: customDiscount.value } });
  }
}
</script>

<style scoped>
.discount-button {
  transition: transform 0.3s ease-in-out;
  height: 60px; /* Reduced height */
}

.discount-button:hover {
  transform: translateY(-5px);
}

input {
  width: 100%;
  text-align: center;
  height: 40px; /* Reduced height */
  padding: 0.5rem; /* Adjust padding for smaller input field */
  font-size: 1.125rem; /* Slightly smaller font size */
  -moz-appearance: textfield; /* Remove the spinner on Firefox */
  -webkit-appearance: none; /* Remove the spinner on Webkit browsers (Chrome, Safari) */
  appearance: none; /* Remove the spinner on other browsers */
}

input:focus {
  border-color: white;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7); /* Placeholder text color */
}

button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e1e7f3;
}
</style>
