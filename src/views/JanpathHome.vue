<script setup>
import router from '@/router'
import HomeCarousel from '../components/HomeCarousel.vue'
import Categories from "@/components/Categories.vue";
import ProductDiscountRange from "@/components/ProductDiscountRange.vue";
</script>

<template>
  <Categories/>
  <HomeCarousel></HomeCarousel>
  <ProductDiscountRange></ProductDiscountRange>
</template>
