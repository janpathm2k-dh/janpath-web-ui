<script setup>
import logo from '@/assets/logo.png'
import cart_logo from '@/assets/navbar/cart_logo.png'
</script>

<template>
  <div>
    <nav class="bg-[#EC7641] shadow-md fixed top-0 left-0 w-full z-10">
      <div class="flex items-center justify-between px-4 py-3 w-full">
        <!-- Left Section -->
        <div class="flex items-center space-x-6 pl-0">
          <!-- Logo -->
          <img :src="logo" alt="Logo" class="h-14 w-52" />

          <!-- Address Button -->
          <button class="bg-gradient-to-r from-[#EC7641] to-[#F58C42] text-white px-6 py-3 rounded-full hover:bg-gradient-to-l hover:from-[#F58C42] hover:to-[#EC7641] focus:outline-none focus:ring-2 focus:ring-orange-400 flex items-center space-x-2 border-2 border-[#F58C42]">
            <!-- Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C7.029 2 3 6.029 3 10.5S7.029 19 12 19s9-4.029 9-8.5S16.971 2 12 2zM12 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <span>Enter Address</span>
          </button>


          <!-- Categories Dropdown -->
          <div class="relative">
            <button
                @click="toggleCategoryDropdown"
                class="bg-white text-[#EC7641] px-4 py-2 rounded hover:bg-gray-100 font-medium"
            >
              Categories
            </button>
            <!-- Dropdown Menu -->
            <div v-if="categoryDropdownOpen" class="absolute bg-white shadow-md rounded-md w-48 mt-1 z-10">
              <ul class="space-y-2 p-2">
                <li v-for="category in categories" :key="category.id" class="text-gray-800 hover:bg-gray-100 px-2 py-1 cursor-pointer">
                  {{ category.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Search Section -->
        <div class="relative flex-grow mx-6">
          <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              class="w-full px-4 py-2 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button
              class="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              aria-label="Search"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-6">
          <!-- Cart -->
          <router-link
              to="/cart"
              class="relative text-white hover:text-gray-200 font-medium flex items-center space-x-2"
          >
            <!-- Cart Icon using Heroicons -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-4 h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <!-- Cart item count -->
            <span class="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5">
              5
            </span>
          </router-link>

          <!-- Login/Signup -->
          <button
              class="bg-white text-[#201e1e] hover:text-gray-700 px-4 py-2 rounded font-medium"
          >
            Login/SignUp
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
