<template>
  <div class="carousel-container mx-auto max-w-4xl overflow-hidden relative pt-24">
    <!-- Carousel Content -->
    <div class="flex transition-transform duration-500 ease-in-out " :style="carouselStyle()">
      <div
        v-for="carousel in carousels"
        :key="carousel.id"
        :class="`carousel-item flex-none w-full p-4 rounded-lg shadow-lg ${carousel.bgColor}`"
      >
        <img
          :src="carousel.image"
          :alt="carousel.title"
          class="w-full h-48 rounded-md object-cover"
        />
        <div class="mt-4 text-center">
          <h3 class="text-lg font-semibold text-gray-800">{{ carousel.title }}</h3>
          <p class="mt-2 text-sm text-gray-600">{{ carousel.description }}</p>
        </div>
      </div>
    </div>

    <!-- Dots Navigation -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(carousel, index) in carousels"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'h-3 w-3 rounded-full transition duration-300',
          activeIndex === index ? 'bg-gray-800' : 'bg-gray-400',
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const carousels = ref([
  { id: 1, title: 'Exclusive Offer', description: 'Save big!', image: 'https://www.bigbasket.com/media/uploads/p/l/126906-4_10-aashirvaad-atta-whole-wheat.jpg', bgColor: 'bg-red-100' },
  { id: 2, title: 'New Arrivals', description: 'Check out our latest!', image: 'https://www.bigbasket.com/media/uploads/p/m/126906-4_10-aashirvaad-atta-whole-wheat.jpg', bgColor: 'bg-blue-100' },
  { id: 3, title: 'Categories', description: 'Explore products!', image: 'https://www.bigbasket.com/media/uploads/p/l/40236231-2_5-aashirvaad-select-sharbati-atta-100-mp-whole-wheat-rotis-stay-softer-for-longer.jpg', bgColor: 'bg-green-100' },
]);

const activeIndex = ref(0);

const goToSlide = (index) => {
  activeIndex.value = index;
};

const carouselStyle = () => `transform: translateX(-${activeIndex.value * 100}%);`;
</script>
