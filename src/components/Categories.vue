<script setup>
import { ref } from 'vue';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Home Appliances' },
  { id: 4, name: 'Books' },
  { id: 5, name: 'Groceries' }
];

const categoryDropdownOpen = ref(false);

const toggleCategoryDropdown = () => {
  categoryDropdownOpen.value = !categoryDropdownOpen.value;
};
</script>

<template>
  <div class="bg-[#F2F2F2] py-4 mt-14">
    <div class="flex items-center space-x-6 px-2">
      <!-- Shop by Category Button on the Left -->
      <div class="relative">
        <button
            @click="toggleCategoryDropdown"
            class="bg-white text-[#EC7641] px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 font-medium flex items-center space-x-3"
        >
          <!-- Categories Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C7.029 2 3 6.029 3 10.5S7.029 19 12 19s9-4.029 9-8.5S16.971 2 12 2zM12 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <span>Shop by Category</span>
        </button>

        <!-- Dropdown Menu -->
        <div v-if="categoryDropdownOpen" class="absolute bg-white shadow-md rounded-md w-48 mt-2 z-10">
          <ul class="space-y-2 p-2">
            <li v-for="category in categories" :key="category.id" class="text-gray-800 hover:bg-gray-100 px-2 py-1 cursor-pointer">
              {{ category.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>