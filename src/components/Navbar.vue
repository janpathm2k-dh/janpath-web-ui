<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
  <div>
  <nav class="bg-[#EC7641] shadow-md fixed top-0 left-0 w-full z-10">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- Brand Section -->
      <div class="flex items-center space-x-3">
        <img :src="logo" alt="Logo" class="h-12" />
      </div>

      <!-- Start Section -->

      <router-link to="/" class="text-white hover:text-gray-200 font-medium">
        Home
      </router-link>
      <router-link to="/products" class="text-white hover:text-gray-200 font-medium">
        Products
      </router-link>
      <div class="relative">
        <input
          type="text"
          placeholder="Search..."
          class="px-3 py-2 rounded-full bg-white text-gray-700 w-64"
        />
        <button class="absolute right-2 top-2 text-gray-500"  aria-label="Search" >
          <i class="fas fa-search"></i>
        </button>
      </div>


      <!-- End Section -->
      <div class="flex items-center space-x-6">
        <router-link
          to="/cart"
          class="relative text-white hover:text-gray-200 font-medium"
        >
          <i class="fas fa-shopping-cart"></i>
          <span class="absolute top-0 right-0 bg-black text-white text-xs rounded-full px-2 py-0.5">
            5
          </span>
        </router-link>
        <div>
          <button class="bg-white text-[#201e1e] hover:text-gray-700 px-4 py-2 rounded">
            Login/SignUp
          </button>
        </div>
      </div>
    </div>
  </nav>
  </div>
</template>

<style scoped>
/* Optional: Additional custom styles if required */
</style>
